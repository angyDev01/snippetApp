from django.urls import path
from mysnippet.views import SnippetViewSet

urlpatterns = [
    path('', SnippetViewSet.as_view({'get': 'list'}), name='home'),
]