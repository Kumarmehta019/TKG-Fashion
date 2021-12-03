from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Seller
from .serializers import SellerSerializer

class SellerListView(APIView):

    def get(self, _request):
        # get all the sellers from the db
        sellers = Seller.objects.all()
        print('SELLERS ->', sellers)
        serialized_sellers = SellerSerializer(sellers, many=True)
        print('SERIALIZED SELLERS ->', serialized_sellers)
        return Response(serialized_sellers.data, status=status.HTTP_200_OK)

    ## POST ROUTE
    def post(self, request):
        seller = SellerSerializer(data=request.data)
        # checks if it is valid
        if seller.is_valid():
            # saves it to the DB
            seller.save()
            # sends 201 back to the front-end
            return Response(seller.data, status=status.HTTP_201_CREATED)
        else:
            return Response(seller.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

## CREATE, DELETE & UPDATE ROUTE
class SellerDetailView(APIView):
    ## GET BY ID
    def get(self, _request, pk):
        seller = Seller.objects.get(id=pk)
        # converts python object into JSON
        serialized_seller = SellerSerializer(seller)
        return Response(serialized_seller.data, status=status.HTTP_200_OK)

    ## DELETE BY ID
    def delete(self, request, pk):
        try:
            seller = Seller.objects.get(id=pk)
            seller.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    ## UPDATE ROUTE
    def put(self, request, pk):
        seller = Seller.objects.get(id=pk)
        updated_seller = SellerSerializer(seller, data=request.data)
        if updated_seller.is_valid():
            updated_seller.save()
            return Response(updated_seller.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_seller.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
