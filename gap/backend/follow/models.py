from django.db import models
from account.models import User

# Create your models here.


class Follow(models.Model):
    follower = models.ForeignKey(
        User, related_name="follower", on_delete=models.CASCADE, null=True
    )
    following = models.ForeignKey(
        User, related_name="following", on_delete=models.CASCADE, null=True
    )

    def __str__(self):
        return "{} follows {}".format(self.follower, self.following)
