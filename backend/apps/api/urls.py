from django.urls import path

from .views import IpoViewSet


ipo_list = IpoViewSet.as_view(
    {
        "get": "list",
        "post": "create",
    }
)

ipo_detail = IpoViewSet.as_view(
    {
        "get": "retrieve",
        "put": "update",
        "patch": "partial_update",
        "delete": "destroy",
    }
)


urlpatterns = [
    path("ipos", ipo_list, name="ipo-list"),
    path("ipos/", ipo_list),
    path("ipos/<int:pk>", ipo_detail, name="ipo-detail"),
    path("ipos/<int:pk>/", ipo_detail),
]
