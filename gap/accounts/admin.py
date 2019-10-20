from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from .forms import UserChangeForm, UserCreationForm
from .models import User


class ClanInline(admin.TabularInline):
    model = User.clan.through


class EventInline(admin.TabularInline):
    model = User.event.through


class UserAdmin(BaseUserAdmin):
    """
    adminページの設定
    """

    form = UserChangeForm
    add_form = UserCreationForm

    list_display = (
        "email",
        "name",
        "alias",
        "date_of_birth",
        "image",
        "hobby",
        "place",
        "introduction",
        "is_admin",
    )
    list_filter = ("is_admin",)
    fieldsets = (
        (None, {"fields": ("email", "password")}),
        (
            "Personal info",
            {
                "fields": (
                    "name",
                    "alias",
                    "date_of_birth",
                    "image",
                    "hobby",
                    "place",
                    "introduction",
                )
            },
        ),
        ("Permissions", {"fields": ("is_admin",)}),
    )

    add_fieldsets = (  # admin/account/user/add
        (
            None,
            {
                "classes": ("wide",),
                "fields": ("email", "password1", "password2"),
            },
        ),
    )
    search_fields = ("email",)
    ordering = ("email",)
    filter_horizontal = ()
    inlines = [ClanInline, EventInline]


admin.site.register(User, UserAdmin)
admin.site.unregister(Group)
