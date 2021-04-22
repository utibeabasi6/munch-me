from django.urls import path, include
from views import send_email, cakes
from rest_framework import routers

app_name = 'api'
urlpatterns = [
    path('send_email/', views.send_email),
    path('cakes/', views.cakes)

]
