import axios from 'axios';
import moment, { Moment } from 'moment-timezone';

const TIMEZONE = 'America/Sao_Paulo'

export async function getCurrentTime(time?: Moment): Promise<Moment> {
  if (time) return moment(time.add({ second: 1 }))

  return await axios.get<{ datetime: string }>(
      `https://worldtimeapi.org/api/timezone/${TIMEZONE}`
    ).then(({ data: { datetime } }) => moment(datetime))
    .catch(e => {
      console.error('Unable to fetch time from api, fallback to system clock', e)
      return moment().tz(TIMEZONE)
    });
}