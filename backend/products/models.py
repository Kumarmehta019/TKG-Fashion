from django.db import models

# Create your models here.
class Product(models.Model):
    SIZES = (
        ('XS','extra-small'),
        ('S','small'),
        ('M','medium'),
        ('L','large'),
        ('XL','extra-large')
    )
    name = models.CharField(max_length=100, default=None)
    price = models.IntegerField()
    size = models.CharField(max_length=10, default=None, choices=SIZES)
    stock = models.IntegerField()
    # image = models.CharField(max_length=500, default=None) -> make this another relationship (as Mike said)
    # category(FK)

    def __str__(self):
        return f'{self.name, self.size}'
    

