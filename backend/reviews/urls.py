from django.urls import path
from .views import ReviewListView
from .views import ReviewDetailView

urlpatterns = [
    path('<int:pk>/', ReviewDetailView.as_view()),     # wildcard: we specify that the route can match /5 or /6
    path('', ReviewListView.as_view()),
]