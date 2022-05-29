from django_filters import rest_framework as filters
from rest_framework import generics
from ..models import BillingMethod
from ..serializers.billingMethod import BillingMethodSerializer

class BillingMethodListViewSet(generics.ListAPIView):
  queryset = BillingMethod.objects.all()
  serializer_class = BillingMethodSerializer
  filterset_class = BillingMethodFilter
