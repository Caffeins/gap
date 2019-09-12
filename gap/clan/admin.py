from django.contrib import admin
from .models import Clan


class ClanAdmin(admin.ModelAdmin):
    list_display = ["name", "founded_date", "image", "point"]


admin.site.register(Clan, ClanAdmin)
