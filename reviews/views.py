from datetime import date
from rest_framework.exceptions import NotFound
from .models import Review
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status ## status code
from .serializers import ReviewSerializer, PopulatedReviewSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.exceptions import PermissionDenied


class ReviewDetailView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def delete(self, request, pk):
        try:
            review = Review.objects.get(id=pk)
        except Review.DoesNotExist:
            raise NotFound()
        if review.owner != request.user: # theoretically can put this line in update too
            raise PermissionDenied()
        review.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    def put(self, request, pk):
        review = Review.objects.get(id=pk) # django ORM method to grab
        updated_review = PopulatedReviewSerializer(review, data=request.data)
        if updated_review.is_valid():
            updated_review.save()
            return Response(updated_review.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_review.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def get(self, request, pk):
        review = Review.objects.get(id=pk)
        serialized_review = PopulatedReviewSerializer(review)
        return Response(serialized_review.data,status=status.HTTP_200_OK)

class ReviewListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def post(self,request):
        print("ID ->", request.user.id)
        print("DATA ->", request.data)
        request.data["owner"] = request.user.id
        review = PopulatedReviewSerializer(data = request.data)
        if review.is_valid():
            review.save(owner = request.user) # <--- django ORM method to save to db
            return Response(review.data, status=status.HTTP_201_CREATED)
        else:
            return Response(review.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def get(self,request):
        reviews = Review.objects.all()
        serialized_reviews = PopulatedReviewSerializer(reviews, many=True)
        return Response(serialized_reviews.data, status=status.HTTP_200_OK)
