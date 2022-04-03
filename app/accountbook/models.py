from pyexpat import model
from statistics import mode
from sys import modules
from django.db import models

# 作成・更新・削除日付の抽象クラス
class TimeStampedModel(models.Model):
    create_date = models.DateField(auto_now_add=True)
    update_date = models.DateField(null=True, auto_now=True)
    delete_date = models.DateField(null=True, blank=True)
    
    class Meta:
        abstract = True

# 用途テーブル
class Usecase(TimeStampedModel):
    name = models.CharField(max_length=20, unique=True)

# 人物テーブル
class Person(TimeStampedModel):
    name = models.CharField(max_length=20, unique=True)

# 娯楽テーブル
class Pastime(TimeStampedModel):
    name = models.CharField(max_length=20, unique=True)
    start_date = models.DateField()
    end_date = models.DateField()

# 支払い方法テーブル
class PaymentMethod(TimeStampedModel):
    name = models.CharField(max_length=20, unique=True)

# 銀行口座テーブル
class BankAccount(TimeStampedModel):
    name = models.CharField(max_length=20, unique=True)

# 決済方法テーブル
class BillingMethod(TimeStampedModel):
    name = models.CharField(max_length=20, unique=True)
    payment_method = models.ForeignKey(PaymentMethod, on_delete=models.PROTECT)
    bank_account_from = models.ForeignKey(BankAccount, on_delete=models.PROTECT, related_name='payer')
    bank_account_to = models.ForeignKey(BankAccount, on_delete=models.PROTECT, related_name='payee')

# 購入履歴テーブル
class PurchaseHistory(TimeStampedModel):
    purchase_date = models.DateField()
    usecase = models.ForeignKey(Usecase, on_delete=models.PROTECT)
    store_name = models.CharField(max_length=30)
    item_name = models.CharField(max_length=30)
    billing_method = models.ForeignKey(BillingMethod, on_delete=models.PROTECT)
    price = models.IntegerField()
    person = models.ForeignKey(Person, null=True, on_delete=models.PROTECT)
    payment_month = models.DateField(null=True)
    note = models.CharField(max_length=30, null=True)
    pastime = models.ForeignKey(Pastime, null=True, on_delete=models.PROTECT)

