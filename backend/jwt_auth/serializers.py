from rest_framework import serializers
from django.contrib.auth import get_user_model
import django.contrib.auth.password_validation as validations
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ValidationError

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)
    password_confirmation = serializers.CharField(write_only=True)

    def validate(self, data):

# REMOVE THE PASSWORD AND PASSWORD CONFIRMATION FROM THE REQUEST BODY

        password = data.pop('password')
        password_confirmation = data.pop('password_confirmation')

# CHECK IF THE PASSWORDS MATCH
        if password != password_confirmation:
            raise serializers.ValidationError({'password_confirmation': 'Passwords do not match'})
# CHECK IF THE PASSWORD IS VALID
        try:
            validations.validate_password(password=password)
        except ValidationError as err:
            raise serializers.ValidationError({'password': err.messages})
# HASH THE PASSWORD AND ADD BACK TO THE DICTIONARY
        data['password'] = make_password(password)
        return data

    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'password_confirmation',)