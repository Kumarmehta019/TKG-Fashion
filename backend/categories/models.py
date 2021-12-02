from django.db import models

# Create your models here.
class Category(models.Model):
  GENDERS = (
    ('M', 'Male'),
    ('F', 'Female')
  )
  name = models.CharField(max_length = 50)
  gender = models.CharField(max_length = 10, choices = GENDERS)


  def __str__(self):
    return f'Category: {self.name}, Gender: {self.gender}'