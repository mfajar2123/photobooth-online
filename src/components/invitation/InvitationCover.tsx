import { useEffect, useRef, useState } from 'react';

interface Props {
  names: string;
  dateLabel: string;
  cover: string;
  hashtag?: string;
  music: { title: string; artist: string; src: string };
}

export default function InvitationCover({ names, dateLabel, cover, hashtag, music }: Props) {
  const [opened, setOpened] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => () => {
    audioRef.current?.pause();
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      void audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  const openInvitation = () => {
    setOpened(true);
    const audio = audioRef.current;
    if (audio) {
      void audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
    window.setTimeout(() => {
      document.getElementById('undangan-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
  };

  return (
    <>
      {!opened && (
        <div className="inv-cover" role="dialog" aria-label={`Undangan ${names}`}>
          <img className="inv-cover-image" src={cover} alt="" />
          <div className="inv-cover-overlay" />
          <div className="inv-cover-card">
            <p className="section-kicker">THE WEDDING OF</p>
            <h1 className="inv-cover-names">{names}</h1>
            <p className="inv-cover-date">{dateLabel}</p>
            {hashtag && <p className="inv-cover-hashtag">{hashtag}</p>}
            <button className="button-primary inv-cover-button" type="button" onClick={openInvitation}>
              Buka undangan <span aria-hidden="true">↗</span>
            </button>
            <small className="inv-cover-note">Musik akan diputar setelah undangan dibuka.</small>
          </div>
        </div>
      )}

      <audio ref={audioRef} src={music.src} loop preload="none" />

      {opened && (
        <button
          className={`inv-music${playing ? ' is-playing' : ''}`}
          type="button"
          onClick={toggleMusic}
          aria-pressed={playing}
          aria-label={playing ? 'Jeda musik' : 'Putar musik'}
        >
          <span aria-hidden="true">{playing ? '❙❙' : '▶'}</span>
          <span className="inv-music-label">{music.title}</span>
        </button>
      )}
    </>
  );
}
