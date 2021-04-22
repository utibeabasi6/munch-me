from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
import contentful
from django.http import JsonResponse

client = contentful.Client("60v12cewnswn", "R0wjyFRPrCgmllgHWNXPWFXFtehzopuJUR9pjm-msjA")

# Create your views here.
def cakes(request, methods=["GET"]):
    cakes = client.entries({"content_type": "cake"})
    print(cakes[0].name)
    return JsonResponse({"cakes": [{"name": cake.name, "description": cake.description, "rating": cake.rating, "image": 'https:' + cake.image.url(), "price": cake.price} for cake in cakes]})

def cake(request, id):
    cake = client.entry(id)
    return JsonResponse({"name": cake.name, "description": cake.description, "rating": cake.rating, "image": 'https:' + cake.image.url(), "price": cake.price})

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

