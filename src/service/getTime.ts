import axios from 'axios';
import moment from 'moment-timezone';

const TIMEZONE = 'America/Sao_Paulo'

export async function getCurrentTime() {
  const { data: { datetime } } =
    await axios.get<{ datetime: string }>(
      `http://worldtimeapi.org/api/timezone/${TIMEZONE}`
    ).catch(_ => ({ data: { datetime: moment().tz(TIMEZONE).toISOString() } }));
  return moment(datetime).format('HH:mm:ss');
}