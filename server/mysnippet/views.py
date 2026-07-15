from django.shortcuts import render
from rest_framework.permissions import BasePermission
from rest_framework.viewsets import ModelViewSet
from .models import Snippet
from .serializers import SnippetSerializer


# 1. Tu crées ta permission personnalisée pour le Super-Admin
""" class IsSuperUser(BasePermission):
    def has_permission(self, request, view):
        # Vérifie si l'utilisateur est connecté ET s'il est superuser
        return request.user and request.user.is_superuser """

#création des methodes

class SnippetViewSet(ModelViewSet):

    queryset = Snippet.objects.all()
    serializer_class = SnippetSerializer
    
"""     # On applique la permission ici
    permission_classes = [IsSuperUser] """


