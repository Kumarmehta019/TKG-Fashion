from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Product
from .serializers import ProductSerializer, PopulatedProductSerializer
from django.http.response import HttpResponse


class ProductListView(APIView):

    def get(self, _request):
        # get all the products from the db
        products = Product.objects.all()
        print('PRODUCTS ->', products)
        serialized_products = PopulatedProductSerializer(products, many=True)
        print('SERIALIZED PRODUCTS ->', serialized_products)
        return Response(serialized_products.data, status=status.HTTP_200_OK)

    ## POST ROUTE
    def post(self, request):
        product = ProductSerializer(data=request.data)
        # checks if it is valid
        if product.is_valid():
            # saves it to the DB
            product.save()
            # sends 201 back to the front-end
            return Response(product.data, status=status.HTTP_201_CREATED)
        else:
            return Response(product.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

## CREATE, DELETE & UPDATE ROUTE
class ProductDetailView(APIView):
    ## GET BY ID
    def get(self, _request, pk):
        product = Product.objects.get(id=pk)
        # converts python object into JSON
        serialized_product = PopulatedProductSerializer(product)
        return Response(serialized_product.data, status=status.HTTP_200_OK)

    ## DELETE BY ID
    def delete(self, request, pk):
        try:
            product = Product.objects.get(id=pk)
            product.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    ## UPDATE ROUTE
    def put(self, request, pk):
        product = Product.objects.get(id=pk)
        updated_product = ProductSerializer(product, data=request.data)
        if updated_product.is_valid():
            updated_product.save()
            return Response(updated_product.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_product.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

# Create your views here.
def home(request):
    list_of_products = Product.objects.all()
    print(list_of_products)
    return HttpResponse('<h1>Hello</h1>')