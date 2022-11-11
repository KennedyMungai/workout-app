import { useState } from "react"

export const useCountDown = (
    idx: number,
    initialCount: number
) =>
{
    const [countDown, setCountDown] = useState<number>(initialCount)
}