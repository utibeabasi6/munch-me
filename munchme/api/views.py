from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from rest_framework import status
import contentful

client = contentful.Client("60v12cewnswn", "R0wjyFRPrCgmllgHWNXPWFXFtehzopuJUR9pjm-msjA")

# Create your views here.
@api_view(['GET'])
def cakes(request):
    try:
        cakes = client.entries({"content_type": "cake"})
        return Response({
            "cakes": [{"name": cake.name, "description": cake.description, "rating": cake.rating, "image": 'https:' + cake.image.url(), "price": cake.price} for cake in cakes]
        }, status=HTTP_200_OK)
    except:
        return Response("sorry, an error ocurred", status=status.HTTP_400_BAD_REQUEST)

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