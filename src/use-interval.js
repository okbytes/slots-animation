import {useEffect, useRef} from "react"

export function useInterval(callback, delay) {
    const savedCallback = useRef(null)

    useEffect(() => {
        if (delay === null) {
            return
        }
        savedCallback.current = callback
    })

    useEffect(() => {
        if (delay === null) {
            return
        }
        function tick() {
            if (savedCallback.current !== null) {
                savedCallback.current()
            }
        }
        const id = setInterval(tick, delay)
        return () => clearInterval(id)
    }, [delay])
}
