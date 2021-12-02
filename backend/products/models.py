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
    category = models.ForeignKey("categories.Category", on_delete = models.CASCADE)
    colour = models.ForeignKey("colours.Colour", on_delete = models.CASCADE)
    
    def __str__(self):
        return f'Product: {self.name}, Size: {self.size}, Category: {self.category}, Colour: {self.colour}'
    

