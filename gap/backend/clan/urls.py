from rest_framework import routers
from .views import ClanViewSet


router = routers.DefaultRouter()
router.register(r"clans", ClanViewSet)
