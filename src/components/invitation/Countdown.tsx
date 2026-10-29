import { useEffect, useMemo, useState } from 'react';

interface Props {
  date: string;
  dateLabel: string;
}

interface Remaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
}

function remainingUntil(target: number): Remaining {
  const diff = target - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    done: false,
  };
}

export default function Countdown({ date, dateLabel }: Props) {
  const target = useMemo(() => new Date(date).getTime(), [date]);
  const [remaining, setRemaining] = useState<Remaining | null>(null);

  useEffect(() => {
    setRemaining(remainingUntil(target));
    const timer = window.setInterval(() => {
      setRemaining(remainingUntil(target));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [target]);

  const items = [
    { label: 'Hari', value: remaining?.days ?? 0 },
    { label: 'Jam', value: remaining?.hours ?? 0 },
    { label: 'Menit', value: remaining?.minutes ?? 0 },
    { label: 'Detik', value: remaining?.seconds ?? 0 },
  ];

  return (
    <div className="inv-countdown" aria-live="polite">
      <p className="inv-countdown-caption">
        {remaining?.done ? `Hari bahagia telah tiba — ${dateLabel}` : `Menuju ${dateLabel}`}
      </p>
      <div className="inv-countdown-grid">
        {items.map((item) => (
          <div className="inv-countdown-cell" key={item.label}>
            <strong>{String(item.value).padStart(2, '0')}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
