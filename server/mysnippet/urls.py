from django.urls import path
from mysnippet.views import SnippetView

urlpatterns = [
    path('', SnippetView, name='home'),
]