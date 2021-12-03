from rest_framework import serializers

from images.serializers import ImageSerializer
from .models import Product
from reviews.serializers import PopulatedReviewSerializer

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class PopulatedProductSerializer(ProductSerializer):
    class Meta:
        model = Product
        fields = '__all__'
    review_set = PopulatedReviewSerializer(read_only = True, many = True)
    image_set = ImageSerializer(read_only = True, many = True)
