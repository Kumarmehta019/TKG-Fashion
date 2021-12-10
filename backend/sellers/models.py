from django.db import models

# Create your models here.
class Seller(models.Model):
    SELLERS = (
        ('TKG Design','TKG Design'),
        ('TKG Edition','TKG Edition'),
        ('TKG Luxe','TKG Luxe'),
        ('TKG Premium','TKG Premium'),
        ('TKG Finest','TKG Finest'),
        ('Addidos','Addidos'),
        ('Nic','Nic'),
        ('Pineapple','Pineapple'),
        ('The South Face','The South Face'),
        ('British Connection','British Connection'),
        ('Perry Fred','Perry Fred'),
        ('Zana','Zana'),
        ('Ocean Island','Ocean Island'),
    )
    name = models.CharField(max_length=50, default=None, choices=SELLERS)
    products = models.ManyToManyField("products.Product") # appname.Modelname

    def __str__(self):
        return f'{self.name}'