from django_filters import rest_framework as filters
from rest_framework import generics
from ..models import BillingMethod
from ..serializers import BillingMethodSerializer

class BillingMethodFilter(filters.FilterSet):
  class Meta:
    model = BillingMethod
    fields = ('id', 'name', 'payment_method', 'bank_account_from', 'bank_account_to')

class BillingMethodListCreateViewSet(generics.ListCreateAPIView):
  queryset = BillingMethod.objects.all()
  serializer_class = BillingMethodSerializer
  filterset_class = BillingMethodFilter
