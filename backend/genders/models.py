from django.db import models

# Create your models here.
class Gender(models.Model):
    GENDERS = (
    ('M', 'Male'),
    ('F', 'Female')
    )

    type = models.CharField(max_length = 5, choices = GENDERS)

    def __str__(self):
        return f'Gender: {self.type}'