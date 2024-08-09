from rest_framework import viewsets
from .models import User, Admin, Boat, Booking, BoatData
from .serializers import UserSerializer, AdminSerializer, BoatSerializer, BookingSerializer, BoatDataSerializer
from rest_framework.permissions import IsAuthenticated

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

class AdminViewSet(viewsets.ModelViewSet):
    queryset = Admin.objects.all()
    serializer_class = AdminSerializer
    permission_classes = [IsAuthenticated]

class BoatViewSet(viewsets.ModelViewSet):
    queryset = Boat.objects.all()
    serializer_class = BoatSerializer
    permission_classes = [IsAuthenticated]

class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [IsAuthenticated]

class BoatDataViewSet(viewsets.ModelViewSet):
    queryset = BoatData.objects.all()
    serializer_class = BoatDataSerializer
    permission_classes = [IsAuthenticated]
