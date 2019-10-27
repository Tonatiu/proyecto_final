from django.shortcuts import render
from rest_framework import viewsets
from .models import Articulo, Usuario, Tipousuario, Persona, Categoria
from .serializers import ArticuloSerializer, UsuarioSerializer, TipoUsuarioSerializer, PersonaSerializer, CategoriaSerializer
# Create your views here.

class ArticuloViewSet(viewsets.ModelViewSet):
    queryset = Articulo.objects.all().order_by('idarticulo')
    serializer_class = ArticuloSerializer

class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all().order_by('idusuario')
    serializer_class = UsuarioSerializer

class TipoUsuarioViewSet(viewsets.ModelViewSet):
    queryset = Tipousuario.objects.all().order_by('idtipousuario')
    serializer_class = TipoUsuarioSerializer

class PersonaViewSet(viewsets.ModelViewSet):
    queryset = Persona.objects.all().order_by('idPersona')
    serializer_class = PersonaSerializer

class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer