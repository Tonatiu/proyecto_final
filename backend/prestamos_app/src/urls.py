# Imports
from django.contrib.auth import views as auth_views
from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'articulos', views.ArticuloViewSet)

urlpatterns = [
    # Rutas para la url /api/
    path("api/", include(router.urls)),
    # Rutas para la autenticación url /api/auth/
    path("api/auth/", include("rest_framework.urls", namespace="rest_framework")),
]
