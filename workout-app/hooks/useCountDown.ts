import { useEffect, useState } from "react"

export const useCountDown = (
    idx: number,
    initialCount: number
) =>
{
    const [countDown, setCountDown] = useState<number>(initialCount)

    useEffect(() =>
    {
        if (trackerIdx === -1)
        {
            return
        }

        setCountDown(workout!.sequence[trackerIdx].duration)

        const intervalId = window.setInterval(() =>
        {
            setCountDown((count) =>
            {
                console.log(count)
                return count - 1
            })
        }, 1000)

        console.log("Tracker has been changed")

        return () => window.clearInterval(intervalId)

    }, [trackerIdx])
}