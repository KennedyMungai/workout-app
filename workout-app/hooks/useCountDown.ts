import { useEffect, useRef, useState } from "react"

export const useCountDown = (
    idx: number,
    initialCount: number
) =>
{
    const intervalRef = useRef<number>();

    const [countDown, setCountDown] = useState<number>(initialCount)
    const [isRunning, setIsRunning] = useState<boolean>(false)

    useEffect(() =>
    {
        if (idx === -1)
        {
            return
        }

        if (isRunning && !intervalRef.current)
        {
            intervalRef.current = window.setInterval(() =>
            {
                setCountDown((count) =>
                {
                    return count - 1
                })
            }, 1000)
        }


        console.log("Tracker has been changed")

        return cleanup

    }, [idx])

    useEffect(() =>
    {
        setCountDown(initialCount)
    }, [initialCount])

    useEffect(() =>
    {
        if (countDown === 0)
        {
            cleanup()
        }
    }, [countDown])

    const cleanup = () =>
    {
        if (intervalRef.current)
        {
            setIsRunning(false)
            window.clearInterval(intervalRef.current)
            intervalRef.current = undefined
        }
    }

    return {
        countDown,
        isRunning,
        stop: cleanup
    }
}