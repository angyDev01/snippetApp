"""
URL configuration for snippet project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from mysnippet.views import SnippetViewSet
from rest_framework import routers

# definie les routeurs afin que l'url de l'api soit accessible depuis le front-end
routeur = routers.DefaultRouter()
routeur.register(r'snippets', SnippetViewSet, basename='snippets')

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),  # Include the URLs for the Django REST framework's login and logout views
    #ajouter les urls de l'api
    path('api/', include(routeur.urls)),  # Include the URLs for the API endpoints
    path('admin/', admin.site.urls),
]
