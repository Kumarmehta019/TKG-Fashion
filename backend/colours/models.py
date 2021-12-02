from django.db import models

class Colour(models.Model):
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
    name = models.CharField(max_length=100, default=None, choices=COLOURS)

    def __str__(self):
        return f'{self.name}'


