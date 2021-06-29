from django.db import models

class Company(models.Model):
    company_name = models.CharField(max_length=200)
    def __str__(self):
        return self.company_name

class Vehicle(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name="vehicles")
    brand = models.CharField(max_length=200)
    year = models.IntegerField(default=0)
    equip = models.CharField(max_length=500)
    vin = models.CharField(max_length=20)
    license = models.CharField(max_length=20)
    def __str__(self):
        if(self.license != ""):
            return self.license
        elif(self.equip != ""):
            return self.equip
        elif(self.vin != ""):
            return self.vin
        elif(self.brand != ""):
            return self.brand
        return "Vehicle: #" + str(self.id)

class Inspection(models.Model):
    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE, related_name="inspections")
    inspected = models.BooleanField(default=False)
    updated = models.DateTimeField()
    next_due = models.DateField()
    def __str__(self):
        return "Inspection: #" + str(self.id)


