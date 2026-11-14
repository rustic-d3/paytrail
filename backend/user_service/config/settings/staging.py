from .base import *

SECRET_KEY = os.environ["SECRET_KEY"]
DEBUG = True
ALLOWED_HOSTS = ["dev.example.com"]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}