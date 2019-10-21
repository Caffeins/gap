from rest_framework import serializers

from .models import User
from clan.serializer import ClanSerializer
from event.serializer import EventSerializer


class UserSerializer(serializers.ModelSerializer):
    clan = ClanSerializer(many=True)
    event = EventSerializer(many=True)

    class Meta:
        model = User
        fields = (
            "clan",
            "event",
            # "email",
            "date_of_birth",
            "name",
            "alias",
            "image",
            "hobby",
            "place",
            # "is_active",
            # "is_admin",
            "introduction",
        )

