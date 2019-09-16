"""
ASGI entrypoint. Configures Django and then runs the application
defined in the ASGI_APPLICATION setting.
"""

import os
import django
from channels.routing import get_default_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "gap.settings")
# os.environ["SECRET_KEY"] = "n7+xupmf)x9r56orhfm57%s8l!dqykfsh0!r2wis_*@6!t@c^u"
django.setup()
application = get_default_application()
