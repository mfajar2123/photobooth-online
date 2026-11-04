const fs = require('fs');
let css = fs.readFileSync('src/styles/global.css', 'utf8');

const target = '.article-next { background:var(--butter); padding:24px; margin-top:36px !important; }';
const addition = `
/* --- Enhanced Article Components for E-E-A-T & Visual Depth --- */
.article-meta-box {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 20px;
  align-items: center;
  margin-top: 24px;
  padding-top: 18px;
  border-top: 1px solid rgba(18, 18, 18, 0.2);
  font-size: 13px;
  color: var(--muted);
}
.article-meta-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.article-meta-item strong {
  color: var(--ink);
  font-weight: 700;
}
.article-meta-tag {
  background: var(--ink);
  color: var(--cream);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 3px 8px;
  border-radius: 2px;
}

.article-takeaways-card {
  background: var(--cream);
  border: 2px solid var(--ink);
  box-shadow: 4px 4px 0 var(--ink);
  padding: clamp(20px, 3vw, 28px);
  margin: 32px 0 40px;
}
.article-takeaways-title {
  font: 800 16px/1.2 var(--display);
  letter-spacing: -0.01em;
  text-transform: uppercase;
  margin: 0 0 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--ink);
}
.article-takeaways-list {
  margin: 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 15px;
  line-height: 1.6;
}

.article-callout-box {
  background: var(--butter);
  border: 2px solid var(--ink);
  padding: 24px;
  margin: 36px 0;
  box-shadow: 3px 3px 0 var(--ink);
}
.article-callout-box h3 {
  font: 800 18px/1.2 var(--display);
  letter-spacing: -0.01em;
  margin: 0 0 10px;
}
.article-callout-box p:last-child {
  margin-bottom: 0;
}

.article-steps-section {
  margin: 44px 0;
  padding: 28px;
  background: #fff;
  border: 2px solid var(--ink);
  box-shadow: 4px 4px 0 var(--ink);
}
.article-steps-title {
  font: 800 clamp(20px, 2.5vw, 24px)/1.2 var(--display);
  letter-spacing: -0.02em;
  margin: 0 0 8px;
}
.article-steps-intro {
  font-size: 15px;
  color: var(--muted);
  margin: 0 0 24px;
}
.article-steps-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.article-step-col {
  border: 1px solid var(--ink);
  background: var(--cream);
  padding: 16px;
  display: flex;
  flex-direction: column;
}
.article-step-num {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--poppy);
  margin-bottom: 6px;
}
.article-step-col h4 {
  font: 800 15px/1.3 var(--display);
  margin: 0 0 10px;
}
.article-step-img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  border: 1px solid var(--ink);
  background: #000;
  margin-bottom: 12px;
}
.article-step-desc {
  font-size: 13.5px;
  line-height: 1.55;
  color: var(--muted);
  margin: 0;
}

.article-sample-box {
  margin: 40px 0;
  padding: 24px;
  background: #faf8f0;
  border: 2px solid var(--ink);
}
.article-sample-box h3 {
  font: 800 18px/1.2 var(--display);
  margin: 0 0 8px;
}
.article-sample-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 16px;
}
.article-sample-item {
  border: 1px solid var(--ink);
  background: #fff;
  padding: 12px;
  text-align: center;
}
.article-sample-img {
  width: 100%;
  max-height: 280px;
  object-fit: contain;
  background: #111;
  border: 1px solid rgba(0,0,0,0.1);
  margin-bottom: 8px;
}
.article-sample-cap {
  font-size: 12.5px;
  color: var(--muted);
  line-height: 1.4;
  margin: 0;
}

.article-devices-section {
  margin: 40px 0;
}
.article-devices-title {
  font: 800 20px/1.2 var(--display);
  margin: 0 0 16px;
}
.article-device-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.article-device-card {
  border: 2px solid var(--ink);
  background: #fff;
  padding: 18px;
  box-shadow: 2px 2px 0 var(--ink);
}
.article-device-header {
  font: 800 15px/1.2 var(--display);
  margin: 0 0 10px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.article-device-list {
  margin: 0;
  padding-left: 18px;
  font-size: 13.5px;
  line-height: 1.55;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--muted);
}
.article-device-list strong {
  color: var(--ink);
}

.article-author-card {
  margin-top: 48px;
  padding: 24px;
  border: 2px solid var(--ink);
  background: var(--cream);
  display: flex;
  gap: 20px;
  align-items: flex-start;
}
.article-author-avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid var(--ink);
  background: var(--butter);
  display: grid;
  place-items: center;
  font: 800 20px/1 var(--display);
  flex-shrink: 0;
}
.article-author-info h4 {
  font: 800 16px/1.2 var(--display);
  margin: 0 0 4px;
}
.article-author-role {
  font-size: 12px;
  font-weight: 600;
  color: var(--poppy);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 8px;
}
.article-author-bio {
  font-size: 13.5px;
  line-height: 1.6;
  color: var(--muted);
  margin: 0;
}

@media (max-width: 768px) {
  .article-steps-grid { grid-template-columns: 1fr; }
  .article-sample-grid { grid-template-columns: 1fr; }
  .article-device-grid { grid-template-columns: 1fr; }
  .article-author-card { flex-direction: column; }
}
`;

if (!css.includes('.article-takeaways-card')) {
  css = css.replace(target, target + '\n' + addition);
  fs.writeFileSync('src/styles/global.css', css, 'utf8');
  console.log('Successfully updated global.css');
} else {
  console.log('Already updated.');
}
