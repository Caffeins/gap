from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
from clan.models import Clan

# 同じ処理をしているのでできれば省略したい
class UserManager(BaseUserManager):
    """
    ユーザ作成の処理をするクラス。
    """

    def create_user(
        self, email, date_of_birth, image, hobby, ailias, password=None
    ):
        if not email:
            raise ValueError("メールアドレスが必要です")
        user = self.model(
            email=self.normalize_email(email),
            date_of_birth=date_of_birth,
            image=image,
            hobby=hobby,
            ailias=ailias,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password):
        user = self.model(email=self.normalize_email(email))
        user.set_password(password)
        user.is_admin = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    """
    クランとフォロー、フォロワーのフォーリンキーを付け足す
    """

    clan = models.ForeignKey(Clan, on_delete=models.SET_NULL, null=True)
    email = models.EmailField(
        verbose_name="メールアドレス", max_length=255, unique=True, default=None
    )
    date_of_birth = models.DateField(verbose_name="誕生日", null=True)
    name = models.CharField(
        verbose_name="ユーザ名", max_length=255, default=None, null=True
    )
    ailias = models.CharField(verbose_name="ニックネーム", max_length=255, null=True)
    image = models.ImageField(
        verbose_name="サムネ画像", upload_to="photos", default=None
    )
    # ここ考えた方がいい
    hobby = models.CharField(
        verbose_name="趣味",
        help_text="半角スペースで単語わけしてください",
        max_length=255,
        null=True,
        blank=True,
    )
    # Choicesで47都道府県を
    place = models.CharField(
        verbose_name="居住地",
        help_text="お住まいの地域",
        max_length=255,
        null=True,
        blank=True,
    )

    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = "email"

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_admin
