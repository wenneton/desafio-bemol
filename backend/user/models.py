from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=70, blank=False, default='')
    birthDate = models.CharField(max_length=11, blank=False, default='')
    address = models.CharField(max_length=200,blank=False, default='')
    zipCode = models.CharField(max_length=9, blank=False, default='')