from django.db import models

# Create your models here.
class Clan(models.Model):
    """
    クランのモデル
    """

    name = models.CharField(
        verbose_name="クラン名", max_length=255, default=None, null=True
    )
    founded_date = models.DateField(
        verbose_name="設立日", auto_now=False, auto_now_add=False
    )
    image = models.ImageField(
        verbose_name="サムネ画像", upload_to="clan_photos", default=None
    )
    point = models.IntegerField(verbose_name="ポイント", default=0, null=False)

    def __str__(self):
        return self.name
