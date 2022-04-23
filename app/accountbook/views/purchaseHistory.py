from django_filters import rest_framework as filters
from rest_framework import generics
from ..models import PurchaseHistory
from ..serializers import PurchaseHistorySerializer

class PurchaseHistoryFilter(filters.FilterSet):
  class Meta:
    model = PurchaseHistory
    fields = ('id', 'purchase_date', 'usecase', 'store_name',
              'item_name', 'billing_method', 'price', 'person',
              'payment_month', 'note', 'pastime')

class PurchaseHistoryListCreateViewSet(generics.ListCreateAPIView):
  queryset = PurchaseHistory.objects.all()
  serializer_class = PurchaseHistorySerializer
  filterset_class = PurchaseHistoryFilter

class PurchaseHistoryRetrieveUpdateDestoryViewSet(generics.RetrieveUpdateDestroyAPIView):
  queryset = PurchaseHistory.objects.all()
  serializer_class = PurchaseHistorySerializer
  