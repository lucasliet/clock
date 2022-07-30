import { useEffect, useState } from 'preact/hooks'
import { getCurrentTime } from '../../service/getTime'
import { Moment } from 'moment-timezone';

import './clock.scss';

export function Clock() {
  const [time, setTime] = useState<Moment | undefined>(undefined)
  const [isFrameEnabled, setIsFrameEnabled] = useState(false)

  useEffect(() => {
    const interval = setInterval(async () => {
      setTime(await getCurrentTime(time));
    }, 1000);

    return () => clearInterval(interval);
  }, [time])

  return (
    <main onClick={() => setIsFrameEnabled(!isFrameEnabled)}>
      <div className={isFrameEnabled ? 'frame' : ''}>
        <h1 className='title'>Clock</h1>
        <h1>{time?.format('HH:mm:ss') ?? '80085'}</h1>
      </div>
    </main>
  )
}
