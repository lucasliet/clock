import { useEffect, useState } from 'preact/hooks'

import './clock.scss';

export function Clock() {
  const [time, setTime] = useState<Date | null>(null)

  const numberFormat2Cases = (number: number): string =>
    String(number).length === 1 ? `0${number}` : `${number}`

  Date.prototype.toString = function () {
    const hour = numberFormat2Cases(this.getHours());
    const minutes = numberFormat2Cases(this.getMinutes());
    const seconds = numberFormat2Cases(this.getSeconds());
    return `${hour}:${minutes}:${seconds}`
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval);
  }, [time])

  return (
    <main>
      <h1>{time?.toString()}</h1>
    </main>
  )
}
