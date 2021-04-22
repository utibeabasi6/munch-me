from django.urls import path, include
from .views import send_email, cakes, cake

app_name = 'api'
urlpatterns = [
    path('send_email/', send_email),
    path('cakes/', cakes),
    path('cakes/<str:id>', cake)

]
