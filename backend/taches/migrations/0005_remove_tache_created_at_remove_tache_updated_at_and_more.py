# Generated by Django 5.1.3 on 2024-11-13 18:22

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('taches', '0004_alter_tache_date_echeance'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tache',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='tache',
            name='updated_at',
        ),
        migrations.AddField(
            model_name='tache',
            name='date_created_at',
            field=models.DateField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='tache',
            name='date_updated_at',
            field=models.DateField(auto_now=True),
        ),
        migrations.AddField(
            model_name='tache',
            name='time_created_at',
            field=models.TimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='tache',
            name='time_updated_at',
            field=models.TimeField(auto_now=True),
        ),
    ]
