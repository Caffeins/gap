from rest_framework import serializers

from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            "email",
            "date_of_birth",
            "name",
            "alias",
            "image",
            "hobby",
            "place",
            "introduction",
        )
