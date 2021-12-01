from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Product
from .serializers import ProductSerializer

# Create your views here.


class ProductListView(APIView):

    def get(self, _request):
        # get all the products from the db
        products = Product.objects.all()
        print('PRODUCTS ->', products)
        serialized_products = ProductSerializer(products, many=True)
        print('SERIALIZED PRODUCTS ->', serialized_products)
        return Response(serialized_products.data, status=status.HTTP_200_OK)