from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from .forms import UserChangeForm, UserCreationForm
from .models import User


class UserAdmin(BaseUserAdmin):
    form = UserChangeForm
    add_form = UserCreationForm

    list_display = (
        "email",
        "name",
        "ailias",
        "date_of_birth",
        "image",
        "hobby",
        "place",
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
                    "ailias",
                    "date_of_birth",
                    "image",
                    "hobby",
                    "place",
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


admin.site.register(User, UserAdmin)
admin.site.unregister(Group)
