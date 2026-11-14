# settings/production.py
from .base import *

SECRET_KEY = os.environ["SECRET_KEY"]
DEBUG = False
ALLOWED_HOSTS = ["example.com", "www.example.com"]

SECURE_SSL_REDIRECT = True

SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}