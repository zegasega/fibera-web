import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Trash2, 
  ShieldAlert, 
  CheckCircle2, 
  Smartphone, 
  Globe, 
  Mail, 
  Server, 
  FileText, 
  ShieldCheck, 
  Lock, 
  AlertCircle,
  HelpCircle,
  Clock,
  Printer
} from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

interface AccountDeletionPageProps {
  onNavigateHome: () => void;
  onNavigatePage: (page: 'home' | 'privacy' | 'terms' | 'deletion') => void;
}

export const AccountDeletionPage: React.FC<AccountDeletionPageProps> = ({ 
  onNavigateHome, 
  onNavigatePage 
}) => {
  const { t, language, setLanguage } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = language === 'tr' 
      ? 'Hesap Silme ve Veri Saklama | Fibera GLP-1 & Sağlık Takibi' 
      : 'Account Deletion & Data Retention | Fibera GLP-1 & Health Tracker';
  }, [language]);

  // Interactive Web Deletion Form State
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [reason, setReason] = useState('stopped_med');
  const [confirmCheckbox, setConfirmCheckbox] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!email || !email.includes('@')) {
      setErrorMessage(
        language === 'tr'
          ? 'Lütfen geçerli bir kayıtlı e-posta adresi giriniz.'
          : 'Please enter a valid registered email address.'
      );
      return;
    }

    if (!confirmCheckbox) {
      setErrorMessage(
        language === 'tr'
          ? 'Hesabınızın ve tüm sağlık verilerinizin kalıcı olarak silineceğini onaylamalısınız.'
          : 'You must confirm that your account and all health data will be permanently deleted.'
      );
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const code = 'FBR-DEL-' + Math.random().toString(36).substring(2, 8).toUpperCase();
      setSubmittedCode(code);
    }, 1000);
  };

  const handleResetForm = () => {
    setEmail('');
    setUserId('');
    setReason('stopped_med');
    setConfirmCheckbox(false);
    setSubmittedCode(null);
    setErrorMessage(null);
  };

  const currentDoc = t.legal.deletion;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col">
      {/* Top Breadcrumb & Actions Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-40 backdrop-blur-md bg-white/90">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-emerald-700 bg-slate-100 hover:bg-emerald-50 px-3 py-1.5 rounded-xl transition-colors cursor-pointer border border-slate-200/80"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{language === 'tr' ? 'Ana Sayfaya Dön' : 'Back to Home'}</span>
            </button>

            <span className="hidden sm:inline text-slate-300">/</span>

            <span className="hidden sm:inline text-xs font-semibold text-slate-500">
              {language === 'tr' ? 'Yasal Belgeler' : 'Legal Documents'}
            </span>
            <span className="hidden sm:inline text-slate-300">/</span>
            <span className="text-xs font-bold text-rose-700">
              {language === 'tr' ? 'Hesap Silme ve Veri Saklama' : 'Account Deletion & Data Retention'}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-100 rounded-xl p-0.5 border border-slate-200 shadow-2xs">
              <button
                type="button"
                onClick={() => setLanguage('tr')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  language === 'tr'
                    ? 'bg-rose-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                TR
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-rose-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                EN
              </button>
            </div>

            {/* Print Button */}
            <button
              onClick={() => window.print()}
              title={language === 'tr' ? 'Sayfayı Yazdır veya PDF Olarak Kaydet' : 'Print or Save as PDF'}
              className="p-1.5 sm:px-3 sm:py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">{language === 'tr' ? 'Yazdır / PDF' : 'Print / PDF'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Header Hero Card */}
        <div className="bg-gradient-to-br from-rose-950 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-300 text-xs font-semibold mb-4">
              <Trash2 className="w-3.5 h-3.5" />
              <span>{currentDoc.badge}</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-3">
              {currentDoc.title}
            </h1>
            <p className="text-rose-100/90 text-sm sm:text-base font-normal max-w-2xl leading-relaxed mb-6">
              {language === 'tr'
                ? 'Google Play Store Kullanıcı Verileri Politikası ve KVKK/GDPR standartlarına uygun olarak, hesabınızı ve kayıtlı tüm sağlık verilerinizi dilediğiniz an kalıcı olarak silebilirsiniz.'
                : 'In full compliance with Google Play Store User Data policies and GDPR/privacy standards, you can permanently delete your account and all associated health data at any time.'}
            </p>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-rose-200/80 pt-4 border-t border-rose-900/80">
              <div>
                <span className="text-slate-300">{language === 'tr' ? 'Son Güncelleme:' : 'Last Updated:'}</span>{' '}
                <strong className="text-white">{currentDoc.lastUpdated}</strong>
              </div>
              <span>•</span>
              <div>
                <span className="text-slate-300">{language === 'tr' ? 'Barındırma:' : 'Hosting:'}</span>{' '}
                <strong className="text-white">{language === 'tr' ? 'Güvenli Sunucu & Veritabanı' : 'Secure Server & Database'}</strong>
              </div>
              <span>•</span>
              <div>
                <span className="text-slate-300">{language === 'tr' ? 'Silme Süresi:' : 'Purge Window:'}</span>{' '}
                <strong className="text-white">{language === 'tr' ? 'Anında / 24 Saat' : 'Instant / 24 Hours'}</strong>
              </div>
              <span>•</span>
              <div>
                <span className="text-slate-300">{language === 'tr' ? 'Doğrudan E-posta:' : 'Direct Email:'}</span>{' '}
                <a href="mailto:support@fibera.xyz" className="text-rose-300 underline font-semibold hover:text-white">
                  support@fibera.xyz
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Step Ways to Delete Callout Cards */}
        <div className="mb-10">
          <h2 className="font-display font-bold text-xl text-slate-900 mb-4 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span>{language === 'tr' ? 'Hesap ve Veri Silme Yöntemleri' : 'Methods for Account & Data Deletion'}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Method 1: In-App */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-extrabold text-base mb-3">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1.5">
                  {language === 'tr' ? '1. Uygulama İçi Silme' : '1. In-App Deletion'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {language === 'tr'
                    ? 'Uygulama içerisinden Ayarlar > Hesap > Hesabımı Sil adımlarını takip ederek tüm verilerinizi anında kalıcı olarak silebilirsiniz.'
                    : 'Within the Fibera app, go to Settings > Account > Delete My Account to instantly and permanently erase all your data.'}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>{language === 'tr' ? 'En Hızlı & Anlık İşlem' : 'Fastest & Instant'}</span>
              </div>
            </div>

            {/* Method 2: Web Form */}
            <div className="bg-white rounded-2xl p-5 border-2 border-rose-300 shadow-md flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-2 right-2 text-[10px] font-bold bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full">
                {language === 'tr' ? 'Web Talebi' : 'Web Request'}
              </div>
              <div>
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-extrabold text-base mb-3">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1.5">
                  {language === 'tr' ? '2. Web Üzerinden Talep' : '2. Web Deletion Form'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {language === 'tr'
                    ? 'Uygulama cihazınızda yüklü olmasa dahi aşağıdaki web formunu doldurarak hesabınızın kapatılmasını başlatabilirsiniz.'
                    : 'Even if the app is uninstalled, you can submit the official web form below to initiate complete account closure.'}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-rose-700 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-rose-600" />
                <span>{language === 'tr' ? 'Form Doğrudan Aşağıda' : 'Form Directly Below'}</span>
              </div>
            </div>

            {/* Method 3: Support Email */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-extrabold text-base mb-3">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1.5">
                  {language === 'tr' ? '3. E-posta ile Talep' : '3. Email Request'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {language === 'tr'
                    ? 'Kayıtlı e-posta adresinizden support@fibera.xyz adresine "Hesap Silme" konulu bir mesaj göndererek talepte bulunabilirsiniz.'
                    : 'Send an email from your registered address to support@fibera.xyz with the subject "Account Deletion Request".'}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-teal-700 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                <span>support@fibera.xyz</span>
              </div>
            </div>
          </div>
        </div>

        {/* Two-Column Section: Interactive Deletion Form + Policy Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left: Interactive Web Deletion Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-rose-200 shadow-md">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
                <Trash2 className="w-4 h-4" />
              </div>
              <h2 className="font-display font-extrabold text-lg sm:text-xl text-slate-900">
                {language === 'tr' ? 'Web Üzerinden Hesap Kapatma Formu' : 'Web Account Deletion Form'}
              </h2>
            </div>
            <p className="text-xs text-slate-500 mb-6">
              {language === 'tr'
                ? 'Bu form aracılığıyla iletilen talepler güvenli sunucu sistemlerimizde doğrulanarak derhal işleme alınır.'
                : 'Requests submitted via this form are verified and processed on our secure server systems.'}
            </p>

            {submittedCode ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-extrabold text-lg text-emerald-950">
                  {language === 'tr' ? 'Silme Talebiniz Alındı' : 'Deletion Request Received'}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-sm mx-auto">
                  {language === 'tr'
                    ? 'Kayıtlı e-posta adresinize bir doğrulama ve onay bağlantısı iletilmiştir. Onayınızın ardından hesabınız ve tüm sağlık geçmişiniz sunucularımızdan ve veritabanlarımızdan geri döndürülemez biçimde silinecektir.'
                    : 'A confirmation link has been sent to your registered email. Once confirmed, your account and all health history will be permanently deleted from our servers and databases.'}
                </p>
                <div className="bg-white p-3 rounded-xl border border-emerald-200 inline-block">
                  <span className="text-[11px] text-slate-500 block">{language === 'tr' ? 'Talep Takip Kodu:' : 'Tracking Code:'}</span>
                  <span className="font-mono font-bold text-sm text-emerald-800">{submittedCode}</span>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    {language === 'tr' ? 'Yeni Bir Talep Gönder' : 'Submit Another Request'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="bg-rose-50 border border-rose-200 p-3 rounded-xl flex items-center gap-2 text-xs text-rose-800">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'tr' ? 'Kayıtlı E-posta Adresi *' : 'Registered Email Address *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ornek@email.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 text-sm bg-slate-50/50"
                  />
                  <span className="text-[11px] text-slate-400 mt-0.5 block">
                    {language === 'tr'
                      ? 'Fibera hesabınızı oluştururken kullandığınız e-posta adresi.'
                      : 'The email address associated with your Fibera account.'}
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'tr' ? 'Kullanıcı Kimliği (User ID - İsteğe Bağlı)' : 'User ID (Optional)'}
                  </label>
                  <input
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder={language === 'tr' ? 'Uygulama içi Profil ekranında yazar (varsa)' : 'Found on profile screen (if known)'}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 text-sm bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'tr' ? 'Silme Nedeni' : 'Reason for Deletion'}
                  </label>
                  <select
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 text-sm bg-slate-50/50 cursor-pointer"
                  >
                    <option value="stopped_med">
                      {language === 'tr' ? 'GLP-1 tedavim / ilacım sonlandı' : 'Ended GLP-1 medication/therapy'}
                    </option>
                    <option value="other_app">
                      {language === 'tr' ? 'Farklı bir takip yöntemi kullanıyorum' : 'Using an alternative tracker'}
                    </option>
                    <option value="privacy">
                      {language === 'tr' ? 'Gizlilik / Kişisel verilerimi silmek istiyorum' : 'Privacy / Erasing my personal data'}
                    </option>
                    <option value="other">
                      {language === 'tr' ? 'Diğer' : 'Other reason'}
                    </option>
                  </select>
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={confirmCheckbox}
                      onChange={(e) => setConfirmCheckbox(e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded text-rose-600 focus:ring-rose-500 border-slate-300 cursor-pointer"
                    />
                    <span className="text-xs text-slate-600 leading-relaxed font-medium">
                      {language === 'tr'
                        ? 'Profilimin, tüm ilaç/doz kayıtlarımın, kilo ve makro geçmişimin güvenli sunuculardan ve veritabanından geri döndürülemez biçimde silineceğini anlıyor ve onaylıyorum.'
                        : 'I understand and confirm that my profile, all medication/dose logs, body weight, and macro history will be permanently deleted from secure servers and databases.'}
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2 mt-4"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>
                    {isSubmitting
                      ? (language === 'tr' ? 'İşleniyor...' : 'Processing...')
                      : (language === 'tr' ? 'Hesabımı ve Verilerimi Kalıcı Olarak Sil' : 'Permanently Delete My Account & Data')}
                  </span>
                </button>
              </form>
            )}
          </div>

          {/* Right: What Gets Deleted & Technical Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
              <h2 className="font-display font-extrabold text-lg text-slate-900 flex items-center gap-2">
                <Server className="w-5 h-5 text-emerald-600" />
                <span>{language === 'tr' ? 'Hangi Veriler Tamamen Silinir?' : 'What Data is Permanently Erased?'}</span>
              </h2>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">{language === 'tr' ? 'Hesap & Kimlik Bilgileri:' : 'Account & Identity Data:'}</strong>{' '}
                    {language === 'tr'
                      ? 'E-posta adresiniz, kullanıcı benzersiz kimlik belirleyicisi (User ID) ve profil bilgileriniz.'
                      : 'Your email address, unique User ID, and account profile info.'}
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">{language === 'tr' ? 'GLP-1 İlaç ve Enjeksiyon Geçmişi:' : 'GLP-1 Injection History:'}</strong>{' '}
                    {language === 'tr'
                      ? 'Kullanılan ilaç ismi, enjeksiyon dozu, tarihi, saati, enjeksiyon yeri rotasyon geçmişi ve notlar.'
                      : 'Medication name, injection doses, dates, injection site rotation logs, and timestamps.'}
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">{language === 'tr' ? 'Vücut Ölçümleri & Kilo Eğrileri:' : 'Body Weight & Metrics:'}</strong>{' '}
                    {language === 'tr'
                      ? 'Kaydedilen tüm tartı değerleri, hedef kilo ve kilo-doz değişim analitik verileri.'
                      : 'All recorded weight logs, target weights, and dose-weight correlation analytics.'}
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">{language === 'tr' ? 'Beslenme & Makro Günlükleri:' : 'Nutrition & Macro Records:'}</strong>{' '}
                    {language === 'tr'
                      ? 'Günlük kalori, protein, karbonhidrat, lif (fiber), yağ ve su tüketim kayıtları.'
                      : 'Daily calories, protein, carbs, dietary fiber, fat, and hydration logs.'}
                  </div>
                </li>
              </ul>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-2">
                <div className="font-bold text-slate-800 flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-emerald-600" />
                  <span>{language === 'tr' ? 'Üçüncü Taraflara Veri Aktarımı Yoktur' : 'Zero Third-Party Data Retention'}</span>
                </div>
                <p>
                  {language === 'tr'
                    ? 'Fibera hiçbir reklam ağı, veri simsarı veya pazarlama SDK\'sı barındırmaz. Verileriniz yalnızca güvenli sunucu ve şifrelenmiş veritabanı altyapımızda tutulur ve silme talimatınızla birlikte yedekler dahil olmak üzere sistemden tamamen kaldırılır.'
                    : 'Fibera contains no ad networks, data brokers, or marketing SDKs. Your data is stored solely on our secure server and encrypted database infrastructure and is completely purged upon your deletion request.'}
                </p>
              </div>
            </div>

            {/* Official Developer Direct Contact */}
            <div className="bg-gradient-to-r from-rose-50 to-orange-50 border border-rose-200 rounded-3xl p-6">
              <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                <Mail className="w-4 h-4 text-rose-600" />
                <span>{language === 'tr' ? 'Destek ve Doğrudan İletişim' : 'Support & Direct Assistance'}</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                {language === 'tr'
                  ? 'Hesap silme sürecinizle ilgili herhangi bir sorunuz veya gecikme durumunda geliştiriciye doğrudan ulaşabilirsiniz:'
                  : 'If you have any questions or require assistance regarding account deletion, please contact the developer directly:'}
              </p>
              <div className="flex items-center gap-2 text-xs">
                <span className="font-semibold text-slate-700">{language === 'tr' ? 'Geliştirici:' : 'Developer:'} zegasega</span>
                <span>•</span>
                <a href="mailto:support@fibera.xyz" className="text-rose-700 font-bold hover:underline">
                  support@fibera.xyz
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Text Sections from Data Model */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-6">
          <h2 className="font-display font-extrabold text-xl text-slate-900">
            {language === 'tr' ? 'Politika Metni ve Yasal Çerçeve' : 'Policy Framework & Terms'}
          </h2>

          {currentDoc.sections.map((sec) => (
            <div key={sec.number} className="pt-4 border-t border-slate-100">
              <h3 className="font-bold text-slate-900 text-base mb-2">
                {sec.number}. {sec.title}
              </h3>
              <div className="space-y-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
                {sec.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          ))}

          {/* Cross Navigation Links */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <button
              type="button"
              onClick={() => onNavigatePage('privacy')}
              className="font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
            >
              <span>{language === 'tr' ? '← Gizlilik Politikası Sayfası' : '← Privacy Policy Page'}</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigatePage('terms')}
              className="font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1 cursor-pointer"
            >
              <span>{language === 'tr' ? 'Kullanım Koşulları Sayfası →' : 'Terms of Service Page →'}</span>
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-bold text-white">Fibera</span> • {language === 'tr' ? 'Bireysel Geliştirici zegasega' : 'Developer zegasega'}
            <p className="text-slate-500 mt-0.5">support@fibera.xyz • {currentDoc.lastUpdated}</p>
          </div>
          <button
            onClick={onNavigateHome}
            className="text-rose-400 hover:text-rose-300 font-semibold cursor-pointer"
          >
            {language === 'tr' ? 'Ana Sayfaya Dön ↑' : 'Back to Home ↑'}
          </button>
        </div>
      </footer>
    </div>
  );
};
