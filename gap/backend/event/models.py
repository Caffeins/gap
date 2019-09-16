from django.db import models
from account.models import User

# Create your models here.
class Event(models.Model):
    """
    イベント用モデル
    """

    name = models.CharField(max_length=255, null=False, default=None)
    held_at = models.DateTimeField(
        auto_now=False, auto_now_add=False, null=False, default=None
    )
    created_at = models.DateField(auto_now_add=True)
    place = models.CharField(max_length=255, null=False, default=None)
    content = models.TextField(max_length=1023, null=False, default=None)
    participant = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return "({})-{}".format(self.held_at, self.name)

