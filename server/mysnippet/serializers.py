from rest_framework.serializers import ModelSerializer
from .models import Snippet


class SnippetSerializer(ModelSerializer):
    class Meta:
        model = Snippet
        fields = ['id', 'title', 'code', 'language', 'created_at', 'updated_at', 'slug']