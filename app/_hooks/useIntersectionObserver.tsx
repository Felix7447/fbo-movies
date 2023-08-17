import React, { RefObject, useState, useEffect} from 'react'

const useIntersectionObserver = (target: RefObject<Element>) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const oberver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      })
    })
    oberver.observe(target.current)
  }, [])

  return isVisible
}

export default useIntersectionObserver