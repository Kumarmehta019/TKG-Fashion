from rest_framework import serializers
from .models import Order
from products.serializers import PopulatedProductSerializer

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'

class PopulatedOrderSerializer(OrderSerializer):
    product = PopulatedProductSerializer(read_only=True)