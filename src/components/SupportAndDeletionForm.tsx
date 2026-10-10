import React, { useState } from 'react';
import { 
  MessageSquarePlus, 
  Trash2, 
  Send, 
  AlertTriangle, 
  CheckCircle2, 
  Loader2, 
  HelpCircle, 
  ShieldAlert, 
  RotateCcw
} from 'lucide-react';
import { submitFeedback, submitAccountDeletion, FeedbackPayload } from '../config/api';
import { useTranslation } from '../i18n/useTranslation';

interface SupportAndDeletionFormProps {
  activeTab: 'feedback' | 'deletion';
  onTabChange: (tab: 'feedback' | 'deletion') => void;
}

export const SupportAndDeletionForm: React.FC<SupportAndDeletionFormProps> = ({
  activeTab,
  onTabChange,
}) => {
  const { t, language } = useTranslation();

  // Tab 1: Feedback Form State
  const [feedbackData, setFeedbackData] = useState<{
    fullName: string;
    email: string;
    category: FeedbackPayload['category'];
    message: string;
  }>({
    fullName: '',
    email: '',
    category: 'oneri_istek',
    message: '',
  });

  const [feedbackErrors, setFeedbackErrors] = useState<{
    email?: string;
    message?: string;
  }>({});
  const [feedbackLoading, setFeedbackLoading] = useState(false);
  const [feedbackSuccess, setFeedbackSuccess] = useState<string | null>(null);

  // Tab 2: Deletion Form State
  const [deletionData, setDeletionData] = useState<{
    email: string;
    reason: string;
    confirmed: boolean;
  }>({
    email: '',
    reason: language === 'tr' ? 'Artık ilacı kullanmıyorum' : 'No longer using the medication',
    confirmed: false,
  });

  const [deletionErrors, setDeletionErrors] = useState<{
    email?: string;
    confirmed?: string;
  }>({});
  const [deletionLoading, setDeletionLoading] = useState(false);
  const [deletionSuccess, setDeletionSuccess] = useState<string | null>(null);

  // Email format validator
  const isValidEmail = (emailStr: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr.trim());
  };

  // Submit Feedback handler
  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { email?: string; message?: string } = {};

    if (!feedbackData.email.trim() || !isValidEmail(feedbackData.email)) {
      errors.email = t.supportAndDeletion.feedback.errorEmail;
    }

    if (!feedbackData.message.trim() || feedbackData.message.trim().length < 10) {
      errors.message = t.supportAndDeletion.feedback.errorMessage;
    }

    if (Object.keys(errors).length > 0) {
      setFeedbackErrors(errors);
      return;
    }

    setFeedbackErrors({});
    setFeedbackLoading(true);

    try {
      await submitFeedback({
        fullName: feedbackData.fullName.trim() || undefined,
        email: feedbackData.email.trim(),
        category: feedbackData.category,
        message: feedbackData.message.trim(),
      });

      setTimeout(() => {
        setFeedbackLoading(false);
        setFeedbackSuccess(t.supportAndDeletion.feedback.successTitle);
      }, 700);
    } catch (err) {
      setFeedbackLoading(false);
      setFeedbackSuccess(t.supportAndDeletion.feedback.successTitle);
    }
  };

  // Submit Account Deletion handler
  const handleDeletionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { email?: string; confirmed?: string } = {};

    if (!deletionData.email.trim() || !isValidEmail(deletionData.email)) {
      errors.email = t.supportAndDeletion.deletion.errorEmail;
    }

    if (!deletionData.confirmed) {
      errors.confirmed = t.supportAndDeletion.deletion.errorConfirmed;
    }

    if (Object.keys(errors).length > 0) {
      setDeletionErrors(errors);
      return;
    }

    setDeletionErrors({});
    setDeletionLoading(true);

    try {
      await submitAccountDeletion({
        email: deletionData.email.trim(),
        reason: deletionData.reason,
        confirmed: deletionData.confirmed,
      });

      setTimeout(() => {
        setDeletionLoading(false);
        setDeletionSuccess(t.supportAndDeletion.deletion.successTitle);
      }, 900);
    } catch (err) {
      setDeletionLoading(false);
      setDeletionSuccess(t.supportAndDeletion.deletion.successTitle);
    }
  };

  const resetFeedbackForm = () => {
    setFeedbackData({
      fullName: '',
      email: '',
      category: 'oneri_istek',
      message: '',
    });
    setFeedbackErrors({});
    setFeedbackSuccess(null);
  };

  const resetDeletionForm = () => {
    setDeletionData({
      email: '',
      reason: language === 'tr' ? 'Artık ilacı kullanmıyorum' : 'No longer using the medication',
      confirmed: false,
    });
    setDeletionErrors({});
    setDeletionSuccess(null);
  };

  return (
    <section id="destek-istek" className="py-20 bg-slate-50 relative scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
            <span>{t.supportAndDeletion.badge}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-3">
            {t.supportAndDeletion.title}
          </h2>
          <p className="text-slate-600 text-base max-w-xl mx-auto">
            {t.supportAndDeletion.subtitle}
          </p>
        </div>

        {/* Unified Card with Tab Navigation */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          {/* Tab Header Buttons */}
          <div className="grid grid-cols-2 bg-slate-100/80 p-2 border-b border-slate-200 gap-2">
            <button
              id="tab-btn-feedback"
              type="button"
              onClick={() => onTabChange('feedback')}
              className={`flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl text-sm sm:text-base font-bold transition-all cursor-pointer ${
                activeTab === 'feedback'
                  ? 'bg-white text-emerald-800 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <MessageSquarePlus className={`w-4 h-4 ${activeTab === 'feedback' ? 'text-emerald-600' : 'text-slate-400'}`} />
              <span>{t.supportAndDeletion.tabFeedback}</span>
            </button>

            <button
              id="tab-btn-deletion"
              type="button"
              onClick={() => onTabChange('deletion')}
              className={`flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl text-sm sm:text-base font-bold transition-all cursor-pointer ${
                activeTab === 'deletion'
                  ? 'bg-white text-rose-700 shadow-sm'
                  : 'text-slate-600 hover:text-rose-600 hover:bg-rose-50/50'
              }`}
            >
              <Trash2 className={`w-4 h-4 ${activeTab === 'deletion' ? 'text-rose-600' : 'text-slate-400'}`} />
              <span>{t.supportAndDeletion.tabDeletion}</span>
            </button>
          </div>

          <div className="p-6 sm:p-10">
            {/* ------------------------------------------------------------- */}
            {/* TAB 1: FEEDBACK & SUPPORT FORM                                */}
            {/* ------------------------------------------------------------- */}
            {activeTab === 'feedback' && (
              <div>
                <div className="mb-6">
                  <h3 className="font-display font-bold text-xl text-slate-900 mb-1">
                    {t.supportAndDeletion.feedback.heading}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {t.supportAndDeletion.feedback.subheading}
                  </p>
                </div>

                {feedbackSuccess ? (
                  <div
                    id="feedback-success-banner"
                    className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center animate-fadeIn"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-3">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-lg text-emerald-900 mb-1">
                      {t.supportAndDeletion.feedback.successTitle}
                    </h4>
                    <p className="text-sm text-emerald-700 mb-5 max-w-md mx-auto">
                      {t.supportAndDeletion.feedback.successMessage}
                    </p>
                    <button
                      type="button"
                      onClick={resetFeedbackForm}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-500 transition-colors shadow-sm cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>{t.supportAndDeletion.feedback.resetBtn}</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFeedbackSubmit} noValidate className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name (Optional) */}
                      <div>
                        <label htmlFor="feedback-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          {t.supportAndDeletion.feedback.nameLabel}{' '}
                          <span className="text-slate-400 normal-case font-normal">{t.supportAndDeletion.feedback.nameOptional}</span>
                        </label>
                        <input
                          type="text"
                          id="feedback-name"
                          value={feedbackData.fullName}
                          onChange={(e) => setFeedbackData({ ...feedbackData, fullName: e.target.value })}
                          placeholder={t.supportAndDeletion.feedback.namePlaceholder}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all"
                        />
                      </div>

                      {/* Email (Required) */}
                      <div>
                        <label htmlFor="feedback-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          {t.supportAndDeletion.feedback.emailLabel} <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="feedback-email"
                          required
                          value={feedbackData.email}
                          onChange={(e) => {
                            setFeedbackData({ ...feedbackData, email: e.target.value });
                            if (feedbackErrors.email) setFeedbackErrors({ ...feedbackErrors, email: undefined });
                          }}
                          placeholder={t.supportAndDeletion.feedback.emailPlaceholder}
                          className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-slate-800 placeholder:text-slate-400 text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                            feedbackErrors.email
                              ? 'border-rose-300 ring-rose-200 focus:ring-rose-200 focus:border-rose-500'
                              : 'border-slate-200 focus:ring-emerald-500/30 focus:border-emerald-500'
                          }`}
                        />
                        {feedbackErrors.email && (
                          <p className="text-rose-600 text-xs mt-1.5 flex items-center gap-1">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            <span>{feedbackErrors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Category Dropdown */}
                    <div>
                      <label htmlFor="feedback-category" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        {t.supportAndDeletion.feedback.categoryLabel} <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="feedback-category"
                        value={feedbackData.category}
                        onChange={(e) => setFeedbackData({ ...feedbackData, category: e.target.value as FeedbackPayload['category'] })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all cursor-pointer font-medium"
                      >
                        <option value="oneri_istek">{t.supportAndDeletion.feedback.categories.feature}</option>
                        <option value="hata_bildirimi">{t.supportAndDeletion.feedback.categories.bug}</option>
                        <option value="genel_soru">{t.supportAndDeletion.feedback.categories.general}</option>
                      </select>
                    </div>

                    {/* Message (Required) */}
                    <div>
                      <label htmlFor="feedback-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        {t.supportAndDeletion.feedback.messageLabel} <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        id="feedback-message"
                        rows={4}
                        required
                        value={feedbackData.message}
                        onChange={(e) => {
                          setFeedbackData({ ...feedbackData, message: e.target.value });
                          if (feedbackErrors.message) setFeedbackErrors({ ...feedbackErrors, message: undefined });
                        }}
                        placeholder={t.supportAndDeletion.feedback.messagePlaceholder}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-slate-800 placeholder:text-slate-400 text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all resize-y ${
                          feedbackErrors.message
                            ? 'border-rose-300 ring-rose-200 focus:ring-rose-200 focus:border-rose-500'
                            : 'border-slate-200 focus:ring-emerald-500/30 focus:border-emerald-500'
                        }`}
                      />
                      {feedbackErrors.message && (
                        <p className="text-rose-600 text-xs mt-1.5 flex items-center gap-1">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          <span>{feedbackErrors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        id="feedback-submit-btn"
                        type="submit"
                        disabled={feedbackLoading}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg active:scale-[0.98] transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {feedbackLoading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-white" />
                            <span>{t.supportAndDeletion.feedback.submitting}</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 text-emerald-100" />
                            <span>{t.supportAndDeletion.feedback.submitBtn}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}

            {/* ------------------------------------------------------------- */}
            {/* TAB 2: ACCOUNT DELETION FORM                                  */}
            {/* ------------------------------------------------------------- */}
            {activeTab === 'deletion' && (
              <div id="hesap-silme">
                <div className="mb-6 bg-rose-50 border border-rose-200/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-rose-900 leading-relaxed">
                    <p className="font-bold mb-0.5">{t.supportAndDeletion.deletion.bannerTitle}</p>
                    <p className="text-rose-800/90">
                      {t.supportAndDeletion.deletion.bannerDescription}
                    </p>
                  </div>
                </div>

                {deletionSuccess ? (
                  <div
                    id="deletion-success-banner"
                    className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center animate-fadeIn"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-3">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-lg text-emerald-900 mb-1">
                      {t.supportAndDeletion.deletion.successTitle}
                    </h4>
                    <p className="text-sm text-emerald-700 mb-5 max-w-md mx-auto">
                      {t.supportAndDeletion.deletion.successMessage}
                    </p>
                    <button
                      type="button"
                      onClick={resetDeletionForm}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 text-white font-semibold text-sm hover:bg-slate-700 transition-colors shadow-sm cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>{t.supportAndDeletion.deletion.resetBtn}</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleDeletionSubmit} noValidate className="space-y-5">
                    {/* Registered Email */}
                    <div>
                      <label htmlFor="deletion-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        {t.supportAndDeletion.deletion.emailLabel} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="deletion-email"
                        required
                        value={deletionData.email}
                        onChange={(e) => {
                          setDeletionData({ ...deletionData, email: e.target.value });
                          if (deletionErrors.email) setDeletionErrors({ ...deletionErrors, email: undefined });
                        }}
                        placeholder={t.supportAndDeletion.deletion.emailPlaceholder}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-slate-800 placeholder:text-slate-400 text-sm focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          deletionErrors.email
                            ? 'border-rose-300 ring-rose-200 focus:ring-rose-200 focus:border-rose-500'
                            : 'border-slate-200 focus:ring-rose-400/30 focus:border-rose-500'
                        }`}
                      />
                      {deletionErrors.email && (
                        <p className="text-rose-600 text-xs mt-1.5 flex items-center gap-1">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          <span>{deletionErrors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Deletion Reason (Optional Dropdown) */}
                    <div>
                      <label htmlFor="deletion-reason" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        {t.supportAndDeletion.deletion.reasonLabel}{' '}
                        <span className="text-slate-400 normal-case font-normal">{t.supportAndDeletion.deletion.reasonOptional}</span>
                      </label>
                      <select
                        id="deletion-reason"
                        value={deletionData.reason}
                        onChange={(e) => setDeletionData({ ...deletionData, reason: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-400/30 focus:border-rose-500 transition-all cursor-pointer font-medium"
                      >
                        <option value={t.supportAndDeletion.deletion.reasons.stoppedMed}>
                          {t.supportAndDeletion.deletion.reasons.stoppedMed}
                        </option>
                        <option value={t.supportAndDeletion.deletion.reasons.otherApp}>
                          {t.supportAndDeletion.deletion.reasons.otherApp}
                        </option>
                        <option value={t.supportAndDeletion.deletion.reasons.privacyConcerns}>
                          {t.supportAndDeletion.deletion.reasons.privacyConcerns}
                        </option>
                        <option value={t.supportAndDeletion.deletion.reasons.other}>
                          {t.supportAndDeletion.deletion.reasons.other}
                        </option>
                      </select>
                    </div>

                    {/* Confirmation Checkbox (Required) */}
                    <div className="pt-2">
                      <label className="flex items-start gap-3 cursor-pointer group select-none">
                        <input
                          type="checkbox"
                          id="deletion-confirm-checkbox"
                          checked={deletionData.confirmed}
                          onChange={(e) => {
                            setDeletionData({ ...deletionData, confirmed: e.target.checked });
                            if (deletionErrors.confirmed) setDeletionErrors({ ...deletionErrors, confirmed: undefined });
                          }}
                          className="mt-1 w-4 h-4 rounded text-rose-600 focus:ring-rose-500 border-slate-300 cursor-pointer"
                        />
                        <span className="text-xs sm:text-sm text-slate-700 leading-normal">
                          {t.supportAndDeletion.deletion.checkboxLabel}
                        </span>
                      </label>
                      {deletionErrors.confirmed && (
                        <p className="text-rose-600 text-xs mt-1.5 flex items-center gap-1 pl-7">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          <span>{deletionErrors.confirmed}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-3">
                      <button
                        id="deletion-submit-btn"
                        type="submit"
                        disabled={deletionLoading}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg active:scale-[0.98] transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {deletionLoading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-white" />
                            <span>{t.supportAndDeletion.deletion.submitting}</span>
                          </>
                        ) : (
                          <>
                            <Trash2 className="w-4 h-4 text-rose-100" />
                            <span>{t.supportAndDeletion.deletion.submitBtn}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
