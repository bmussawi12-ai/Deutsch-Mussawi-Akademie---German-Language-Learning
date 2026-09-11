import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';

interface QRCodeDisplayProps {
  value: string;
  size?: number;
  className?: string;
}

export const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({
  value,
  size = 180,
  className = ''
}) => {
  const [dataUrl, setDataUrl] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    if (!value) return;

    QRCode.toDataURL(value, {
      width: size * 2, // 2x for sharp retina displays
      margin: 2,
      color: {
        dark: '#0f172a',
        light: '#ffffff',
      },
      errorCorrectionLevel: 'M',
    })
      .then((url) => {
        if (isMounted) {
          setDataUrl(url);
          setError(false);
        }
      })
      .catch((err) => {
        console.error('QR code generation error:', err);
        if (isMounted) setError(true);
      });

    return () => {
      isMounted = false;
    };
  }, [value, size]);

  if (error || !dataUrl) {
    return (
      <div 
        style={{ width: size, height: size }} 
        className={`flex items-center justify-center bg-slate-100 rounded border border-slate-200 text-[10px] text-slate-500 ${className}`}
      >
        <span>در حال بارگذاری QR...</span>
      </div>
    );
  }

  return (
    <img
      src={dataUrl}
      alt="QR Code für Deutsch Mussawi"
      width={size}
      height={size}
      className={`rounded shadow-xs border border-slate-200 bg-white p-1 ${className}`}
    />
  );
};
