from django.db import models

# Create your models here.
class Seller(models.Model):
    SELLERS = (
        ('TKG-D','TKG Design'),
        ('TKG-E','TKG Edition'),
        ('TKG-L','TKG Luxe'),
        ('TKG-P','TKG Premium'),
        ('TKG-F','TKG Finest'),
        ('ADD','Addidos'),
        ('NIC','Nic'),
        ('PIN','Pineapple'),
        ('TSF','The South Face'),
        ('BC','British Connection'),
        ('PF','Perry Fred'),
        ('ZA','Zana'),
        ('OC','Ocean Island'),
    )
    name = models.CharField(max_length=50, default=None, choices=SELLERS)
    products = models.ManyToManyField("products.Product") # appname.Modelname

    def __str__(self):
        return f'{self.name}'