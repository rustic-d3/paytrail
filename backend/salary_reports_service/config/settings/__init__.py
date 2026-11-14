# settings/__init__.py
import os

from .base import *
if os.environ.get("ENVIRONMENT") == "production":
    from .prod import *
elif os.environ.get("ENVIRONMENT") == "staging":
    from .staging import *
else:
    from .local import *