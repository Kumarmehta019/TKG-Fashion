from django.db import models

# Create your models here.
class Category(models.Model):
  GENDERS = (
    ('M', 'Male'),
    ('F', 'Female')
  )
  COLOURS = (
    ('Black', 'Black'),
    ('Yellow', 'Yellow'),
    ('Blue', 'Blue'),
    ('Red', 'Red'),
    ('Green', 'Green'),
    ('Orange', 'Orange'),
    ('White', 'White')
  )
  name = models.CharField(max_length = 50)
  gender = models.CharField(max_length = 10, choices = GENDERS, blank = True)
  colour = models.CharField(max_length = 10, choices = COLOURS, blank = True)


  def __str__(self):
    return f'Category: {self.name}, Gender: {self.gender}, Colour: {self.colour}'