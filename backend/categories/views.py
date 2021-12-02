from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Category
from .serializers import CategorySerializer

# Create your views here.
class CategoryListView(APIView):

    def get(self, _request):
        categories = Category.objects.all()
        print('CATEGORIES ->', categories)
        serialized_categories = CategorySerializer(categories, many = True)
        print('SERIALIZED CATEGORIES ->', serialized_categories)
        return Response(serialized_categories.data, status = status.HTTP_200_OK)

    ## POST ROUTE
    def post(self, request):
        categories = CategorySerializer(data = request.data)
        # checks if it is valid
        if categories.is_valid():
            # saves it to the DB
            categories.save()
            # sends 201 back to the front-end
            return Response(categories.data, status = status.HTTP_201_CREATED)
        else:
            return Response(categories.errors, status = status.HTTP_422_UNPROCESSABLE_ENTITY)

## CREATE, DELETE & UPDATE ROUTE
class CategoryDetailView(APIView):
    ## GET BY ID
    def get(self, _request, pk):
        category = Category.objects.get(id = pk)
        # converts python object into JSON
        serialized_category = CategorySerializer(category)
        return Response(serialized_category.data, status = status.HTTP_200_OK)

    ## DELETE BY ID
    def delete(self, request, pk):
        try:
            category = Category.objects.get(id = pk)
            category.delete()
            return Response(status = status.HTTP_204_NO_CONTENT)
        except:
            return Response(status = status.HTPP_500_INTERNAL_SERVER_ERROR)

    ## UPDATE ROUTE
    def put(self, request, pk):
        category = Category.objects.get(id = pk)
        updated_category = CategorySerializer(category, data = request.data)
        if updated_category.is_valid():
            updated_category.save()
            return Response(updated_category.data, status = status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_category.errors, status = status.HTTP_422_UNPROCESSABLE_ENTITY)