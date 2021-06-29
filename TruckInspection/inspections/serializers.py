from rest_framework import serializers
from inspections.models import Company, Vehicle, Inspection

class CompanySerializer(serializers.HyperlinkedModelSerializer):
    vehicles = serializers.StringRelatedField(many=True)
    class Meta:
        model = Company
        fields = ['company_name', 'vehicles']

class VehicleSerializer(serializers.HyperlinkedModelSerializer):
    inspections = serializers.StringRelatedField(many=True)
    class Meta:
        model = Vehicle
        fields = ['inspections', 'company', 'brand', 'year', 'equip', 'vin', 'license']

class InspectionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Inspection
        fields = ['vehicle', 'inspected', 'updated', 'next_due']
