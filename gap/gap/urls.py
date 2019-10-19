from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
from accounts.urls import router as account_router
from chat.urls import router as chat_router
from clan.urls import router as clan_router
from event.urls import router as event_router
from follow.urls import router as follow_router
from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(title="API Lists")


urlpatterns = [
    path("admin/", admin.site.urls),
    path("chat/", include("chat.urls")),
    path("account_api/", include(account_router.urls)),
    path("chat_api/", include(chat_router.urls)),
    path("clan_api/", include(clan_router.urls)),
    path("event_api/", include(event_router.urls)),
    path("follow_api/", include(follow_router.urls)),
    path("swagger/", schema_view),
    path("rest-auth/", include("rest_auth.urls")),
    path("rest-auth/registration/", include("rest_auth.registration.urls")),
]

if settings.DEBUG:
    urlpatterns += static(
        settings.MEDIA_URL, document_root=settings.MEDIA_ROOT
    )
