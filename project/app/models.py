from django.db import models

class User(models.Model):
    id = models.CharField(max_length=50, primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Admin(models.Model):
    id = models.CharField(max_length=50, primary_key=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.email


class Boat(models.Model):
    id = models.CharField(max_length=50, primary_key=True)
    name = models.CharField(max_length=100)
    price = models.CharField(max_length=50)
    location = models.CharField(max_length=100)
    user_email = models.EmailField(unique=True)

    def __str__(self):
        return self.name


class Booking(models.Model):
    id = models.CharField(max_length=50, primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    age = models.IntegerField()
    date = models.DateField()
    persons = models.IntegerField()
    rooms = models.IntegerField()
    food = models.CharField(max_length=50)
    days = models.IntegerField()
    boat_id = models.IntegerField()
    boat_name = models.CharField(max_length=100)

    def __str__(self):
        return f"Booking by {self.name} on {self.date}"


class BoatData(models.Model):
    id = models.CharField(max_length=50, primary_key=True)
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.CharField(max_length=50)
    location = models.CharField(max_length=100)
    type = models.CharField(max_length=50)
    capacity = models.IntegerField()
    features = models.JSONField()

    def __str__(self):
        return self.name
