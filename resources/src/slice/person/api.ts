import { PickRequestParams } from '@/type/api'
import { PersonData } from './type'

export const postPerson = async (
  request: PickRequestParams<PersonData>
): Promise<PersonData> => {
  return {
    id: 2,
    ...request,
  }
}

export const fetchPersons = (): PersonData[] => {
  return [
    {
      id: 1,
      person: '人名',
    },
  ]
}
