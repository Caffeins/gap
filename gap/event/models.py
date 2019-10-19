from django.db import models

# Create your models here.
class Event(models.Model):
    """
    イベント用モデル
    """

    name = models.CharField(max_length=255, null=False, default=None)
    held_at = models.DateTimeField(
        auto_now=False, auto_now_add=False, null=False, default=None
    )
    hobby = models.CharField(
        verbose_name="趣味",
        help_text="半角スペースで単語わけしてください",
        max_length=255,
        null=True,
        blank=True,
    )
    image = models.ImageField(
        verbose_name="サムネ画像", upload_to="photos", default=None
    )
    # 二桁バリデーション
    member_capacity = models.IntegerField(null=False, default=None)
    leader = models.CharField(max_length=255, null=False, default=None)
    created_at = models.DateField(auto_now_add=True)
    place = models.CharField(max_length=255, null=False, default=None)
    content = models.TextField(max_length=1023, null=False, default=None)
    address = models.CharField(max_length=255, null=False, default=None)
    latitude = models.DecimalField(
        max_digits=8, decimal_places=6, default=None
    )
    longitude = models.DecimalField(
        max_digits=9, decimal_places=6, default=None
    )
    introduction = models.TextField(
        verbose_name="紹介", default=None, null=False, max_length=2000
    )

    def __str__(self):
        return "({})-{}".format(self.held_at, self.name)

