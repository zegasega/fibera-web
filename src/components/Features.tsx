import React from 'react';
import { 
  CalendarCheck, 
  Salad, 
  Activity, 
  Utensils, 
  Sparkles, 
  Check 
} from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

export const Features: React.FC = () => {
  const { t } = useTranslation();

  const iconMap: Record<string, React.ReactNode> = {
    'feature-rotation': (
      <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-5 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
        <CalendarCheck className="w-6 h-6" />
      </div>
    ),
    'feature-fiber': (
      <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-600 flex items-center justify-center mb-5 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
        <Salad className="w-6 h-6" />
      </div>
    ),
    'feature-symptom': (
      <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-600 flex items-center justify-center mb-5 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
        <Activity className="w-6 h-6" />
      </div>
    ),
    'feature-nutrition': (
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500/15 to-cyan-500/15 text-emerald-700 flex items-center justify-center mb-5 group-hover:bg-gradient-to-tr group-hover:from-emerald-600 group-hover:to-teal-600 group-hover:text-white transition-all duration-300">
        <Utensils className="w-6 h-6" />
      </div>
    ),
  };

  const badgeColorMap: Record<string, string> = {
    'feature-rotation': 'bg-emerald-50 text-emerald-700 border-emerald-200',
    'feature-fiber': 'bg-teal-50 text-teal-700 border-teal-200',
    'feature-symptom': 'bg-cyan-50 text-cyan-700 border-cyan-200',
    'feature-nutrition': 'bg-emerald-50 text-emerald-800 border-emerald-200',
  };

  return (
    <section id="ozellikler" className="py-20 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.features.badge}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
            {t.features.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t.features.subtitle}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.features.items.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="group bg-[#F8FAFC] hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  {iconMap[item.id]}
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${badgeColorMap[item.id]}`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Highlights List */}
              <div className="pt-4 border-t border-slate-200/60">
                <ul className="space-y-2">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
