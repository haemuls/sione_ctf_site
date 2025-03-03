# from django.contrib import admin
from django.urls import path
from django.contrib import admin
from ctf.config.views import *
from ctf.config import views

urlpatterns = [
    path("admin/", admin.site.urls),
    path('', views.index, name='index'),
    path('notice/', views.notice, name='notice'),
    path('login/', views.login, name='login'),
    path('signup/', views.signup, name='signup'),
    path('board/', views.board, name='board'),
]
