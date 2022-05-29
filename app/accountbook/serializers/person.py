from rest_framework import serializers
from accountbook import models

class PersonSerializer(serializers.ModelSerializer):
  class Meta:
    model = models.Person
    fields = ('id', 'name')
    read_only_fields = ['id']
    