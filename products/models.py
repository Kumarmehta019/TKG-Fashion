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

    CATEGORIES = (
        ('T-Shirts', 'T-Shirts'),
        ('Jeans', 'Jeans'),
        ('Dresses', 'Dresses'),
        ('Jumpers', 'Jumpers'), 
        ('Shorts', 'Shorts'),
        ('Shirts', 'Shirts'),
        ('Trousers', 'Trousers'),
        ('Socks', 'Socks')
    )

    COLOURS = (
        ('Black', 'Black'),
        ('Yellow', 'Yellow'),
        ('Blue', 'Blue'),
        ('Red', 'Red'),
        ('Green', 'Green'),
        ('Orange', 'Orange'),
        ('White', 'White'),
        ('Purple', 'Purple'),
        ('Brown', 'Brown'),
        ('Grey', 'Grey'),
        ('Beige', 'Beige'),
        ('Pink', 'Pink')
    )

    GENDERS = (
        ('M', 'Male'),
        ('F', 'Female')
    )

    name = models.CharField(max_length=100, default=None)
    price = models.IntegerField()
    size = models.CharField(max_length=10, default=None, choices=SIZES)
    stock = models.IntegerField()
    category = models.CharField(max_length=50, default=None, choices=CATEGORIES)
    gender = models.CharField(max_length=50, default=None, choices=GENDERS)
    colour = models.CharField(max_length=50, default=None, choices=COLOURS)
    
    def __str__(self):
        return f'Product: {self.name}, Size: {self.size}, Category: {self.category}, Colour: {self.colour}'
    

