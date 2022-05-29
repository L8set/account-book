from rest_framework import serializers
from accountbook import models

class PaymentMethodSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.PaymentMethod
    fields = ('id', 'name')
    read_only_fields = ['id']
