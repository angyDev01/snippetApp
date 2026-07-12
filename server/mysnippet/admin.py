from django.contrib import admin
from .models import Snippet

# Register your models here.

class SnippetAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'language', 'created_at', 'updated_at')
    search_fields = ('title', 'language')
    list_filter = ('language', 'created_at', 'updated_at')
    ordering = ('-created_at',)
    prepopulated_fields = {'slug': ('title',)}  # Auto-generate slug from title

admin.site.register(Snippet)


#personnalisation de l'interface d'administration pour le modèle Snippet et image de l'interface d'administration

admin.site.site_header = "Administration des Snippets"
admin.site.site_title = "Snippets Admin"
admin.site.index_title = "Bienvenue dans l'administration des Snippets"

