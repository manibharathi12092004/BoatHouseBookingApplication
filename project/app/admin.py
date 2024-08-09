from django.contrib import admin
from .models import BoatData, User, Admin, Booking, Boat

# Register your models here
admin.site.register(BoatData)
admin.site.register(User)
admin.site.register(Admin)
admin.site.register(Booking)
admin.site.register(Boat)