from pyexpat import model
from sys import modules
from django.db import models

# 用途テーブル
class Usecase(models.Model):
    name = models.CharField(max_length=20, unique=True)

# 人物テーブル
class Person(models.Model):
    name = models.CharField(max_length=20, unique=True)

# 娯楽テーブル
class Pastime(models.Model):
    name = models.CharField(max_length=20, unique=True)
    start_date = models.DateField()
    end_date = models.DateField()

# 支払い方法テーブル
class PaymentMethod(models.Model):
    name = models.CharField(max_length=20, unique=True)

# 銀行口座テーブル
class BankAccount(models.Model):
    name = models.CharField(max_length=20, unique=True)
# 決済方法テーブル
class BillingMethod(models.Model):
    name = models.CharField(max_length=20, unique=True)
    payment_method_id = models.ForeignKey(PaymentMethod)
    bank_account_from = models.ForeignKey(BankAccount)
    bank_account_to = models.ForeignKey(BankAccount)

# 購入履歴テーブル
class PurchaseHistory(models.Model):
    purchase_date = models.DateField()
    usecase_id = models.ForeignKey(Usecase)
    store_name = models.CharField(max_length=30)
    item_name = models.CharField(max_length=30)
    billing_method_id = models.ForeignKey(BillingMethod)
    price = models.IntegerField()
    person_id = models.ForeignKey(Person, null=True)
    payment_month = models.DateField(null=True)
    note = models.CharField(max_length=30, null=True)
    pastime_id = models.ForeignKey(Pastime)

