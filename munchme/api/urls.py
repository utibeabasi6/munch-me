from django.urls import path, include
from .views import CakeViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'cakes', CakeViewSet)

app_name = 'api'
urlpatterns = [
    path('', include(router.urls))
]
