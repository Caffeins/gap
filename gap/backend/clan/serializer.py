from rest_framework import serializers

from .models import Clan


class ClanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clan
        fields = ("name", "founded_date", "image", "point")
