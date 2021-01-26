from django.conf.urls import url 
from user import views 

urlpatterns = [ 
    url(r'^api/users$', views.users_list),
    url(r'^api/users/(?P<pk>[0-9]+)$', views.user_detail),
]