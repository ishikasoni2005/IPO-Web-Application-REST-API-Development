from rest_framework import viewsets

from apps.core.models import Ipo

from .serializers import IpoSerializer


class IpoViewSet(viewsets.ModelViewSet):
    serializer_class = IpoSerializer
    queryset = Ipo.objects.all().order_by("-id")
