from rest_framework import serializers
from accountbook import models

class UsecaseSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.Usecase
    fields = ('id', 'name')
    read_only_fields = ['id']
    