import React from 'react';
import { X, ShieldCheck, FileText, Trash2, Globe, Lock, Mail, ExternalLink } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

export type LegalDocType = 'privacy' | 'terms' | 'deletion';

interface LegalModalsProps {
  isOpen: boolean;
  activeDoc: LegalDocType;
  onClose: () => void;
  onSelectDoc: (doc: LegalDocType) => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({
  isOpen,
  activeDoc,
  onClose,
  onSelectDoc,
}) => {
  const { t, language, setLanguage } = useTranslation();

  if (!isOpen) return null;

  const currentDoc = t.legal[activeDoc];

  return (
    <div
      id="legal-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="legal-modal-card"
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100/90 text-emerald-800 flex items-center justify-center shrink-0 shadow-2xs">
              {activeDoc === 'privacy' && <ShieldCheck className="w-5 h-5" />}
              {activeDoc === 'terms' && <FileText className="w-5 h-5" />}
              {activeDoc === 'deletion' && <Trash2 className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-900 leading-tight">
                {currentDoc.title}
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                {t.legal.complianceBadge} • <span className="text-emerald-700 font-semibold">{t.legal.updatedDate}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Language Switcher inside Legal Modal for ease of compliance review */}
            <div className="flex items-center bg-white rounded-xl border border-slate-200 p-0.5 shadow-2xs">
              <button
                type="button"
                onClick={() => setLanguage('tr')}
                className={`px-2 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  language === 'tr'
                    ? 'bg-emerald-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Türkçe Metin"
              >
                TR
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-emerald-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="English Version"
              >
                EN
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label={t.legal.closeBtn}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Switcher inside Modal */}
        <div className="flex border-b border-slate-200 bg-white px-4 sm:px-6 gap-2 text-xs sm:text-sm font-bold overflow-x-auto select-none">
          <button
            onClick={() => onSelectDoc('privacy')}
            className={`py-3 px-3 border-b-2 transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeDoc === 'privacy'
                ? 'border-emerald-600 text-emerald-800'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{t.legal.tabs.privacy}</span>
          </button>
          <button
            onClick={() => onSelectDoc('terms')}
            className={`py-3 px-3 border-b-2 transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeDoc === 'terms'
                ? 'border-emerald-600 text-emerald-800'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>{t.legal.tabs.terms}</span>
          </button>
          <button
            onClick={() => onSelectDoc('deletion')}
            className={`py-3 px-3 border-b-2 transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeDoc === 'deletion'
                ? 'border-emerald-600 text-emerald-800'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Trash2 className="w-4 h-4 text-rose-500" />
            <span>{t.legal.tabs.deletion}</span>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto text-sm text-slate-600 leading-relaxed space-y-5">
          {activeDoc === 'privacy' && (
            <div className="space-y-4">
              <div className="bg-emerald-50/80 p-3.5 rounded-2xl border border-emerald-200/80 text-xs text-emerald-950 flex items-start gap-2.5">
                <Lock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong>{language === 'tr' ? 'Google Play Sağlık Politikası Güvencesi:' : 'Google Play Health Policy Guarantee:'}</strong>{' '}
                  {t.legal.privacy.summaryNote}
                </div>
              </div>

              <div className="text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2">
                <p className="font-medium text-xs text-slate-500 uppercase tracking-wider">{t.legal.privacy.lastUpdated}</p>
                <p className="font-normal text-sm leading-relaxed">{t.legal.privacy.intro}</p>
                <p className="font-semibold text-slate-800 text-sm">{t.legal.privacy.agreement}</p>
              </div>

              {t.legal.privacy.sections.map((sec) => (
                <div key={sec.number} className="pt-2 border-t border-slate-100">
                  <h4 className="font-bold text-slate-900 text-base mb-2">
                    {sec.number}. {sec.title}
                  </h4>
                  <div className="space-y-2 text-slate-600 text-xs sm:text-sm">
                    {sec.content.map((p, idx) => (
                      <p key={idx} className="leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeDoc === 'terms' && (
            <div className="space-y-4">
              <div className="bg-amber-50/90 p-3.5 rounded-2xl border border-amber-200 text-xs text-amber-950 flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>{t.legal.terms.medicalWarning}</div>
              </div>

              <div className="text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2">
                <p className="font-medium text-xs text-slate-500 uppercase tracking-wider">{t.legal.terms.lastUpdated}</p>
                <p className="font-normal text-sm leading-relaxed">{t.legal.terms.intro}</p>
              </div>

              {t.legal.terms.sections.map((sec) => (
                <div key={sec.number} className="pt-2 border-t border-slate-100">
                  <h4 className="font-bold text-slate-900 text-base mb-2">
                    {sec.number}. {sec.title}
                  </h4>
                  <div className="space-y-2 text-slate-600 text-xs sm:text-sm">
                    {sec.content.map((p, idx) => (
                      <p key={idx} className="leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeDoc === 'deletion' && (
            <div className="space-y-4">
              <div className="bg-rose-50/80 p-3.5 rounded-2xl border border-rose-200 text-xs text-rose-950 flex items-start gap-2.5">
                <Trash2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <strong>{t.legal.deletion.badge}</strong>: {language === 'tr'
                    ? 'Kullanıcılar istedikleri an hesaplarının, ilaç geçmişlerinin ve tüm verilerinin güvenli sunucularımız ve veritabanlarımızdan kalıcı olarak silinmesini talep edebilirler.'
                    : 'Users can request the immediate and permanent deletion of their account, medication history, and all stored health data from our secure servers and databases at any time.'}
                </div>
              </div>

              {t.legal.deletion.sections.map((sec) => (
                <div key={sec.number} className="pt-2 border-t border-slate-100">
                  <h4 className="font-bold text-slate-900 text-base mb-2">
                    {sec.number}. {sec.title}
                  </h4>
                  <div className="space-y-2 text-slate-600 text-xs sm:text-sm">
                    {sec.content.map((p, idx) => (
                      <p key={idx} className="leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-between text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-500" />
                  <span>{language === 'tr' ? 'Doğrudan Silme İletişimi:' : 'Direct Deletion Contact:'}</span>
                  <a href="mailto:support@fibera.xyz" className="font-bold text-emerald-700 hover:underline">
                    support@fibera.xyz
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
          <span className="text-xs text-slate-500 hidden sm:inline">
            Fibera • {language === 'tr' ? 'Bireysel Geliştirici: zegasega' : 'Developer: zegasega'}
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-slate-800 text-white text-sm font-semibold hover:bg-slate-700 transition-colors cursor-pointer ml-auto"
          >
            {t.legal.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
