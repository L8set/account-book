from operator import ge
from django_filters import rest_framework as filters
from rest_framework import generics
from ..models import PaymentMethod
from ..serializers import PaymentMethodSerializer

class PastimeFilter(filters.FilterSet):
  class Meta:
    model = PaymentMethod
    fields = ('id', 'name')

class PaymentMethodListCreateViewSet(generics.ListCreateAPIView):
  queryset = PaymentMethod.objects.all()
  serializer_class = PaymentMethodSerializer
  filterset_class = PastimeFilter
