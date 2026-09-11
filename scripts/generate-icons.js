// scripts/generate-icons.js
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1. Create Brand SVG Icon
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="flagBlack" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1f2937"/>
      <stop offset="100%" stop-color="#111827"/>
    </linearGradient>
    <linearGradient id="flagRed" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ef4444"/>
      <stop offset="100%" stop-color="#dc2626"/>
    </linearGradient>
    <linearGradient id="flagGold" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fbbf24"/>
      <stop offset="100%" stop-color="#f59e0b"/>
    </linearGradient>
    <linearGradient id="blueAccent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#1d4ed8"/>
    </linearGradient>
  </defs>

  <!-- Background rounded box -->
  <rect width="512" height="512" rx="108" fill="url(#bgGrad)"/>
  
  <!-- Subtle border highlight -->
  <rect x="8" y="8" width="496" height="496" rx="100" fill="none" stroke="#3b82f6" stroke-width="4" stroke-opacity="0.4"/>

  <!-- German Tri-color Ribbon Banner at Top -->
  <g transform="translate(106, 90)">
    <rect x="0" y="0" width="300" height="12" rx="4" fill="url(#flagBlack)"/>
    <rect x="0" y="14" width="300" height="12" rx="4" fill="url(#flagRed)"/>
    <rect x="0" y="28" width="300" height="12" rx="4" fill="url(#flagGold)"/>
  </g>

  <!-- Open Book Symbol (Deutsch Mussawi Akademie) -->
  <g transform="translate(256, 290)">
    <!-- Book Left Page -->
    <path d="M-120,-80 C-70,-95 -20,-85 0,-60 L0,70 C-20,45 -70,35 -120,50 Z" fill="#ffffff" opacity="0.95"/>
    <!-- Book Right Page -->
    <path d="M120,-80 C70,-95 20,-85 0,-60 L0,70 C20,45 70,35 120,50 Z" fill="#ffffff" opacity="0.95"/>
    <!-- Book Center Spine -->
    <path d="M-4,-60 L4,-60 L4,70 L-4,70 Z" fill="#94a3b8"/>
    <!-- Book lines left -->
    <line x1="-95" y1="-50" x2="-25" y2="-40" stroke="#cbd5e1" stroke-width="6" stroke-linecap="round"/>
    <line x1="-95" y1="-25" x2="-25" y2="-15" stroke="#cbd5e1" stroke-width="6" stroke-linecap="round"/>
    <line x1="-95" y1="0" x2="-25" y2="10" stroke="#cbd5e1" stroke-width="6" stroke-linecap="round"/>
    <line x1="-95" y1="25" x2="-40" y2="32" stroke="#cbd5e1" stroke-width="6" stroke-linecap="round"/>
    <!-- Book lines right -->
    <line x1="25" y1="-40" x2="95" y2="-50" stroke="#cbd5e1" stroke-width="6" stroke-linecap="round"/>
    <line x1="25" y1="-15" x2="95" y2="-25" stroke="#cbd5e1" stroke-width="6" stroke-linecap="round"/>
    <line x1="25" y1="10" x2="95" y2="0" stroke="#cbd5e1" stroke-width="6" stroke-linecap="round"/>
    <line x1="40" y1="32" x2="95" y2="25" stroke="#cbd5e1" stroke-width="6" stroke-linecap="round"/>
    <!-- Glowing Bookmark / Pen -->
    <path d="M0,-60 L0,85 L10,75 L20,85 L20,-60 Z" fill="url(#flagGold)"/>
  </g>

  <!-- Level Badge Pill: A1 - C2 -->
  <g transform="translate(156, 400)">
    <rect width="200" height="42" rx="21" fill="url(#blueAccent)"/>
    <text x="100" y="27" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="900" text-anchor="middle" letter-spacing="2">A1 — C2</text>
  </g>
