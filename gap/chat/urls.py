# chat/urls.py

"""
参考資料：
https://luck2515dev.hatenablog.com/entry/2019/04/08/224251
https://www.yoshiislandblog.net/2019/02/18/django_chat_chat-channel/
"""
from django.urls import path
from . import views

from rest_framework import routers
from .views import RoomViewSet, MessageViewSet

urlpatterns = [
    path("", views.index, name="index"),
    path("<str:room_name>/", views.room, name="room"),
]

router = routers.DefaultRouter()
router.register(r"rooms", RoomViewSet)
router.register(r"messages", MessageViewSet)
