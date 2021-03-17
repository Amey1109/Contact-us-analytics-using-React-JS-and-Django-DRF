
from django.urls import path
from . import views
urlpatterns = [
    path('getQueries/', views.getQuery),
    path('postQuery/', views.postQuery),
]
