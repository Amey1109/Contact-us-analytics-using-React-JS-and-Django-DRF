from django.contrib import admin
from .models import Query

class QueryAdmin(admin.ModelAdmin):
    list_display=['id','fname','lname','email','subject','date']

admin.site.register(Query,QueryAdmin)
