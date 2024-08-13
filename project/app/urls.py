from django.urls import path
from . import views

urlpatterns = [
    # User URLs
    path('users/', views.user_list, name='user-list'),
    path('users/<int:pk>/', views.user_detail, name='user-detail'),

    # Admin URLs
    path('admins/', views.admin_list, name='admin-list'),
    path('admins/<int:pk>/', views.admin_detail, name='admin-detail'),

    # Boat URLs
    path('boats/', views.boat_list, name='boat-list'),
    path('boats/<int:pk>/', views.boat_detail, name='boat-detail'),

    # Booking URLs
    path('bookings/', views.booking_list, name='booking-list'),
    path('bookings/<int:pk>/', views.booking_detail, name='booking-detail'),

    # BoatData URLs
    path('boatdata/', views.boat_data_list, name='boatdata-list'),
    path('boatdata/<int:pk>/', views.boat_data_detail, name='boatdata-detail'),
]
