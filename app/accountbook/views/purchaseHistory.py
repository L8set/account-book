from rest_framework import generics
from ..models import PurchaseHistory
from ..serializers.purchaseHistory import PurchaseHistorySerializer

class PurchaseHistoryListViewSet(generics.ListAPIView):
  queryset = PurchaseHistory.objects.all()
  serializer_class = PurchaseHistorySerializer
  