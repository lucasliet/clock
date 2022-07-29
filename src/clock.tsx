import { useEffect, useState } from 'preact/hooks'
import { getCurrentTime } from './service/getTime'

import './clock.scss';

export function Clock() {
  const [time, setTime] = useState<string>('')

  useEffect(() => {
    const interval = setInterval(async () => {
      setTime(await getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [time])

  return (
    <main>
      <h1>{`${time}`}</h1>
    </main>
  )
}
