import React, { useState, useMemo } from 'react';
import { 
  ChevronDown, 
  Search, 
  HelpCircle, 
  MessageSquare, 
  Sparkles,
  CheckCircle2,
  X
} from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

interface FAQProps {
  onNavigateToTab?: (tab: 'feedback' | 'deletion') => void;
}

export const FAQ: React.FC<FAQProps> = ({ onNavigateToTab }) => {
  const { t, language } = useTranslation();
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-3']); // Default open 1 and 3 for immediate value
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'glp1' | 'nutrition' | 'app'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const faqData = t.faq;

  const filteredItems = useMemo(() => {
    return faqData.items.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const normalizedQuery = searchQuery.trim().toLowerCase();
      if (!normalizedQuery) return matchesCategory;

      const matchesQuery = 
        item.question.toLowerCase().includes(normalizedQuery) ||
        item.answer.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [faqData.items, selectedCategory, searchQuery]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleExpandAll = () => {
    setOpenIds(filteredItems.map((item) => item.id));
  };

  const handleCollapseAll = () => {
    setOpenIds([]);
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateToTab) {
      onNavigateToTab('feedback');
    }
    const element = document.getElementById('destek-istek');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getCategoryLabel = (category: 'glp1' | 'nutrition' | 'app') => {
    switch (category) {
      case 'glp1':
        return faqData.filterGlp1;
      case 'nutrition':
        return faqData.filterNutrition;
      case 'app':
        return faqData.filterApp;
      default:
        return '';
    }
  };

  return (
    <section id="sss" className="py-24 bg-white relative overflow-hidden border-t border-slate-200/80">
      {/* Subtle Background Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-50/50 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-50/40 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3.5 border border-emerald-200 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>{faqData.badge}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4 text-balance">
            {faqData.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed text-balance">
            {faqData.subtitle}
          </p>
        </div>

        {/* Search Bar & Category Filters */}
        <div className="space-y-4 mb-8">
          {/* Search Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={faqData.searchPlaceholder}
              className="w-full pl-10 pr-10 py-3 rounded-2xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm text-slate-900 placeholder:text-slate-400 transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                title={language === 'tr' ? 'Aramayı Temizle' : 'Clear search'}
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Interactive Controls: Category Segmented Filter + Expand/Collapse Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
            {/* Category Filter Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-slate-900 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                }`}
              >
                {faqData.filterAll}
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory('glp1')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === 'glp1'
                    ? 'bg-emerald-700 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                }`}
              >
                {faqData.filterGlp1}
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory('nutrition')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === 'nutrition'
                    ? 'bg-teal-700 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                }`}
              >
                {faqData.filterNutrition}
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory('app')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === 'app'
                    ? 'bg-cyan-800 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                }`}
              >
                {faqData.filterApp}
              </button>
            </div>

            {/* Expand / Collapse All Quick Controls */}
            <div className="flex items-center gap-2 self-end sm:self-auto text-xs font-medium text-slate-500">
              <button
                type="button"
                onClick={handleExpandAll}
                className="hover:text-emerald-700 transition-colors cursor-pointer"
              >
                {faqData.expandAll}
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={handleCollapseAll}
                className="hover:text-emerald-700 transition-colors cursor-pointer"
              >
                {faqData.collapseAll}
              </button>
            </div>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredItems.length === 0 ? (
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 text-center">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">
                {faqData.noResultsTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto mb-4">
                {faqData.noResultsDesc}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                {language === 'tr' ? 'Filtreleri Temizle' : 'Clear Filters'}
              </button>
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isOpen = openIds.includes(item.id);
              const categoryLabel = getCategoryLabel(item.category);

              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-emerald-300 shadow-md ring-1 ring-emerald-500/10'
                      : 'border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    <div className="space-y-1.5 flex-1 pr-2">
                      <div className="flex items-center gap-2 text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                        <span>{String(index + 1).padStart(2, '0')}</span>
                        <span>·</span>
                        <span className="text-emerald-700 font-semibold">{categoryLabel}</span>
                      </div>
                      <h3 className={`font-display font-bold text-base sm:text-lg transition-colors text-balance ${
                        isOpen ? 'text-emerald-950' : 'text-slate-900'
                      }`}>
                        {item.question}
                      </h3>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen 
                          ? 'bg-emerald-100 text-emerald-800 rotate-180' 
                          : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Animated Accordion Body */}
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    className={`transition-all duration-300 ease-in-out px-5 sm:px-6 overflow-hidden ${
                      isOpen ? 'max-h-[800px] pb-6 pt-0 opacity-100' : 'max-h-0 pb-0 pt-0 opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="border-t border-slate-100 pt-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Still Have Questions? Direct Contact Support Box */}
        <div className="mt-12 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 max-w-lg">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'tr' ? '7/24 Kullanıcı Desteği' : 'User Support & Assistance'}</span>
            </div>
            <h3 className="font-display font-extrabold text-lg sm:text-xl text-white mb-2">
              {faqData.supportBox.title}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {faqData.supportBox.description}
            </p>
          </div>

          <div className="relative z-10 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleContactClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{faqData.supportBox.cta}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
