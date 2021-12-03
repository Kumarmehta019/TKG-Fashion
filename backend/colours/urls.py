from django.urls import path
from .views import ColourListView, ColourDetailView


urlpatterns = [
    path('<int:pk>/', ColourDetailView.as_view()),     # wildcard: we specify that the route can match /5 or /6
    path('', ColourListView.as_view()),
]