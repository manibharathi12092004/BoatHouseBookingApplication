from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Admin(models.Model):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.email

class BoatData(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.CharField(max_length=200)  # Changed to CharField
    price = models.CharField(max_length=20)
    location = models.CharField(max_length=100)
    type = models.CharField(max_length=50)
    capacity = models.IntegerField()
    features = models.JSONField()  # Stores list of features
    extra_images = models.JSONField()  # Stores list of URLs for extra images

    def __str__(self):
        return self.name

class Boat(models.Model):
    id = models.CharField(max_length=20,primary_key=True)
    name = models.CharField(max_length=100)
    price = models.CharField(max_length=20)
    location = models.CharField(max_length=100)
    user_email = models.EmailField()

    def __str__(self):
        return self.name


class Booking(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    age = models.IntegerField()
    date = models.DateField()
    persons = models.IntegerField()
    rooms = models.IntegerField()
    food = models.CharField(max_length=20)
    days = models.IntegerField()
    boat_id = models.CharField(max_length=10)
    boat_name = models.CharField(max_length=100)

    def __str__(self):
        return f"Booking by {self.name} on {self.date}"

