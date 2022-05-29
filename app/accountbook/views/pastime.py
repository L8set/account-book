from operator import ge
from django_filters import rest_framework as filters
from rest_framework import generics
from ..models import Pastime
from ..serializers.pastime import PastimeSerializer

class PastimeFilter(filters.FilterSet):
  class Meta:
    model = Pastime
    fields = ('id', 'name', 'start_date', 'end_date')

class PastimeListCreateViewSet(generics.ListCreateAPIView):
  queryset = Pastime.objects.all()
  serializer_class = PastimeSerializer
  filterset_class = PastimeFilter
