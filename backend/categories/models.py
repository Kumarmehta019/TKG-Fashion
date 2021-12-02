from django.db import models

# Create your models here.
class Category(models.Model):
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

  name = models.CharField(max_length = 50, choices = CATEGORIES)

  def __str__(self):
    return f'Category: {self.name}'