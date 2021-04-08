from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import CakeSerializer
from .models import Cake


# Create your views here.

class CakeViewSet(viewsets.ModelViewSet):
    serializer_class = CakeSerializer
    queryset = Cake.objects.all()
