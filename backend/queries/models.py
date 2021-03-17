from django.db import models
from datetime import date

class Query(models.Model):
    fname = models.CharField(max_length=20)
    lname = models.CharField(max_length=30)
    email = models.CharField(max_length=20)
    subject = models.TextField()
    date = models.DateField(default=date.today)

