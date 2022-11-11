import { useEffect, useRef, useState } from "react"

export const useCountDown = (
    idx: number,
    initialCount: number
) =>
{
    const intervalRef = useRef<number>();

    const [countDown, setCountDown] = useState<number>(initialCount)

    useEffect(() =>
    {
        if (idx === -1)
        {
            return
        }

        intervalRef.current = window.setInterval(() =>
        {
            setCountDown((count) =>
            {
                console.log(count)
                return count - 1
            })
        }, 1000)

        console.log("Tracker has been changed")

        return () => window.clearInterval(intervalRef.current)

    }, [idx])

    useEffect(() =>
    {
        setCountDown(initialCount)
    }, [initialCount])

    useEffect(() =>
    {
        if (countDown === 0)
        {
            console.log("Clean Up")
        }
    }, [countDown])

    const cleanup = () =>
    {
        if (intervalRef.current)
        {
            window.clearInterval(intervalRef.current)
            intervalRef.current = undefined
        }
    }

    return countDown
}