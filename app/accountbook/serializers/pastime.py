from rest_framework import serializers
from accountbook import models

class PastimeSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.Pastime
    fields = ('id', 'name', 'start_date', 'end_date')
    read_only_fields = ['id']
    