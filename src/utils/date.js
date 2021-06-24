import dayjs from 'dayjs';

function getTimespan({ start, end }) {
  const startYear = dayjs(start).format('YYYY');
  const endYear = end ? dayjs(end).format('YYYY') : 'Present';
  const timespan =
    startYear === endYear ? startYear : `${startYear} - ${endYear}`;

  return timespan;
}

export { getTimespan };
