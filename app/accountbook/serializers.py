from rest_framework import serializers
from accountbook import models

class UsecaseSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.Usecase
    fields = ('id', 'name')
    read_only_fields = ['id']

class PersonSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.Person
    fields = ('id', 'name')
    read_only_fields = ['id']

class PastimeSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.Pastime
    fields = ('id', 'name', 'start_date', 'end_date')
    read_only_fields = ['id']

class PaymentMethodSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.PaymentMethod
    fields = ('id', 'name')
    read_only_fields = ['id']

class BankAccountSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.BankAccount
    fields = ('id', 'name')
    read_only_fields = ['id']

class BillingMethodSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.BillingMethod
    fields = ('id', 'name', 'payment_method', 'bank_account_from',
              'bank_account_to')
    read_only_fields = ['id']

class PurchaseHistorySerializer(serializers.ModelSerializer):
  class Meta:
    model = models.PurchaseHistory
    fields = ('id', 'purchase_date', 'usecase', 'store_name',
              'item_name', 'billing_method', 'price', 'person',
              'payment_month', 'note', 'pastime')
    read_only_fields = ['id']