from django.urls import path
from .views import SellerListView
from .views import SellerDetailView

urlpatterns = [
    path('<int:pk>/', SellerDetailView.as_view()),     # wildcard: we specify that the route can match /5 or /6
    path('', SellerListView.as_view()),
]