from django.urls import path
from .views import ProductListView, ProductDetailView
from . import views

urlpatterns = [
    path('home/', views.home),
    path('', ProductListView.as_view()),
    path('<int:pk>/', ProductDetailView.as_view()),
]