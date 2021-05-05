from rest_framework.views import APIView
from rest_framework.response import Response
import contentful

client = contentful.Client("60v12cewnswn", "R0wjyFRPrCgmllgHWNXPWFXFtehzopuJUR9pjm-msjA")

# Create your views here.

class CakeView(APIView):
    def get(self, request):
        cakes = client.entries({"content_type": "cake"})
        return Response({"itemCount": len(cakes),"cakes": [{"id": cake.id, "name": cake.name, "description": cake.description, "rating": cake.rating, "image": 'https:' + cake.image.url(), "price": cake.price} for cake in cakes]})
    
class CakeDetail(APIView):
    def get(self, request, id):
        cake = client.entry(id)
        return Response({"id": cake.id, "name": cake.name, "description": cake.description, "rating": cake.rating, "image": 'https:' + cake.image.url(), "price": cake.price})
