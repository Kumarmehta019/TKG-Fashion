from django.db import models

# Create your models here.
class Review(models.Model):
    comment = models.TextField()
    rating = models.IntegerField()
    image = models.ImageField(upload_to='images/')
    product = models.ForeignKey("products.Product", on_delete=models.CASCADE)

    def __str__(self):
        return f"Review: {self.rating}/5. {self.comment}"