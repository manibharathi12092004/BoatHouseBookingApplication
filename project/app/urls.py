from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, AdminViewSet, BoatViewSet, BookingViewSet, BoatDataViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'admins', AdminViewSet)
router.register(r'boats', BoatViewSet)
router.register(r'bookings', BookingViewSet)
router.register(r'boatdata', BoatDataViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
