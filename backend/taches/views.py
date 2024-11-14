from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Tache
from .serializers import TacheSerializer

class TacheViewSet(viewsets.ModelViewSet):
    queryset = Tache.objects.all()
    serializer_class = TacheSerializer
