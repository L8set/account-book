from django_filters import rest_framework as filters
from rest_framework import generics
from ..models import BankAccount
from ..serializers.bankAccount import BankAccountSerializer

class BankAccountFilter(filters.FilterSet):
  class Meta:
    model = BankAccount
    fields = ('id', 'name')

class BankAccountListCreateViewSet(generics.ListCreateAPIView):
  queryset = BankAccount.objects.all()
  serializer_class = BankAccountSerializer
  filterset_class = BankAccountFilter
