import axios from 'axios';
import moment, { Moment } from 'moment-timezone';

const TIMEZONE = 'America/Sao_Paulo'

export async function getCurrentTime(time?: Moment) {
  if (time) return moment(time.add({ second: 1 }))

  const { data: { datetime } } =
    await axios.get<{ datetime: string }>(
      `http://worldtimeapi.org/api/timezone/${TIMEZONE}`
    ).catch(_ => ({ data: { datetime: moment().tz(TIMEZONE).toISOString() } }));

  return moment(datetime);
}