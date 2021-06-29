from django.shortcuts import render
from django.http import HttpResponse

from inspections.models import Company, Vehicle, Inspection
from rest_framework.views import APIView
from inspections.serializers import CompanySerializer, VehicleSerializer, InspectionSerializer
from rest_framework import viewsets, permissions


def index(request):
    return HttpResponse("Hello, world.  You're at the polls index.")

# Create your views here.

class CompanyViewSet(viewsets.ModelViewSet):
    permission_class = (permissions.AllowAny,)
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class VehicleViewSet(viewsets.ModelViewSet):
    permission_class = (permissions.AllowAny,)
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer

class InspectionViewSet(viewsets.ModelViewSet):
    permission_class = (permissions.AllowAny, )
    queryset = Inspection.objects.all()
    serializer_class = InspectionSerializer
