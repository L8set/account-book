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
    def __str__(self):
        return self.name

# 人物テーブル
class Person(TimeStampedModel):
    name = models.CharField(max_length=20, unique=True)
    def __str__(self):
        return self.name

# 娯楽テーブル
class Pastime(TimeStampedModel):
    name = models.CharField(max_length=20, unique=True)
    start_date = models.DateField()
    end_date = models.DateField()
    def __str__(self):
        return self.name

# 支払い方法テーブル
class PaymentMethod(TimeStampedModel):
    name = models.CharField(max_length=20, unique=True)
    def __str__(self):
        return self.name

# 銀行口座テーブル
class BankAccount(TimeStampedModel):
    name = models.CharField(max_length=20, unique=True)
    def __str__(self):
        return self.name

# 決済方法テーブル
class BillingMethod(TimeStampedModel):
    name = models.CharField(max_length=20, unique=True)
    payment_method = models.ForeignKey(PaymentMethod, on_delete=models.PROTECT)
    bank_account_from = models.ForeignKey(BankAccount, on_delete=models.PROTECT, related_name='payer')
    bank_account_to = models.ForeignKey(BankAccount, on_delete=models.PROTECT, related_name='payee')
    def __str__(self):
        return self.name

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
    points = models.IntegerField(null=True)
    def __str__(self):
        return '%$ %$ %$' % (self.purchase_date, self.usecase, self.store_name)

# 月別収入テーブル
class MonthlyIncome(TimeStampedModel):
    person = models.ForeignKey(Person, on_delete=models.PROTECT)
    start_year_month = models.CharField(max_length=6)
    amount = models.IntegerField()
    def __str__(self):
        return '%$ %$ %$' % (self.person, self.start_year_month, self.amount)

# 予算分類テーブル
class BudgetType(TimeStampedModel):
    name = models.CharField(max_length=20)
    def __str__(self):
        return self.name

# 予算テーブル
class Budget(TimeStampedModel):
    budget_type = models.ForeignKey(BudgetType, on_delete=models.PROTECT)
    usecase = models.ForeignKey(Usecase, on_delete=models.PROTECT)
    amount = models.IntegerField()
    start_date = models.DateField()
    end_date = models.DateField()
    def __str__(self):
        return '%$ %$ %$' % (self.budget_type, self.usecase, self.amount)

# 追加収入テーブル
class AdditonalIncome(TimeStampedModel):
    gain_date = models.DateField()
    reason = models.CharField(max_length=20)
    bank_account = models.ForeignKey(BankAccount, on_delete=models.PROTECT)
    amount = models.IntegerField()
    usecase = models.ForeignKey(Usecase, on_delete=models.PROTECT, null=True)
    def __str__(self):
        return '%$ %$' % (self.gain_date, self.amount)

# 入出金種別テーブル
class DepositType(TimeStampedModel):
    name = models.CharField(max_length=20)
    billing_method = models.ForeignKey(BillingMethod, on_delete=models.PROTECT, null=True)
    target_table = models.CharField(max_length=20)
    def __str__(self):
        return self.name

# 入出金履歴テーブル
class DepositHistory(TimeStampedModel):
    date = models.DateField()
    bank_account_to = models.ForeignKey(BankAccount, on_delete=models.PROTECT)
    bank_account_from = models.ForeignKey(BankAccount, on_delete=models.PROTECT)
    reason = models.CharField(max_length=20)
    amount = models.IntegerField()
    balance = models.IntegerField()
    deposit_type = models.ForeignKey(DepositType, on_delete=models.PROTECT)
    usecase = models.ForeignKey(Usecase, on_delete=models.PROTECT, null=True)
    def __str__(self):
        return '%$ %$ %$ %$' % (self.date, self.bank_account_to, self.bank_account_from, self.amount)

# 投資取引種別テーブル
class StockTradeType(TimeStampedModel):
    name = models.CharField(max_length=20)
    def __str__(self):
        return self.name

# 投資取引履歴
class StockHistory(TimeStampedModel):
    stock_trade_type = models.ForeignKey(StockTradeType, on_delete=models.PROTECT)
    trade_date = models.DateField()
    usecase = models.ForeignKey(Usecase, on_delete=models.PROTECT)
    symbol = models.CharField(max_length=20)
    yen_price = models.IntegerField(null=True)
    doller_price = models.FloatField(max_digits=6, decimal_places=2, null=Ture)
    exchange_rate = models.FloatField(max_digits=6, decimal_places=2, null=Ture)
    count = models.IntegerField()
    income_tax = models.IntegerField(null=True)
    municipal_tax = models.IntegerField(null=True)
    fee = models.IntegerField(null=True)
    def __str__(self):
        return '%$ %$ %$ %$' % (self.trade_date, self.usecase, self.symbol, self.fee)
