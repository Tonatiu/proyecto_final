from rest_framework import serializers
from .models import Articulo, Usuario, Tipousuario, Persona, Categoria

class ArticuloSerializer(serializers.HyperlinkedModelSerializer):
    """Serial para atender las conversiones de los artículos"""
    class Meta:
        model = Articulo
        fields = ('idarticulo', 'nombrearticulo', 'descripcion', 'cantidad', 'costo', 'eliminado')

class TipoUsuarioSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tipousuario
        fields = ('idtipousuario', 'descripcion')

class PersonaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Persona
        fields = ('idPersona', 'nombres', 'primerapellido', 'segundoapellido', 'birthdate')

class UsuarioSerializer(serializers.HyperlinkedModelSerializer):
    #tipousuario = TipoUsuarioSerializer(many=True, read_only=True)
    class Meta:
        model = Usuario
        fields = ('idusuario', 'alias', 'email', 'passwd', 'tipousuario', 'eliminado')

class CategoriaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Categoria
        fields = ('idcategoria', 'descripcion')