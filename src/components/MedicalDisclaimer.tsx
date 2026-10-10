import React from 'react';
import { AlertCircle, Stethoscope, ShieldCheck } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

export const MedicalDisclaimer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="tibbi-sorumluluk-reddi" className="py-8 bg-white border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-50/90 via-sky-50/70 to-emerald-50/60 rounded-3xl p-6 sm:p-7 border border-amber-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-100/90 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200/80 shadow-2xs">
            <Stethoscope className="w-6 h-6" />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                {t.medicalDisclaimer.badge}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              {t.medicalDisclaimer.description}
            </p>
          </div>

          <div className="shrink-0 hidden lg:block">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-white/90 px-3.5 py-1.5 rounded-full border border-slate-200/70 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              {t.medicalDisclaimer.safetyBadge}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
