import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { FiberaMascot } from './FiberaMascot';
import { useTranslation } from '../i18n/useTranslation';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [notifyEmail, setNotifyEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  if (!isOpen) return null;

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (notifyEmail.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <div
      id="download-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="download-modal-card"
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-emerald-100 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label={t.legal.closeBtn}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
            <FiberaMascot size="sm" showBanner={false} animate={true} className="w-14 h-14" />
          </div>

          <h3 className="font-display font-extrabold text-2xl text-slate-900 mb-2">
            {t.downloadModal.title}
          </h3>
          <p className="text-slate-600 text-sm">
            {t.downloadModal.subtitle}
          </p>
        </div>

        {/* Store Badges */}
        <div className="space-y-3 mb-6">
          {/* Google Play */}
          <div className="p-4 rounded-2xl bg-slate-900 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                <path d="M3.609 1.814L13.792 12 3.61 22.186A2.22 2.22 0 0 1 3 20.613V3.387c0-.598.224-1.15.609-1.573z" fill="#00E5FF"/>
                <path d="M17.184 8.608L5.27 1.874a2.203 2.203 0 0 0-1.661-.06l10.183 10.186 3.392-3.392z" fill="#FFD400"/>
                <path d="M3.609 22.186c.49.256 1.071.298 1.661-.06l11.914-6.734-3.392-3.392L3.609 22.186z" fill="#FF3A44"/>
                <path d="M20.573 10.536l-3.389-1.928-3.392 3.392 3.392 3.392 3.389-1.928c.957-.547.957-2.381 0-2.928z" fill="#00F076"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Google Play</div>
                <div className="text-sm font-bold">{t.downloadModal.androidTitle}</div>
              </div>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 rounded-full">
              {t.downloadModal.androidBadge}
            </span>
          </div>

          {/* App Store */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 text-slate-900 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <svg className="w-7 h-7 fill-current text-slate-900" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.67-1.08 1.74-.95 2.77.99.08 2.03-.51 2.68-1.27z"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] text-slate-500 uppercase font-semibold">App Store</div>
                <div className="text-sm font-bold">{t.downloadModal.iosTitle}</div>
              </div>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 bg-cyan-50 text-cyan-700 border border-cyan-200 rounded-full">
              {t.downloadModal.iosBadge}
            </span>
          </div>
        </div>

        {/* Pre-register Notification */}
        <div className="pt-4 border-t border-slate-100">
          {subscribed ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-center">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
              <div className="font-bold text-sm text-emerald-900">{t.downloadModal.successTitle}</div>
              <p className="text-xs text-emerald-700 mt-0.5">
                {t.downloadModal.successSub}
              </p>
            </div>
          ) : (
            <form onSubmit={handleNotifySubmit} className="space-y-2">
              <label className="block text-xs font-semibold text-slate-600 text-left">
                {t.downloadModal.notifyLabel}
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder={t.downloadModal.emailPlaceholder}
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors cursor-pointer shadow-sm"
                >
                  {t.downloadModal.notifyBtn}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
