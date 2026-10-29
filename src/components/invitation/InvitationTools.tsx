import { useState } from 'react';

interface Props {
  names: string;
  dateISO: string;
  dateLabel: string;
  venue: string;
  address: string;
  mapsUrl: string;
  rsvpUrl: string;
  gift?: { bank: string; number: string; holder: string };
}

function escapeIcs(value: string) {
  return value.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
}

function pad(value: number) {
  return String(value).padStart(2, '0');
}

function toIcsDate(date: Date) {
  return `${date.getUTCFullYear()}${pad(date.getUTCMonth() + 1)}${pad(date.getUTCDate())}T${pad(date.getUTCHours())}${pad(date.getUTCMinutes())}00Z`;
}

export default function InvitationTools({ names, dateISO, dateLabel, venue, address, mapsUrl, rsvpUrl, gift }: Props) {
  const [status, setStatus] = useState('');
  const [copied, setCopied] = useState(false);

  const saveTheDate = () => {
    const start = new Date(dateISO);
    const end = new Date(start.getTime() + 3 * 60 * 60 * 1000);
    const ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Ruang Kilas//Undangan Digital//ID',
      'BEGIN:VEVENT',
      `UID:${names.replace(/\s+/g, '-').toLowerCase()}-${start.getTime()}@ruangkilas.my.id`,
      `DTSTAMP:${toIcsDate(new Date())}`,
      `DTSTART:${toIcsDate(start)}`,
      `DTEND:${toIcsDate(end)}`,
      `SUMMARY:${escapeIcs(`Pernikahan ${names}`)}`,
      `LOCATION:${escapeIcs(`${venue} - ${address}`)}`,
      `DESCRIPTION:${dateLabel}. Dibuat dengan Ruang Kilas.`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `undangan-${names.replace(/\s+/g, '-').toLowerCase()}.ics`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    setStatus('Save the date terunduh.');
  };

  const share = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: `Undangan ${names}`, text: `Undangan pernikahan ${names}`, url });
        setStatus('Undangan dibagikan.');
        return;
      } catch {
        /* fall through to copy */
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setStatus('Tautan undangan tersalin.');
    } catch {
      setStatus('Salin manual: ' + url);
    }
  };

  const copyGift = async () => {
    if (!gift) return;
    try {
      await navigator.clipboard.writeText(gift.number);
      setCopied(true);
      setStatus('Nomor rekening tersalin.');
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setStatus('Nomor rekening: ' + gift.number);
    }
  };

  return (
    <div className="inv-tools">
      <div className="inv-tools-actions">
        <button className="button-primary" type="button" onClick={saveTheDate}>
          Save the date <span aria-hidden="true">↓</span>
        </button>
        <button className="button-secondary" type="button" onClick={share}>
          Bagikan undangan <span aria-hidden="true">↗</span>
        </button>
        <a className="button-secondary" href={mapsUrl} target="_blank" rel="noopener noreferrer">
          Buka peta <span aria-hidden="true">↗</span>
        </a>
        <a className="text-link inv-rsvp" href={rsvpUrl} target="_blank" rel="noopener noreferrer">
          Konfirmasi kehadiran via WhatsApp
        </a>
      </div>

      {gift && (
        <div className="inv-gift">
          <p className="section-kicker">AMPLOP DIGITAL</p>
          <p>
            Bagi yang ingin memberi tanda kasih: <strong>{gift.bank}</strong> {gift.number} a.n. {gift.holder}
          </p>
          <button className="text-link" type="button" onClick={copyGift}>
            {copied ? 'Nomor tersalin ✓' : 'Salin nomor rekening'}
          </button>
        </div>
      )}

      {status && <p className="inv-status" role="status">{status}</p>}
    </div>
  );
}
