from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import CakeSerializer
from .models import Cake
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail


# Create your views here.

class CakeViewSet(viewsets.ModelViewSet):
    serializer_class = CakeSerializer
    queryset = Cake.objects.all()

@csrf_exempt
def send_email(request):
    print(request.POST)
    send_mail(
    'Subject here',
    'Here is the message.',
    'utibeabasiumanah6@gmail.com',
    ['utibeabasiumanah6@gmail.com', 'obasuyimcgarretts@gmail.com'],
    fail_silently=False,
)
    return HttpResponse('<h1>hello world</h1>')