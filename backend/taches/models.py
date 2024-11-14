from django.db import models

# Create your models here.
class Tache(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    date_created_at = models.DateField(auto_now_add=True)
    time_created_at = models.TimeField(auto_now_add=True)
    date_updated_at = models.DateField(auto_now=True)
    time_updated_at = models.TimeField(auto_now=True)
    date_echeance = models.DateField(auto_now=False,auto_now_add=False)
    heure_echeance = models.TimeField(auto_now=False,auto_now_add=False)

    def __str__(self):
        return self.title