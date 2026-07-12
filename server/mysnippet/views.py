from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.viewsets import ReadOnlyModelViewSet
from .models import Snippet
from .serializers import SnippetSerializer


#création des methodes
class SnippetView(ReadOnlyModelViewSet):

    serializer_class = SnippetSerializer

    def get_queryset(self):
        return Snippet.objects.all()


