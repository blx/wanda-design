import { HTMLAttributes } from 'react'

export interface IDateProps extends HTMLAttributes<HTMLTimeElement> {
  date: string;
}

export const Datetime = ({ date }: IDateProps) => {
  const timeDate: Date = new Date(date)
  const humanDate = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(timeDate)

  return (
    <time
      aria-label={`Published on ${humanDate}`}
      dateTime={date}
    >
      {humanDate}
    </time>
  )
}
