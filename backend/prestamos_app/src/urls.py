# Imports
from django.contrib.auth import views as auth_views
from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'articulo', views.ArticuloViewSet)
router.register(r'usuario', views.UsuarioViewSet)
router.register(r'tipo_usuario', views.TipoUsuarioViewSet)
router.register(r'persona', views.PersonaViewSet)

urlpatterns = [
    # Rutas para la url /api/
    path("api/", include(router.urls)),
    # Rutas para la autenticación url /api/auth/
    path("api/auth/", include("rest_framework.urls", namespace="rest_framework")),
]
