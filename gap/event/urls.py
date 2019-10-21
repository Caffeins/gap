from rest_framework import routers
from .views import EventViewSet
from django.conf.urls import url


router = routers.DefaultRouter()
router.register(r"event", EventViewSet)

