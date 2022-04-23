from django_filters import rest_framework as filters
from rest_framework import generics
from ..models import Usecase
from ..serializers import UsecaseSerializer

class UsecaseFilter(filters.FilterSet):
  class Meta:
    model = Usecase
    fields = ('id', 'name')

class UsecaseListCreateViewSet(generics.ListCreateAPIView):
  queryset = Usecase.objects.all()
  serializer_class = UsecaseSerializer
  filterset_class = UsecaseFilter
