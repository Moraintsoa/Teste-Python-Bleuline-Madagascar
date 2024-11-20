from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import get_taches, CustomTokenObtainPairView, CustomRefreshTokenView, logout, is_authenticated, register, taches_register,get_UserConnectee, get_One_taches,get_all_users

# router = DefaultRouter()
# router.register(r'lestaches', TacheViewSet)

urlpatterns = [
    # path('', router.urls),
    path('user_list/', get_all_users),
    path('list/', get_taches),
    path('list/<int:pk>/', get_One_taches),
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair' ),
    path('token/refresh/', CustomRefreshTokenView.as_view(), name='token_refresh' ),
    path('logout/', logout),
    path('authenticated/', is_authenticated),
    path('userConnectee/', get_UserConnectee),
    path('register/', register),
    path('taches_register/', taches_register),
]