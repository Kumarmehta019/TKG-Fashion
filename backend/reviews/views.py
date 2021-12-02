from .models import Review
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status ## status code
from .serializers import ReviewSerializer

class ReviewDetailView(APIView):
    def delete(self, request, pk):
        try:
            review = Review.objects.get(id=pk)
            review.delete()
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    def put(self, request, pk):
        review = Review.objects.get(id=pk) # django ORM method to grab
        updated_review = ReviewSerializer(review, data=request.data)
        if updated_review.is_valid():
            updated_review.save()
            return Response(updated_review.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_review.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def get(self, request, pk):
        review = Review.objects.get(id=pk)
        serialized_review = ReviewSerializer(review)
        return Response(serialized_review.data,status=status.HTTP_200_OK)

class ReviewListView(APIView):
    def post(self,request):
        review = ReviewSerializer(data = request.data)
        if review.is_valid():
            review.save() # <--- django ORM method to save to db
            return Response(review.data, status=status.HTTP_201_CREATED)
        else:
            return Response(review.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def get(self,request):
        reviews = Review.objects.all()
        serialized_reviews = ReviewSerializer(reviews, many=True)
        return Response(serialized_reviews.data, status=status.HTTP_200_OK)
