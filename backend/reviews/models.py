from datetime import date
from django.db import models

# Create your models here.
class Review(models.Model):
    comment = models.TextField()
    rating = models.IntegerField()
    product = models.ForeignKey('products.Product', on_delete=models.CASCADE, related_name='reviews')
    owner = models.ForeignKey('jwt_auth.User', on_delete=models.CASCADE, related_name='reviews')
    posted_on = models.DateField(default=date.today)

    def __str__(self):
        return f"Review: {self.rating}/5. {self.comment}"