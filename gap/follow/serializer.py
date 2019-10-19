from rest_framework import serializers
from accounts.serializer import UserSerializer
from .models import Follow


class FollowSerializer(serializers.ModelSerializer):
    follower = UserSerializer()
    following = UserSerializer()

    class Meta:
        model = Follow
        fields = ("follower", "following")
