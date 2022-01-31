import { PickRequestParams } from '@/type/api'
import { PersonRecord } from './type'

export const postPerson = async (
  request: PickRequestParams<PersonRecord>
): Promise<PersonRecord> => {
  return {
    id: 2,
    ...request,
  }
}

export const fetchPersons = (): PersonRecord[] => {
  return [
    {
      id: 1,
      person: '人名',
    },
  ]
}
