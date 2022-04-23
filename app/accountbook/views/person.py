from django_filters import rest_framework as filters
from rest_framework import generics
from ..models import Person
from ..serializers import PersonSerializer

class PersonFilter(filters.FilterSet):
  class Meta:
    model = Person
    fields = ('id', 'name')

class PersonListViewSet(generics.ListAPIView):
  queryset = Person.objects.all()
  serializer_class = PersonSerializer
  filterset_class = PersonFilter
