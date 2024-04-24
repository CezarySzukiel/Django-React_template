# Template for django + react project

#### using: 
- Docker,
- Django, 
- PostgreSQL,
- Django-rest-framework,
- Dj-rest-auth,
- simple JWT for user authentication,
- React + Redux,

## How to run demo:

  ```
git clone https://github.com/CezarySzukiel/Django-React_template.git
cd Django-React_template/backend_core/env/
mv .env_demo .env
docker compose up
```
open in browser localhost:8080/ 
login as:
- user1
- your.email@gmail.com
- secret


### Missing:
- social authentication
- tests

### defects:
- Password change validator is faulty. Does not check the current password. solution: change validator (settings.py/REST_AUTH = {'PASSWORD_CHANGE_SERIALIZER': } ) or remove "current password" from frontend form.

### Usefull links for backend:

Django:
- https://www.djangoproject.com
- https://github.com/django/django

Django Rest Framework:
- https://www.django-rest-framework.org/#
- https://github.com/encode/django-rest-framework

Dj-rest-auth:
- https://dj-rest-auth.readthedocs.io/en/latest/index.html
- https://github.com/iMerica/dj-rest-auth

Simple JWT:
- https://django-rest-framework-simplejwt.readthedocs.io/en/latest/index.html
- https://github.com/jazzband/djangorestframework-simplejwt/blob/master/README.rst
