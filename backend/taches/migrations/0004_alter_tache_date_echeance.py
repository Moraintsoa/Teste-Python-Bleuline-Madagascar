# Generated by Django 5.1.3 on 2024-11-13 06:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('taches', '0003_tache_date_echeance_tache_heure_echeance'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tache',
            name='date_echeance',
            field=models.DateField(),
        ),
    ]
