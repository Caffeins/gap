from rest_framework import routers
from .views import UserViewSet
from django.urls import path
from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(title="API Lists")

urlpatterns = [path("swagger/", schema_view)]
router = routers.DefaultRouter()
router.register(r"users", UserViewSet)
