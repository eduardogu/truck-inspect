from django.contrib import admin

from .models import Company
from .models import Vehicle
from .models import Inspection

class CompanyAdmin(admin.ModelAdmin):
    list_display = ['company_name']
admin.site.register(Company, CompanyAdmin)

class VehicleAdmin(admin.ModelAdmin):
    list_display = ['vin', 'license', 'equip', 'brand', 'year']
    ordering = ['vin']
admin.site.register(Vehicle, VehicleAdmin)

class InspectionAdmin(admin.ModelAdmin):
    list_display = ['vehicle', 'updated', 'next_due', 'inspected']
    ordering = ['vehicle']
admin.site.register(Inspection, InspectionAdmin)

