import { nanoid } from 'nanoid'
import { useMemo } from 'react'

export const useNanoid = id => {
  return useMemo(() => (typeof id === 'string' ? id : typeof id === 'number' ? nanoid(id) : nanoid()), [id])
}
