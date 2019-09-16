# mysite/urls.py
from django.contrib import admin
from django.urls import include, path

from account.urls import router as account_router
from chat.urls import router as chat_router
from clan.urls import router as clan_router
from event.urls import router as event_router
from follow.urls import router as follow_router

urlpatterns = [
    path("admin/", admin.site.urls),
    path("chat/", include("chat.urls")),
    path("account_api/", include(account_router.urls)),
    path("chat_api/", include(chat_router.urls)),
    path("clan_api/", include(clan_router.urls)),
    path("event_api/", include(event_router.urls)),
    path("follow_api/", include(follow_router.urls)),
]
