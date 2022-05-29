from rest_framework import serializers
from accountbook import models

class BankAccountSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.BankAccount
    fields = ('id', 'name')
    read_only_fields = ['id']
