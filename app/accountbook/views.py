from rest_framework import permissions
from rest_framework import viewsets
from accountbook import models
from accountbook import serializers

class UsecaseViewSet(viewsets.ModelViewSet):
  queryset = models.Usecase.objects.filter(delete_date__exact=None).order_by('id')
  serializer_class = serializers.UsecaseSerializer
  permission_classes = [permissions.AllowAny]

class PersonViewSet(viewsets.ModelViewSet):
  queryset = models.Person.objects.filter(delete_date__exact=None).order_by('id')
  serializer_class = serializers.PersonSerializer
  permission_classes = [permissions.AllowAny]

class PastimeViewSet(viewsets.ModelViewSet):
  queryset = models.Pastime.objects.filter(delete_date__exact=None).order_by('id')
  serializer_class = serializers.PastimeSerializer
  permission_classes = [permissions.AllowAny]

class PaymentMethodViewSet(viewsets.ModelViewSet):
  queryset = models.PaymentMethod.objects.filter(delete_date__exact=None).order_by('id')
  serializer_class = serializers.PaymentMethodSerializer
  permission_classes = [permissions.AllowAny]

class BankAccountViewSet(viewsets.ModelViewSet):
  queryset = models.BankAccount.objects.filter(delete_date__exact=None).order_by('id')
  serializer_class = serializers.BankAccountSerializer
  permission_classes = [permissions.AllowAny]

class BillingMethodViewSet(viewsets.ModelViewSet):
  queryset = models.BillingMethod.objects.filter(delete_date__exact=None).order_by('id')
  serializer_class = serializers.BillingMethodSerializer
  permission_classes = [permissions.AllowAny]

class PurchaseHistoryViewSet(viewsets.ModelViewSet):
  queryset = models.PurchaseHistory.objects.filter(delete_date__exact=None).order_by('id')
  serializer_class = serializers.PurchaseHistorySerializer
  permission_classes = [permissions.AllowAny]
