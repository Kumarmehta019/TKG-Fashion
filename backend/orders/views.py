from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Order
from .serializers import OrderSerializer
from rest_framework.permissions import IsAuthenticated

class OrderListView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, _request):

        
        # get all the orders from the db
        orders = Order.objects.all()
        print('ORDERS ->', orders)
        serialized_orders = OrderSerializer(orders, many=True)
        print('SERIALIZED ORDERS ->', serialized_orders)
        return Response(serialized_orders.data, status=status.HTTP_200_OK)

    ## POST ROUTE
    def post(self, request):
        orders = OrderSerializer(data=request.data)
        # checks if it is valid
        if orders.is_valid():
            # saves it to the DB
            orders.save()
            # sends 201 back to the front-end
            return Response(orders.data, status=status.HTTP_201_CREATED)
        else:
            return Response(orders.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

## CREATE, DELETE & UPDATE ROUTE
class OrderDetailView(APIView):
    permission_classes = (IsAuthenticated,)
    ## GET BY ID
    def get(self, _request, pk):
        order = Order.objects.get(id=pk)
        # converts python object into JSON
        serialized_order = OrderSerializer(order)
        return Response(serialized_order.data, status=status.HTTP_200_OK)

    ## DELETE BY ID
    def delete(self, request, pk):
        try:
            order = Order.objects.get(id=pk)
            order.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    ## UPDATE ROUTE
    def put(self, request, pk):
        order = Order.objects.get(id=pk)
        updated_order = OrderSerializer(order, data=request.data)
        if updated_order.is_valid():
            updated_order.save()
            return Response(updated_order.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_order.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)