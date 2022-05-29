from rest_framework import serializers
from accountbook import models

class PurchaseHistorySerializer(serializers.ModelSerializer):
  class Meta:
    model = models.PurchaseHistory
    fields = ('id', 'purchase_date', 'usecase', 'store_name',
              'item_name', 'billing_method', 'price', 'person',
              'payment_month', 'note', 'pastime', "points")
    read_only_fields = ['id']
    