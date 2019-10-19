from rest_framework import serializers
from .models import Articulo

class ArticuloSerializer(serializers.HyperlinkedModelSerializer):
    """Serial para atender las conversiones de los artículos"""
    class Meta:
        model = Articulo
        fields = ('idarticulo', 'nombrearticulo', 'descripcion', 'cantidad', 'costo', 'eliminado')