'use strict'

import { useEffect } from 'react'
import useFirstMountState from './useFirstMountState'

function useUpdateEffect (fn, deps) {
  const isFirstMount = useFirstMountState()

  useEffect(() => {
    if (!isFirstMount) {
      return fn()
    }
  }, deps)
}

export default useUpdateEffect
