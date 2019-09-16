import django_filters
from rest_framework import viewsets, filters

from .models import Clan
from .serializer import ClanSerializer


class ClanViewSet(viewsets.ModelViewSet):
    queryset = Clan.objects.all()
    serializer_class = ClanSerializer
