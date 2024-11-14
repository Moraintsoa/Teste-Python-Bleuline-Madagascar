from rest_framework import serializers
from .models import Tache

class TacheSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tache
        fields = ['id', 'title', 'description', 'completed', 'date_created_at', 'time_created_at', 'date_updated_at', 'time_updated_at','date_echeance','heure_echeance']