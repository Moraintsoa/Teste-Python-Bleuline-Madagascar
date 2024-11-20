from rest_framework import serializers
from .models import Tache
from django.contrib.auth.models import User

class UserRegistrationSerializer(serializers.ModelSerializer):
    password= serializers.CharField(write_only=True)
    class Meta:
        model=User
        fields=['username', 'email', 'password']
    def create(self, validated_data):
        user = User(
            username=validated_data['username'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['id','username', 'email']
class TacheSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tache
        fields = '__all__'
        # fields = ['id', 'title', 'description', 'completed','heure_echeance','proprietaire_id']
        # fields = ['id', 'title', 'description', 'completed', 'date_created_at', 'time_created_at', 'date_updated_at', 'time_updated_at','date_echeance','heure_echeance','proprietaire_id']