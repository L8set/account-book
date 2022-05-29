from rest_framework import serializers
from accountbook import models

class BillingMethodSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.BillingMethod
    fields = ('id', 'name', 'payment_method', 'bank_account_from',
              'bank_account_to')
    read_only_fields = ['id']
