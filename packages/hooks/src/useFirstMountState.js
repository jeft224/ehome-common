'use strict'

import { useRef } from 'react'

function useFirstMountState() {
  const isFirstMount = useRef(true)

  if (isFirstMount.current) {
    isFirstMount.current = false
    return true
  }

  return isFirstMount.current
}

export default useFirstMountState
