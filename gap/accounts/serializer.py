from rest_framework import serializers

from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            # "clan",
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
