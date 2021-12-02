from django.urls import path
from .views import CategoryDetailView, CategoryListView

urlpatterns = [
  path('<int:pk>/', CategoryDetailView.as_view()),
  path('', CategoryListView.as_view())
]