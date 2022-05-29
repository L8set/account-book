from django_filters import rest_framework as filters
from rest_framework import generics
from ..models import Usecase
from ..serializers.usecase import UsecaseListSerializer

class UsecaseListViewSet(generics.ListAPIView):
  queryset = Usecase.objects.all()
  serializer_class = UsecaseListSerializer
