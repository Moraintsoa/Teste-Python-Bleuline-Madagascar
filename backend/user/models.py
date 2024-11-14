from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models

# Créer un manager personnalisé pour le modèle User
class CustomUserManager(BaseUserManager):
    def create_user(self, username, password=None):
        if not username:
            raise ValueError("Le pseudo doit être spécifié")
        user = self.model(username=username)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, password=None):
        user = self.create_user(username, password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

# Créer le modèle utilisateur personnalisé
class User(AbstractBaseUser):
    username = models.CharField(unique=True, max_length=150)
    password = models.CharField(max_length=128)

    USERNAME_FIELD = 'username'  # Le pseudo sera utilisé pour la connexion
    REQUIRED_FIELDS = []  # Aucune autre information nécessaire pour l'inscription

    objects = CustomUserManager()

    def __str__(self):
        return self.username