</svg>`;

fs.writeFileSync(path.join(publicDir, 'icon.svg'), svgContent, 'utf8');

// Function to generate a raw valid PNG file using Node.js zlib
function createSolidPng(width, height, r, g, b, a = 255) {
  // PNG signature
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR chunk
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData.writeUInt8(8, 8); // bit depth
  ihdrData.writeUInt8(6, 9); // RGBA color type
  ihdrData.writeUInt8(0, 10); // compression
  ihdrData.writeUInt8(0, 11); // filter
  ihdrData.writeUInt8(0, 12); // interlace

  function makeChunk(type, data) {
    const len = data.length;
    const buf = Buffer.alloc(4 + 4 + len + 4);
    buf.writeUInt32BE(len, 0);
    buf.write(type, 4, 4, 'ascii');
    data.copy(buf, 8);
    const crc = crc32(buf.subarray(4, 8 + len));
    buf.writeInt32BE(crc, 8 + len);
    return buf;
  }

  // Scanlines with filter byte 0
  const rowLen = 1 + width * 4;
  const rawData = Buffer.alloc(rowLen * height);

  // Gradient / brand drawing:
  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowLen;
    rawData[rowOffset] = 0; // Filter: None
    const t = y / height;
    // Dark slate blue gradient (from #1e293b to #0f172a)
    const curR = Math.round(30 * (1 - t) + 15 * t);
    const curG = Math.round(41 * (1 - t) + 23 * t);
    const curB = Math.round(59 * (1 - t) + 42 * t);

    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;
      // Draw centered book / badge representation
      const cx = width / 2;
      const cy = height / 2;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Center circular crest
      if (dist < width * 0.36) {
        // Gold / blue badge
        if (Math.abs(dy) < height * 0.04 && Math.abs(dx) < width * 0.28) {
          // Gold stripe
          rawData[pxOffset] = 251;
          rawData[pxOffset + 1] = 191;
          rawData[pxOffset + 2] = 36;
          rawData[pxOffset + 3] = 255;
        } else if (dy > 0 && Math.abs(dx) < width * 0.22 && dy < height * 0.18) {
          // White book page
          rawData[pxOffset] = 240;
          rawData[pxOffset + 1] = 244;
          rawData[pxOffset + 2] = 248;
          rawData[pxOffset + 3] = 255;
        } else {
          rawData[pxOffset] = 37;
          rawData[pxOffset + 1] = 99;
          rawData[pxOffset + 2] = 235; // Blue 600
          rawData[pxOffset + 3] = 255;
        }
      } else {
        rawData[pxOffset] = curR;
        rawData[pxOffset + 1] = curG;
        rawData[pxOffset + 2] = curB;
        rawData[pxOffset + 3] = 255;
      }
    }
  }

  const compressed = zlib.deflateSync(rawData);
  const idatChunk = makeChunk('IDAT', compressed);
  const ihdrChunk = makeChunk('IHDR', ihdrData);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// CRC32 implementation
function crc32(buf) {
  let crc = 0 ^ -1;
  for (let i = 0; i < buf.length; i++) {
    let byte = buf[i];
    for (let j = 0; j < 8; j++) {
      if ((crc ^ byte) & 1) {
        crc = (crc >>> 1) ^ 0xedb88320;
      } else {
        crc = crc >>> 1;
      }
      byte = byte >>> 1;
    }
  }
  return crc ^ -1;
}

const pwa192 = createSolidPng(192, 192, 30, 41, 59);
const pwa512 = createSolidPng(512, 512, 30, 41, 59);
const pwaMaskable = createSolidPng(512, 512, 30, 41, 59);
const appleIcon = createSolidPng(180, 180, 30, 41, 59);

fs.writeFileSync(path.join(publicDir, 'pwa-192x192.png'), pwa192);
fs.writeFileSync(path.join(publicDir, 'pwa-512x512.png'), pwa512);
fs.writeFileSync(path.join(publicDir, 'pwa-maskable-512x512.png'), pwaMaskable);
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), appleIcon);
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), pwa192);

console.log('Successfully generated PWA icon assets in /public');
