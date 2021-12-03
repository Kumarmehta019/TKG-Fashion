from rest_framework import serializers
from .models import Colour

class ColourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Colour
        fields = '__all__'