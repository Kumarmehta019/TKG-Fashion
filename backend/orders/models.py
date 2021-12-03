from django.db import models

# Create your models here.
class Order(models.Model):
    total = models.IntegerField()
    customer = models.ForeignKey('jwt_auth.User', on_delete=models.CASCADE)
    product = models.ForeignKey('products.Product', on_delete=models.CASCADE)

    def __str__(self):
        return f"Total: {self.total}, {self.customer}"