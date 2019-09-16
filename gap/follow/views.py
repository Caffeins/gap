import django_filters
from rest_framework import viewsets, filters

from .models import Follow
from .serializer import FollowSerializer


class FollowViewSet(viewsets.ModelViewSet):
    queryset = Follow.objects.all()
    serializer_class = FollowSerializer
