from rest_framework import serializers
from .models import User, Admin, Boat, Booking, BoatData

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = '__all__'

class BoatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Boat
        fields = '__all__'

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'

class BoatDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = BoatData
        fields = '__all__'
