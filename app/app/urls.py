"""app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from accountbook.views import usecase, person, pastime, paymentMethod,bankAccount, billingMethod, purchaseHistory

urlpatterns = [
    path('api/usecases', usecase.UsecaseListCreateViewSet.as_view()),
    path('api/persons', person.PersonListViewSet.as_view()),
    path('api/pastimes', pastime.PastimeListCreateViewSet.as_view()),
    path('api/payment-methods', paymentMethod.PaymentMethodListCreateViewSet.as_view()),
    path('api/bank-accounts', bankAccount.BankAccountListCreateViewSet.as_view()),
    path('api/billing-methods', billingMethod.BillingMethodListCreateViewSet.as_view()),
    path('api/purchase-histories', purchaseHistory.PurchaseHistoryListCreateViewSet.as_view()),
    path('api/purchase-histories/<int:pk>', purchaseHistory.PurchaseHistoryRetrieveUpdateDestoryViewSet.as_view())
]
