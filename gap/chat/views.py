# chat/views.py
from django.shortcuts import render
from django.utils.safestring import mark_safe  # 追記
import json  # 追記


def index(request):
    return render(request, "chat/index.html", {})


# 以下追記
def room(request, room_name):
    return render(
        request,
        "chat/room.html",
        {"room_name_json": mark_safe(json.dumps(room_name))},
    )

