from django.db import models
from django.utils.text import slugify
from django.utils import timezone

# Create your models here.

"""
######### Difinition de la table snippet #########
    - id : identifiant unique du snippet
    - title : titre du snippet
    - code : code du snippet
    - language : langage du snippet
    - created_at : date de création du snippet
    - updated_at : date de mise à jour du snippet
    - tags : tags associés au snippet
    - slug : slug du snippet
"""


class Snippet(models.Model):
    id = models.AutoField(primary_key=True,
                        unique=True,
                        editable=False, 
                        auto_created=True, 
                        verbose_name='ID'
                        )
    title = models.CharField(max_length=255)
    code = models.TextField()
    language = models.CharField(max_length=50)
    #format de la date : YYYY-MM-DD HH:MM
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(default=timezone.now)
    slug = models.SlugField(unique=True, max_length=255, blank=True, null=True)

    def __str__(self):
        return self.title
    
    # créer une méthode pour récupérer les tags associés à un snippet
    def get_tags(self):
        return self.tags.all()
    
    # créer une méthode pour récupérer les snippets associés à un tag
    def get_snippets(self):
        return self.snippets.all()
    
    def save(self, *args, **kwargs):
        # Générer le slug à partir du titre si le slug n'est pas défini
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

#En cas de correction future.

"""
def save(self, *args, **kwargs):
        # Générer le slug à partir du titre si le slug n'est pas défini
        if not self.slug:
            base_slug = slugify(self.title)
            slug = base_slug
            counter = 1
            while Snippet.objects.filter(slug=slug).exists():
                slug = f"{base_slug}-{counter}"
                counter += 1
                self.slug = slug
        super().save(*args, **kwargs)
"""
    
    
class Meta:
    db_table = 'snippet'
    verbose_name = 'Snippet'
    verbose_name_plural = 'Snippets'