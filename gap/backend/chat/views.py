# chat/views.py
from django.shortcuts import render
from django.utils.safestring import mark_safe
import json
import django_filters
from rest_framework import viewsets, filters

from .models import Room, Message
from .serializer import RoomSerializer, MessageSerializer


def index(request):
    return render(request, "chat/index.html", {})


def room(request, room_name):
    return render(
        request,
        "chat/room.html",
        {"room_name_json": mark_safe(json.dumps(room_name))},
    )


class RoomViewSet(viewsets.ModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
