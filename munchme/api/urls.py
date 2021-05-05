from django.urls import path, include
from .views import CakeView, CakeDetail

app_name = 'api'
urlpatterns = [
    path('cakes/', CakeView.as_view()),
    path('cakes/<str:id>', CakeDetail.as_view())

]
