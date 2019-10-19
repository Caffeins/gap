from rest_framework import serializers

from .models import Event


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = (
            "name",
            "held_at",
            "created_at",
            "place",
            "hobby",
            "member_capacity",
            "leader",
            "image",
            "leader",
            "address",
            "latitude",
            "longitude",
            "introduction",
        )
