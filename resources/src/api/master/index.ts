import { BankAccount, BillingMethod, Person, Usecase } from '@/type/master'

export const fetchBankAccounts = (): BankAccount[] => {
  return [
    {
      id: 1,
      account: '銀行名',
    },
  ]
}

export const fetchBillingMethods = (): BillingMethod[] => {
  return [
    {
      id: 1,
      method: '支払い方法名',
    },
  ]
}

export const fetchPersons = (): Person[] => {
  return [
    {
      id: 1,
      person: '人名',
    },
  ]
}

export const fetchUsecases = (): Usecase[] => {
  return [
    {
      id: 1,
      usecase: '用途名',
    },
  ]
}
