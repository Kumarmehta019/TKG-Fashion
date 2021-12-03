from django.db import models

class Image(models.Model):
  title = models.CharField(max_length=500, default=None)
  image = models.ImageField(upload_to='images/')

  def __str__(self):
    return f'{self.title}'