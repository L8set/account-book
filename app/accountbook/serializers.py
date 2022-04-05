from rest_framework import serializers
from accountbook import models

class UsecaseSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.Usecase
    fields = '__all__'
    read_only_fields = ['id']

class PersonSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.Person
    fields = '__all__'
    read_only_fields = ['id']

class PastimeSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.Pastime
    fields = '__all__'
    read_only_fields = ['id']

class PaymentMethodSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.PaymentMethod
    fields = '__all__'
    read_only_fields = ['id']

class BankAccountSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.BankAccount
    fields = '__all__'
    read_only_fields = ['id']

class BillingMethodSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.BillingMethod
    fields = '__all__'
    read_only_fields = ['id']

class PurchaseHistorySerializer(serializers.ModelSerializer):
  class Meta:
    model = models.PurchaseHistory
    fields = '__all__'
    read_only_fields = ['id']