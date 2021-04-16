from .base import *

ALLOWED_HOSTS = ["chainfeed.io", '127.0.0.1', 'localhost']
# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False




# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'loggers': {
        'django':{
            'handlers': ['file', 'file2'],
            'level': 'DEBUG',
        }
    },
    'handlers':{
        'file': {
            'level': 'INFO',
            'class': 'logging.StreamHandler',
            'formatter': 'simpleRe'
        },
        'file2': {
            'level': 'DEBUG',
            'class': 'logging.StreamHandler',
            'formatter': 'simpleRe'
        }
    },
    'formatters':{
        'simpleRe': {
            'format': '{levelname} {asctime} {module} {process:d} {thread:d} {message}',
            'style': '{',
        }
    }
}