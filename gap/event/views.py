import django_filters
from rest_framework import viewsets, filters

from .models import Event
from .serializer import EventSerializer


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
