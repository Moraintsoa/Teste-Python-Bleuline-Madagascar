# Generated by Django 5.1.3 on 2024-11-13 05:31

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('taches', '0002_rename_task_tache'),
    ]

    operations = [
        migrations.AddField(
            model_name='tache',
            name='date_echeance',
            field=models.DateTimeField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='tache',
            name='heure_echeance',
            field=models.TimeField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
