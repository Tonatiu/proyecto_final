from django.shortcuts import render
from rest_framework import viewsets
from .models import Articulo
from .serializers import ArticuloSerializer
# Create your views here.

class ArticuloViewSet(viewsets.ModelViewSet):
    queryset = Articulo.objects.all().order_by('id')
    serializer_class = ArticuloSerializer
