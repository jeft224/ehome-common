'use strict'

import { useRef, useEffect } from 'react'

function useUnMount (fn) {
  const fnRef = useRef(fn)

  fnRef.current = fn

  useEffect(() => () => fnRef.current(), [])
}

export default useUnMount
