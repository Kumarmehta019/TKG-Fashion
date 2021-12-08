from django.contrib import admin
from django.contrib.auth import get_user_model
from .models import User
# Register your models here.
User = get_user_model() # get current user model; our custom user model and not django''s one
admin.site.register(User)