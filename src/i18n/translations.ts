export interface TranslationSchema {
  nav: {
    features: string;
    howItWorks: string;
    support: string;
    deleteAccount: string;
    downloadApp: string;
    logoPack: string;
    categoryBadge: string;
    langSwitchLabel: string;
  };
  hero: {
    badge: string;
    title1: string;
    titleHighlight: string;
    title2: string;
    subtitle: string;
    googlePlay: string;
    googlePlayAction: string;
    appStore: string;
    appStoreAction: string;
    soon: string;
    trustPrivacy: string;
    trustHealthData: string;
    trustMeds: string;
    fairySays: string;
    fairyQuote: string;
    dragDropPrompt: string;
    uploadLogoBtn: string;
    activeCustomLogo: string;
    transparentView: string;
    squareView: string;
    downloadBtn: string;
    dropHereTitle: string;
    dropHereSub: string;
    cycleTitle: string;
    cycleSubtitle: string;
    daysLeft: string;
    trackerTitle: string;
    dayNum: string;
    lastSite: string;
    nextRotationPrompt: string;
    fiberScoreTitle: string;
    fiberGoalText: string;
    addMeal: string;
    fiberOption: string;
    comfortTitle: string;
    comfortStatus: string;
  };
  simulator: {
    badge: string;
    title: string;
    subtitle: string;
    fairyBeside: string;
    fairyGoal: string;
    step1Med: string;
    step2Dose: string;
    step3Day: string;
    everyDay: string;
    step4LastSite: string;
    step5Fiber: string;
    fiberLow: string;
    fiberIdeal: string;
    fiberHigh: string;
    grams: string;
    activeTracking: string;
    recommendedNext: string;
    fiberBalanceLevel: string;
    fiberWarning: string;
    fiberOptimal: string;
    waterAdviceTitle: string;
    waterAdvicePrefix: string;
    waterAdviceHighlight: string;
    waterAdviceSuffix: string;
    algorithmTitle: string;
    algorithmSub: string;
  };
  features: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      id: string;
      badge: string;
      title: string;
      description: string;
      highlights: string[];
    }[];
  };
  howItWorks: {
    badge: string;
    title: string;
    subtitle: string;
    steps: {
      step: string;
      title: string;
      description: string;
      detail: string;
    }[];
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    filterAll: string;
    filterGlp1: string;
    filterNutrition: string;
    filterApp: string;
    expandAll: string;
    collapseAll: string;
    noResultsTitle: string;
    noResultsDesc: string;
    items: {
      id: string;
      category: 'glp1' | 'nutrition' | 'app';
      question: string;
      answer: string;
    }[];
    supportBox: {
      title: string;
      description: string;
      cta: string;
    };
  };
  medicalDisclaimer: {
    badge: string;
    title: string;
    description: string;
    safetyBadge: string;
  };
  supportAndDeletion: {
    badge: string;
    title: string;
    subtitle: string;
    tabFeedback: string;
    tabDeletion: string;
    feedback: {
      heading: string;
      subheading: string;
      nameLabel: string;
      nameOptional: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      categoryLabel: string;
      categories: {
        feature: string;
        bug: string;
        sideEffect?: string;
        general: string;
      };
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      submitting: string;
      successTitle: string;
      successMessage: string;
      resetBtn: string;
      errorEmail: string;
      errorMessage: string;
    };
    deletion: {
      bannerTitle: string;
      bannerDescription: string;
      emailLabel: string;
      emailPlaceholder: string;
      reasonLabel: string;
      reasonOptional: string;
      reasons: {
        stoppedMed: string;
        otherApp: string;
        privacyConcerns: string;
        other: string;
      };
      checkboxLabel: string;
      submitBtn: string;
      submitting: string;
      successTitle: string;
      successMessage: string;
      resetBtn: string;
      errorEmail: string;
      errorConfirmed: string;
    };
  };
  footer: {
    tagline: string;
    supportTitle: string;
    quickLinksTitle: string;
    featuresLink: string;
    howItWorksLink: string;
    supportLink: string;
    deletionLink: string;
    logoPackLink: string;
    legalTitle: string;
    privacyLink: string;
    termsLink: string;
    deletionPolicyLink: string;
    complianceNote: string;
    copyright: string;
    designedWith: string;
    fairyEnding: string;
    developerInfo: string;
  };
  downloadModal: {
    title: string;
    subtitle: string;
    androidTitle: string;
    androidBadge: string;
    iosTitle: string;
    iosBadge: string;
    notifyLabel: string;
    emailPlaceholder: string;
    notifyBtn: string;
    successTitle: string;
    successSub: string;
  };
  logoModal: {
    badge: string;
    title: string;
    subtitle: string;
    squareTitle: string;
    squareDesc: string;
    downloadSquare: string;
    transparentTitle: string;
    transparentDesc: string;
    downloadTransparent: string;
    uploadTitle: string;
    uploadDesc: string;
    chooseFile: string;
    resetDefaultTooltip: string;
    vectorQualityNote: string;
    uploadSuccess: string;
    resetSuccess: string;
  };
  legal: {
    closeBtn: string;
    updatedDate: string;
    complianceBadge: string;
    tabs: {
      privacy: string;
      terms: string;
      deletion: string;
    };
    privacy: {
      title: string;
      lastUpdated: string;
      intro: string;
      agreement: string;
      summaryNote: string;
      sections: {
        number: string;
        title: string;
        content: string[];
      }[];
    };
    terms: {
      title: string;
      lastUpdated: string;
      intro: string;
      medicalWarning: string;
      sections: {
        number: string;
        title: string;
        content: string[];
      }[];
    };
    deletion: {
      title: string;
      lastUpdated: string;
      badge: string;
      sections: {
        number: string;
        title: string;
        content: string[];
      }[];
    };
  };
}

export const translations: Record<'tr' | 'en', TranslationSchema> = {
  tr: {
    nav: {
      features: 'Özellikler',
      howItWorks: 'Nasıl Çalışır?',
      support: 'Destek & İstek',
      deleteAccount: 'Hesap Silme',
      downloadApp: 'Uygulamayı İndir',
      logoPack: 'Logo Paketi',
      categoryBadge: 'GLP-1 Takipçisi',
      langSwitchLabel: 'Dil Değiştir (Language)',
    },
    hero: {
      badge: 'GLP-1 Tedavisi İçin Özel Tasarlanmış İlk Akıllı Asistan',
      title1: 'GLP-1 Tedavinde Yeni Bir Dönem:',
      titleHighlight: 'Doz, Lif ve Denge',
      title2: 'Cebinde.',
      subtitle:
        'İğne günlerini kaçırma, enjeksiyon rotasyonunu şaşırma. Yan etkileri lif ve protein dengesiyle kontrol altına al, yapay zeka destekli yol arkadaşınla hedefine güvenle ulaş.',
      googlePlay: "GOOGLE PLAY'DEN",
      googlePlayAction: 'İNDİRİN',
      appStore: "APP STORE'DAN",
      appStoreAction: 'İNDİRİN',
      soon: 'Yakında',
      trustPrivacy: 'Kullanıcı Gizliliği Öncelikli',
      trustHealthData: 'Güvenli Sağlık Verisi Takibi',
      trustMeds: 'Ozempic® • Wegovy® • Mounjaro® • Zepbound® Uyumlu',
      fairySays: 'Fibera Diyor Ki:',
      fairyQuote: '"Bugün lif hedefini yakaladın, iğne gününe 3 gün var!"',
      dragDropPrompt:
        'Sohbetten eklediğiniz Photoroom.png dosyasını doğrudan maskota sürükleyebilir veya butona tıklayıp seçebilirsiniz.',
      uploadLogoBtn: 'Logonuzu Yükleyin / Seçin',
      activeCustomLogo: 'Orijinal Logonuz Aktif (Değiştir)',
      transparentView: '🌱 Şeffaf Görünüm',
      squareView: '📱 Kare İkon',
      downloadBtn: 'İndir',
      dropHereTitle: 'Orijinal Logonuzu Buraya Bırakın!',
      dropHereSub: 'Görsel tüm sitede anında güncellenecek',
      cycleTitle: 'Haftalık Doz Döngüsü',
      cycleSubtitle: 'Mounjaro 5 mg • Hafta 6',
      daysLeft: '3 Gün Kaldı',
      trackerTitle: 'İğne Doz Sayacı',
      dayNum: '4. Gün',
      lastSite: 'Son Enjeksiyon Bölgesi',
      nextRotationPrompt: 'Gelecek Doz Rotasyonu (Doku sertleşmesini önler):',
      fiberScoreTitle: 'Günlük Lif Skoru',
      fiberGoalText: '30g Hedef',
      addMeal: 'Öğün ekle:',
      fiberOption: '+3g (Yulaf & Brokoli)',
      comfortTitle: 'Mide & Sindirim Konforu:',
      comfortStatus: 'Sakin & Dengede ✨',
    },
    simulator: {
      badge: 'İnteraktif Deneyim',
      title: 'Kendi Tedavi Döngünü Simüle Et',
      subtitle:
        "İlacını ve son enjeksiyon bölgeni seç; Fibera'nın rotasyon ve lif tavsiyesini canlı gör.",
      fairyBeside: 'Lif Perisi Yanında',
      fairyGoal: 'Hedef: 25-30g Lif/Gün',
      step1Med: '1. GLP-1 İlacınızı Seçin',
      step2Dose: 'Mevcut Dozaj',
      step3Day: 'Haftalık İğne Günü',
      everyDay: 'Her',
      step4LastSite: 'Son Enjeksiyon Bölgesi',
      step5Fiber: 'Günlük Lif Tüketimi',
      fiberLow: '5g (Düşük)',
      fiberIdeal: '30g (İdeal GLP-1 Hedefi)',
      fiberHigh: '40g (Yüksek)',
      grams: 'gram',
      activeTracking: 'Aktif Takip',
      recommendedNext: 'Önerilen Gelecek Enjeksiyon Bölgesi',
      fiberBalanceLevel: 'Lif Denge Seviyesi',
      fiberWarning:
        '⚠️ Dikkat: Düşük lif alımı, GLP-1 kullanımında kabızlık riskini artırabilir. Keten tohumu, chia tohumu ve sebze porsiyonunu artırın.',
      fiberOptimal:
        '✨ Mükemmel Denge: Sindirim hızını ve tokluk hissini koruyan ideal lif seviyesindesiniz.',
      waterAdviceTitle: 'Su Hatırlatıcı',
      waterAdvicePrefix: 'Lifin sindirimi desteklemesi için bugün en az',
      waterAdviceHighlight: '2.5 Litre',
      waterAdviceSuffix: 'su tüketmeyi unutmayın.',
      algorithmTitle: 'Fibera Algoritması',
      algorithmSub: 'Uygulamada otomatik hatırlatılır',
    },
    features: {
      badge: 'Kapsamlı Sağlık Çözümü',
      title: 'GLP-1 Tedavini Bilimsel ve Konforlu Yönet',
      subtitle:
        'İlaç etkisini maksimuma çıkarırken, yaygın karşılaşılan kabızlık ve kas kaybı gibi yan etkileri önleyici özelliklerle donatıldı.',
      items: [
        {
          id: 'feature-rotation',
          badge: 'Lipohipertrofi Koruması',
          title: 'Doz & Rotasyon Takvimi',
          description:
            'Hangi hafta nereye enjeksiyon yaptığını hatırla, doku sertleşmesini önle. Enjeksiyon günlerinde bildirim al, iğne doz döngünü asla kaçırma.',
          highlights: [
            'Vücut rotasyon haritası (Karın, Uyluk, Kol)',
            'Doku sertleşmesi ve hassasiyet koruyucu algoritma',
            'Kişiselleştirilmiş iğne günü hatırlatıcıları',
          ],
        },
        {
          id: 'feature-fiber',
          badge: 'Kabızlık & Kas Koruma',
          title: 'Lif & Protein Analizi',
          description:
            'GLP-1 kullanırken kas kaybını ve kabızlığı önlemek için lif dengeni akıllıca takip et. Günlük 25-30g lif ve yeterli protein hedefine kolayca ulaş.',
          highlights: [
            'Çözünür ve çözünmez lif ayrımı',
            'Yağsız kas kütlesi için hedef protein takibi',
            'Fibera lif perisinin akıllı porsiyon önerileri',
          ],
        },
        {
          id: 'feature-symptom',
          badge: 'Doktor Uyumlu PDF Raporu',
          title: 'Semptom & Yan Etki Günlüğü',
          description:
            'Mide bulantısı veya halsizlik yaşadığın anları kaydet, doktor randevunda PDF raporu olarak sun. Yan etkilerin hangi gıdalarla tetiklendiğini anla.',
          highlights: [
            'Bulantı, reflü ve tokluk skorlaması',
            'Tek tıkla endokrinolog için klinik PDF dökümü',
            'Zaman çizelgesi ve dozaj korelasyon grafiği',
          ],
        },
        {
          id: 'feature-nutrition',
          badge: 'Yapay Zeka Destekli',
          title: 'Hafif & Şişkinliksiz Beslenme',
          description:
            'Yapay zeka ile porsiyonlarını incele, mideyi yormayan doğru besinleri seç. GLP-1 ile yavaşlayan sindirim sistemine özel, sindirimi kolay tarifleri keşfet.',
          highlights: [
            'Mide boşalımını zorlamayan akıllı menüler',
            'Gaz ve şişkinlik yapmayan lif kaynakları',
            'Yapay zeka ile anlık tabak analizi ve geri bildirimi',
          ],
        },
      ],
    },
    howItWorks: {
      badge: 'Kolay & Rehberli Kullanım',
      title: 'Fibera Nasıl Çalışır?',
      subtitle:
        'Karmaşık sağlık takipleri yerine, tedavinin her adımında sana rehberlik eden 3 basit adım.',
      steps: [
        {
          step: '01',
          title: 'İlacını ve Dozajını Seç',
          description:
            'Kullandığın GLP-1 etken maddesini (Semaglutid, Tirzepatid vb.), haftalık enjeksiyon gününü ve mevcut dozunu (0.25mg, 0.5mg, 2.5mg, 5mg...) saniyeler içinde belirle.',
          detail: 'Ozempic, Wegovy, Mounjaro, Zepbound vb. ile tam uyumlu',
        },
        {
          step: '02',
          title: 'Lif, Protein ve Semptomları Kaydet',
          description:
            'Yapay zeka asistanı Fibera ile öğünlerindeki lif ve protein miktarını zahmetsizce kaydet. Yaşadığın mide hassasiyeti veya tokluk durumunu not et.',
          detail: 'Kabızlık ve kas kaybını önleyici akıllı hedefler',
        },
        {
          step: '03',
          title: 'Rotasyon Yap ve Güvenle İlerle',
          description:
            'Her hafta enjeksiyon yapman gereken vücut bölgesini Fibera sana hatırlatsın. Doktor randevunun öncesinde tek tuşla detaylı sağlık PDF raporunu indir.',
          detail: 'Doku sertleşmesi (lipohipertrofi) riskine son',
        },
      ],
    },
    faq: {
      badge: 'Sıkça Sorulan Sorular',
      title: 'GLP-1 Tedavisi ve Fibera Hakkında Merak Edilenler',
      subtitle:
        'İğne günlerinden lif ve protein dengesine, veri gizliliğinden klinik raporlara kadar tüm temel sorularınızın yanıtları.',
      searchPlaceholder: 'Sorularda veya yanıtlarda ara (Örn: lif, rotasyon, doz)...',
      filterAll: 'Tüm Sorular',
      filterGlp1: 'GLP-1 & Enjeksiyon',
      filterNutrition: 'Beslenme & Lif',
      filterApp: 'Fibera & Güvenlik',
      expandAll: 'Tümünü Aç',
      collapseAll: 'Tümünü Kapat',
      noResultsTitle: 'Eşleşen soru bulunamadı',
      noResultsDesc: 'Arama teriminizi değiştirebilir veya doğrudan destek ekibimize sorunuzu iletebilirsiniz.',
      items: [
        {
          id: 'faq-1',
          category: 'glp1',
          question: 'GLP-1 ilaçları (Ozempic, Wegovy, Mounjaro vb.) kullanırken Fibera bana nasıl yardımcı olur?',
          answer:
            'Fibera, GLP-1 ve çift etkili GIP/GLP-1 tedavisi gören bireylerin en sık karşılaştığı iki kritik problemi çözmek üzere özel olarak geliştirilmiştir: kas kütlesi kaybını (sarkopeni) önlemek ve yavaşlayan mide motilitesine bağlı kabızlığı engellemek. Fibera ile haftalık enjeksiyon gününüzü ve dozunuzu kaçırmaz, enjeksiyon yeri rotasyonunuzu takip eder, kilonuza göre hesaplanan kişiselleştirilmiş protein ve lif hedeflerinizi anlık izleyebilirsiniz.',
        },
        {
          id: 'faq-2',
          category: 'glp1',
          question: 'Fibera bir tıbbi cihaz mıdır veya doktor reçetesi yerine geçer mi?',
          answer:
            'Hayır. Fibera kesinlikle bir tıbbi cihaz, klinik tanı aracı veya tedavi sistemi değildir; hekim teşhisi ya da reçeteli tedavi yerine geçmez. Fibera, yaşam tarzı ve semptom takip yardımcınızdır. İlaç dozajınız, başlama/artırma takviminiz ve tüm tıbbi kararlar yalnızca sizi takip eden uzman hekiminizin kontrolünde olmalıdır.',
        },
        {
          id: 'faq-3',
          category: 'nutrition',
          question: 'GLP-1 tedavisi görürken lif ve protein alımı neden bu kadar kritiktir?',
          answer:
            'GLP-1 reseptör agonistleri mide boşalmasını geciktirir ve iştahı belirgin biçimde baskılar. Porsiyonlar küçüldüğünde yeterli protein alınmazsa, verilen kilonun %20 ila %40\'ı hayati kas dokusundan gidebilir. Aynı zamanda yavaşlayan bağırsak motilitesi lif ve su eksikliğiyle birleştiğinde inatçı kabızlığa yol açabilir. Fibera, günlük en az 25–35g lif ve kilogram başına 1.2–1.6g protein almanızı kolaylaştıran özel takip ve uyarı mekanizmalarına sahiptir.',
        },
        {
          id: 'faq-4',
          category: 'glp1',
          question: 'Enjeksiyon bölgesi rotasyonu nedir ve Fibera bunu nasıl takip eder?',
          answer:
            'Haftalık enjeksiyonun sürekli aynı noktaya yapılması, deri altında sertleşmiş doku yumrularına (lipohipertrofi) ve ilacın emilim hızının bozulmasına yol açabilir. Fibera, her iğne gününüzde enjeksiyon yaptığınız bölgeyi (göbek sağ/sol, uyluklar veya kol arkası) kaydeder ve sonraki dozda farklı bir bölge seçmeniz için sizi görsel olarak yönlendirir.',
        },
        {
          id: 'faq-5',
          category: 'glp1',
          question: 'Fibera hangi ilaç ve doz türlerini destekler?',
          answer:
            'Fibera; Semaglutid (Ozempic, Wegovy, Rybelsus), Tirzepatid (Mounjaro, Zepbound), Liraglutid (Saxenda, Victoza) gibi yaygın tüm GLP-1 ve GIP/GLP-1 ilaçlarını destekler. 0.25 mg\'dan 15 mg\'a kadar tüm standart titrasyon adımları ve hekiminizin önerdiği özel ara dozlar kolayca tanımlanabilir.',
        },
        {
          id: 'faq-6',
          category: 'app',
          question: 'Doktor veya diyetisyen kontrollerimde Fibera verilerini nasıl kullanabilirim?',
          answer:
            'Fibera\'nın tek dokunuşla oluşturulan klinik PDF raporu sayesinde; son haftalardaki doz titrasyon geçmişinizi, kilo eğrinizi, haftalık ortalama protein/lif hedeflerine uyum oranınızı ve kaydettiğiniz sindirim notlarını doktorunuz veya diyetisyeninizle doğrudan e-posta veya çıktı olarak paylaşabilirsiniz.',
        },
        {
          id: 'faq-7',
          category: 'app',
          question: 'Kişisel sağlık verilerim ve gizliliğim nasıl korunuyor?',
          answer:
            'Fibera, Google Play Store Kullanıcı Verileri ve KVKK/GDPR standartlarına harfiyen uyar. Uygulama içerisinde hiçbir üçüncü taraf reklam SDK\'sı veya veri simsar ağı bulunmaz. Verileriniz aktarım sırasında TLS 1.3 şifreleme ile güvenli sunucu ve veritabanı altyapısında korunur. Ayrıca dilediğiniz an tek bir tıkla tüm verilerinizi ve hesabınızı kalıcı olarak silebilirsiniz.',
        },
        {
          id: 'faq-8',
          category: 'nutrition',
          question: 'Fibera\'yı kullanmak için akıllı tartı veya giyilebilir cihaz şart mı?',
          answer:
            'Hayır, kesinlikle şart değildir. Fibera, harici cihazlara veya karmaşık kurulumlara bağımlı olmadan bağımsız (standalone) çalışacak şekilde tasarlanmıştır. Kilonuzu, günlük öğünlerinizi ve enjeksiyon verilerinizi uygulama içerisinden birkaç saniyede kolayca manuel olarak girebilir ve anında takip edebilirsiniz.',
        },
      ],
      supportBox: {
        title: 'Başka bir sorunuz veya öneriniz mi var?',
        description: 'Ekibimiz size yardımcı olmaktan mutluluk duyar. Destek formumuz üzerinden 24 saat içinde yanıt alabilirsiniz.',
        cta: 'Destek Ekibine Yazın',
      },
    },
    medicalDisclaimer: {
      badge: 'Önemli Tıbbi Bilgilendirme ve Sorumluluk Reddi',
      title: 'Tıbbi Sorumluluk Reddi',
      description:
        'Fibera bir tıbbi cihaz veya sağlık kuruluşu değildir. Uygulama tıbbi tanı, teşhis, tedavi veya klinik karar desteği sağlamaz. Uygulama içeriği ve araçları (dozaj takibi, kilo takibi, makro takibi, kilo-doz değişim analizi) yalnızca kişisel takip, kayıt ve bilgilendirme amaçlıdır. Fibera\'da yer alan hiçbir veri, bildirim veya analitik çıktı hekim, eczacı veya yetkili bir sağlık uzmanının tavsiyesi yerine geçmez. İlaç kullanımı, doz artırımı/azaltımı, enjeksiyon zamanlaması veya diyet değişiklikleri konusunda mutlaka sizi takip eden uzman hekiminize danışınız. Acil bir sağlık sorununuz varsa derhal tıbbi yardım alınız.',
      safetyBadge: 'Sağlık Güvenliği',
    },
    supportAndDeletion: {
      badge: 'Kullanıcı İletişimi & Veri Kontrolü',
      title: 'Etkileşimli Destek ve Hesap İşlemleri',
      subtitle:
        'Öneri ve sorularını ekibimize ilet veya Google Play standartlarına uygun şekilde verilerini kolayca yönet.',
      tabFeedback: 'İstek & Geri Bildirim',
      tabDeletion: 'Hesap Silme Talebi',
      feedback: {
        heading: "Görüşlerin Fibera'yı Geliştiriyor",
        subheading:
          'Uygulamada görmek istediğin bir özellik veya bize iletmek istediğin bir öneri mi var? Ekibimiz 24 saat içinde yanıtlar.',
        nameLabel: 'Ad Soyad',
        nameOptional: '(Opsiyonel)',
        namePlaceholder: 'Örn: Ayşe Yılmaz',
        emailLabel: 'E-posta Adresi',
        emailPlaceholder: 'ornek@eposta.com',
        categoryLabel: 'Konu / Kategori',
        categories: {
          feature: 'Öneri / İstek (Yeni Özellik Talebi)',
          bug: 'Hata Bildirimi (Bug / Takılma)',
          general: 'Genel Soru & Bilgi Talebi',
        },
        messageLabel: 'Mesajınız',
        messagePlaceholder:
          'Uygulamada deneyimlediğiniz durumu, önerinizi veya sorunuzu lütfen detaylıca açıklayınız...',
        submitBtn: 'Gönder',
        submitting: 'İletiliyor...',
        successTitle: 'Talebiniz ekibimize iletildi!',
        successMessage:
          'Fibera destek ekibi (support@fibera.xyz) geri bildiriminizi inceleyecek ve gerekirse kayıtlı e-posta adresiniz üzerinden sizinle iletişime geçecektir.',
        resetBtn: 'Yeni Bir Mesaj Gönder',
        errorEmail: 'Lütfen geçerli bir e-posta adresi giriniz (ör. ad@alanadi.com).',
        errorMessage: 'Mesajınız en az 10 karakter olmalıdır.',
      },
      deletion: {
        bannerTitle: 'Google Play & KVKK / GDPR Veri Güvenliği Standardı',
        bannerDescription:
          'Google Play politikalarına uygun olarak hesabınızı ve tüm geçmiş sağlık kayıtlarınızı (ilaç geçmişi, enjeksiyon logları, kilo ve makro kayıtları) kalıcı olarak silebilirsiniz. Silinen veriler güvenli sunucu ve veritabanlarımızdan geri döndürülemez biçimde yok edilir.',
        emailLabel: 'Uygulamaya Kayıtlı E-posta Adresi',
        emailPlaceholder: 'ornek@eposta.com',
        reasonLabel: 'Silme Sebebi',
        reasonOptional: '(Opsiyonel)',
        reasons: {
          stoppedMed: 'Artık ilacı kullanmıyorum',
          otherApp: 'Başka bir uygulama tercih ediyorum',
          privacyConcerns: 'Gizlilik endişeleri',
          other: 'Diğer',
        },
        checkboxLabel:
          'Hesabımın, ilaç geçmişimin, kilo ve makro kayıtlarımın kalıcı olarak silineceğini ve bu işlemin geri alınamayacağını onaylıyorum.',
        submitBtn: 'Hesabımı Silme Talebi Gönder',
        submitting: 'Silme Talebi İşleniyor...',
        successTitle: 'Hesap silme talebiniz alındı.',
        successMessage:
          'Silme talebiniz onaylandığında; profiliniz, ilaç geçmişiniz, kilo ve makro kayıtlarınız güvenli sunucu ve veritabanlarımızdan geri döndürülemez biçimde silinir. 24 saat içinde doğrulama e-postası alacaksınız.',
        resetBtn: 'Formu Sıfırla',
        errorEmail: 'Lütfen uygulamaya kayıtlı geçerli bir e-posta adresi giriniz.',
        errorConfirmed: 'Devam etmek için verilerinizin kalıcı olarak silineceğini onaylamalısınız.',
      },
    },
    footer: {
      tagline:
        'Ozempic, Wegovy, Mounjaro gibi GLP-1 tedavisi görenler için doz hatırlatma, enjeksiyon rotasyonu ve lif/protein dengesi asistanı.',
      supportTitle: 'Resmi Destek:',
      quickLinksTitle: 'Uygulama',
      featuresLink: 'Temel Özellikler',
      howItWorksLink: 'Nasıl Çalışır?',
      supportLink: 'İstek ve Geri Bildirim',
      deletionLink: 'Hesap Silme Talebi',
      logoPackLink: 'Logo & Maskot Paketi (.SVG)',
      legalTitle: 'Yasal & Güvenlik',
      privacyLink: 'Gizlilik Politikası (Privacy Policy)',
      termsLink: 'Kullanım Koşulları (Terms of Service)',
      deletionPolicyLink: 'Hesap Silme ve Veri Saklama',
      complianceNote:
        'Google Play Sağlık Politikası, KVKK ve GDPR veri güvenliği standartlarına tam uyumludur. Sağlık verileriniz reklam şirketlerine aktarılmaz.',
      copyright: '© 2026 Fibera. Geliştirici: zegasega. Tüm hakları saklıdır.',
      designedWith: 'GLP-1 yolculuğunda',
      fairyEnding: 've Lif Perisi ile tasarlandı.',
      developerInfo: 'Bireysel Geliştirici: zegasega | İletişim: support@fibera.xyz',
    },
    downloadModal: {
      title: 'Fibera Uygulamasını İndirin',
      subtitle: 'iOS ve Android için kapalı beta ve erken erişim sürümümüz yayında!',
      androidTitle: 'Android İçin İndir',
      androidBadge: 'Google Play Erken Erişim',
      iosTitle: 'iOS İçin İndir',
      iosBadge: 'App Store Yakında',
      notifyLabel: 'Genel sürüm yayınlandığında bildirim al:',
      emailPlaceholder: 'eposta@adresiniz.com',
      notifyBtn: 'Haberdar Et',
      successTitle: 'Harika, kaydınız alındı!',
      successSub: 'Yeni sürüm mağazalarda genel kullanıma açıldığında size haber vereceğiz.',
    },
    logoModal: {
      badge: 'Fibera Orijinal Logo ve Maskot',
      title: 'Fibera Logo Merkezi',
      subtitle:
        'Paylaştığınız orijinal logonuzu doğrudan sitede kullanabilir, indirebilir veya orijinal PNG dosyanızı tek tıkla yükleyebilirsiniz.',
      squareTitle: 'Kare Uygulama İkonu',
      squareDesc: 'Google Play & App Store uyumlu beyaz çerçeveli, camgöbeği degrade zeminli tam logo.',
      downloadSquare: 'İkonu İndir',
      transparentTitle: 'Şeffaf Maskot & Banner',
      transparentDesc: 'Arka plansız şeffaf (transparent) zemin üzerinde GLP kalbi ve Fibera kurdelesi.',
      downloadTransparent: 'Şeffaf Maskotu İndir (.SVG)',
      uploadTitle: 'Orijinal PNG / JPG Dosyanızı Yükleyin',
      uploadDesc: 'Elinizdeki orijinal logo görselini seçerek sitedeki tüm alanlarda kendi dosyanızı görüntüleyebilirsiniz.',
      chooseFile: 'Dosya Seç...',
      resetDefaultTooltip: 'Varsayılan Vektör Logoya Dön',
      vectorQualityNote: 'Vektörel SVG ikonlar tüm ekran boyutlarında ve mobil mockup cihazında sıfır kalite kaybıyla net kalır.',
      uploadSuccess: 'Özel logo görseliniz başarıyla yüklendi ve tüm sitede güncellendi!',
      resetSuccess: 'Varsayılan vektör logo şablonuna dönüldü.',
    },
    legal: {
      closeBtn: 'Kapat',
      updatedDate: 'Son Güncelleme: 24 Eylül 2026',
      complianceBadge: 'Google Play Sağlık Politikası & KVKK / GDPR Uyumlu Metin',
      tabs: {
        privacy: 'Gizlilik Politikası',
        terms: 'Kullanım Koşulları',
        deletion: 'Hesap Silme Politikası',
      },
      privacy: {
        title: 'Gizlilik Politikası (Privacy Policy)',
        lastUpdated: 'Son Güncelleme: 24 Eylül 2026',
        intro:
          'Bu Gizlilik Politikası, bireysel geliştirici zegasega ("Geliştirici", "biz", "bize" veya "bizim") tarafından geliştirilen Fibera mobil uygulamasının ("Uygulama") kullanıcılarına ("Kullanıcı" veya "siz") ait bilgilerin nasıl toplandığını, kullanıldığını, saklandığını ve korunduğunu açıklamaktadır.',
        agreement:
          "Fibera'yı indirerek, erişerek veya kullanarak bu Gizlilik Politikası'nda açıklanan uygulamaları kabul etmiş sayılırsınız.",
        summaryNote:
          'Fibera, kullanıcılarının sağlık verilerini asla üçüncü taraf reklam ağlarıyla paylaşmaz, hedefli reklamcılık amacıyla işlemez ve veri simsarlarına (data brokers) satmaz. Tüm veriler güvenli bulut sunucu ve şifrelenmiş veritabanı altyapısında saklanır.',
        sections: [
          {
            number: '1',
            title: 'Tıbbi Sorumluluk Reddi (Important Medical Disclaimer)',
            content: [
              'FIBERA BİR TIBBİ CİHAZ VEYA SAĞLIK KURULUŞU DEĞİLDİR. UYGULAMA TIBBİ TANI, TEŞHİS, TEDAVİ VEYA KLİNİK KARAR DESTEĞİ SAĞLAMAZ.',
              'Uygulama içeriği ve araçları (dozaj takibi, kilo takibi, makro takibi, kilo-doz değişim analizi) yalnızca kişisel takip, kayıt ve bilgilendirme amaçlıdır.',
              'Fibera\'da yer alan hiçbir veri, bildirim veya analitik çıktı hekim, eczacı veya yetkili bir sağlık uzmanının tavsiyesi yerine geçmez.',
              'İlaç kullanımı, doz artırımı/azaltımı, enjeksiyon zamanlaması veya diyet değişiklikleri konusunda mutlaka sizi takip eden uzman hekiminize danışınız. Acil bir sağlık sorununuz varsa derhal tıbbi yardım alınız.',
            ],
          },
          {
            number: '2',
            title: 'Toplanan Veriler',
            content: [
              'Fibera, temel takip işlevlerini eksiksiz yerine getirebilmek adına aşağıdaki veri kategorilerini işler:',
              'a) Hesap ve Kimlik Bilgileri: E-posta adresi (hesap oluşturma, doğrulama ve veri eşitleme için), Hesap kimlik tanımlayıcısı (User ID).',
              'b) Sağlık, Beslenme ve Biyometrik Takip Verileri: İlaç ve Doz Takibi (Kullanılan GLP-1 ilacının adı, enjeksiyon dozu, tarihi, saati ve enjeksiyon geçmişi); Vücut Ölçümleri (Kilo kayıtları, hedef kilo ve kilo-doz değişim/hız eğrileri); Beslenme ve Makro Takibi (Günlük kalori, protein, karbonhidrat, yağ ve su tüketim kayıtları).',
              'c) Cihaz ve Teknik Kullanım Verileri: Cihaz modeli, işletim sistemi sürümü, uygulama versiyonu; Anonimleştirilmiş performans, çökme ve hata logları.',
              'd) Satın Alma Bilgileri: Fibera, freemium iş modeliyle çalışır ve isteğe bağlı ücretli premium abonelik seçenekleri sunar. Kredi kartı veya ödeme bilgileriniz tarafımızca toplanmaz veya saklanmaz. Tüm ödeme işlemleri doğrudan Google Play Store In-App Billing altyapısı üzerinden yürütülür.',
            ],
          },
          {
            number: '3',
            title: 'Verilerin Kullanım Amaçları',
            content: [
              'Toplanan veriler yalnızca şu amaçlarla sınırlı olarak işlenir:',
              '• İlaç ve enjeksiyon zamanı hatırlatıcılarını oluşturmak.',
              '• Kilo, makro ve doz korelasyon grafiklerini sizin için görselleştirmek.',
              '• Verilerinizin cihazlar arası senkronizasyonunu sağlamak.',
              '• Uygulamanın teknik kararlılığını korumak ve hata ayıklama süreçlerini yürütmek.',
              'Google Play Sağlık Politikası Güvencesi: Sağlık ve takip verileriniz asla üçüncü taraf reklam ağlarıyla paylaşılmaz, hedefli reklamcılık amacıyla işlenmez ve veri simsarlarına (data brokers) satılmaz.',
            ],
          },
          {
            number: '4',
            title: 'Veri Güvenliği ve Barındırma',
            content: [
              'Aktarım Sırasında Güvenlik (In-Transit): Uygulama ile sunucu arasındaki tüm veri transferi endüstri standardı HTTPS / TLS 1.3 protokolleri ile şifrelenir.',
              'Bekleme Sırasında Güvenlik (At-Rest): Kişisel ve sağlık verileriniz güvenli sunucu ve veritabanı altyapısında, modern şifreleme algoritmaları kullanılarak saklanır.',
              'Veritabanı ve API erişimleri sıkı kimlik doğrulama ve yetkilendirme kurallarına tabidir.',
            ],
          },
          {
            number: '5',
            title: 'Veri Paylaşımı ve Üçüncü Taraflar',
            content: [
              'Fibera\'da hiçbir reklam ağı veya izleme amaçlı pazarlama SDK\'sı bulunmamaktadır. Verileriniz yalnızca teknik altyapı sağlayıcılarımızla sınırlı olarak paylaşılır:',
              '• Güvenli Sunucu & Veritabanı Sistemleri: Şifreli veri depolama, güvenli API yönlendirme ve sunucu altyapısı.',
              '• Google Play: Abonelik yönetimi ve lisans doğrulama.',
              'Yasal bir zorunluluk (mahkeme kararı veya yetkili idari talep) bulunmadığı müddetçe verileriniz harici taraflara devredilmez.',
            ],
          },
          {
            number: '6',
            title: 'Hesap Silme ve Veri Saklama (Account Deletion)',
            content: [
              'Google Play politikalarına ve veri koruma kanunlarına uygun olarak, verileriniz üzerinde tam denetim hakkınız bulunmaktadır:',
              '• Uygulama İçi Silme: Uygulama içi Ayarlar > Hesap > Hesabımı Sil adımlarını takip ederek hesabınızı ve tüm geçmiş sağlık kayıtlarınızı anında kalıcı olarak silebilirsiniz.',
              '• Web Üzerinden Silme: Uygulama cihazınızda yüklü olmasa bile, support@fibera.xyz adresine kayıtlı e-posta adresinizden talepte bulunarak veya resmi web sitemizin veri silme sayfasından hesap kapatma işlemi başlatabilirsiniz.',
              '• Silme Süreci: Silme talebiniz onaylandığında; profiliniz, ilaç geçmişiniz, kilo ve makro kayıtlarınız sunucu ve veritabanlarımızdan geri döndürülemez biçimde silinir.',
            ],
          },
          {
            number: '7',
            title: 'Çocukların Gizliliği',
            content: [
              'Fibera, 18 yaşın altındaki bireylerin doğrudan kullanımına yönelik tasarlanmamıştır. 18 yaşından küçük bir bireye ait verilerin tarafımıza iletildiğini fark etmemiz halinde söz konusu kayıtlar derhal sistemden kaldırılır.',
            ],
          },
          {
            number: '8',
            title: 'İletişim',
            content: [
              'Gizlilik Politikamız veya veri haklarınızla ilgili her türlü soru, geri bildirim veya silme talebiniz için:',
              'Geliştirici: zegasega',
              'E-posta: support@fibera.xyz',
              'Uygulama: Fibera',
            ],
          },
        ],
      },
      terms: {
        title: 'Kullanım Koşulları (Terms of Service)',
        lastUpdated: 'Son Güncelleme: 24 Eylül 2026',
        intro:
          'Bu Kullanım Koşulları, Fibera uygulamasının kullanım şartlarını belirler. Uygulamayı kullanarak bu şartları kabul etmiş olursunuz.',
        medicalWarning:
          'Tıbbi Sorumluluk Hatırlatması: Fibera hekim kontrolünün, reçeteli tedavi protokollerinin veya tıbbi teşhisin yerini tutmaz.',
        sections: [
          {
            number: '1',
            title: 'Tıbbi Tavsiye Niteliği Taşımaması',
            content: [
              'Fibera yalnızca kişisel bir yaşam tarzı ve takip aracıdır. Doz miktarı, enjeksiyon aralığı, beslenme veya diyetle ilgili kararlar tamamen kullanıcının ve kullanıcının hekiminin sorumluluğundadır.',
              'Uygulama geliştiricisi, girilen verilerin hatalı kullanımından veya tıbbi ihmallerden sorumlu tutulamaz.',
            ],
          },
          {
            number: '2',
            title: 'Kullanıcı Hesabı ve Güvenliği',
            content: [
              'Hesap giriş bilgilerinizin gizliliğini korumak sizin sorumluluğunuzdadır. Hesabınız altında gerçekleşen işlemlerden siz sorumlu sayılırsınız.',
            ],
          },
          {
            number: '3',
            title: 'Abonelikler ve Faturalandırma',
            content: [
              'Fibera freemium modelde çalışır. Temel özellikler ücretsiz sunulabilirken, ileri düzey analizler premium abonelik gerektirebilir.',
              'Abonelikler Google Play Store üzerinden satın alınır ve yönetilir.',
              'İptal edilmediği sürece abonelikler dönem sonunda Google Play tarafından otomatik olarak yenilenir. İptal ve iade talepleri doğrudan Google Play abonelik yönetim merkezi üzerinden yürütülür.',
            ],
          },
          {
            number: '4',
            title: 'Fikri Mülkiyet',
            content: [
              "Fibera'nın arayüz tasarımı, logosu, kod tabanı ve metrik hesaplama algoritmaları geliştirici zegasega'ya aittir; kopyalanamaz veya yetkisiz çoğaltılamaz.",
            ],
          },
          {
            number: '5',
            title: 'Değişiklikler ve Fesih',
            content: [
              'Geliştirici, bu koşulları ve gizlilik politikasını güncelleme hakkını saklı tutar. Uygulamanın kötüye kullanılması durumunda kullanıcının erişimi sonlandırılabilir.',
            ],
          },
        ],
      },
      deletion: {
        title: 'Hesap Silme ve Veri Saklama Politikası (Account Deletion)',
        lastUpdated: 'Son Güncelleme: 24 Eylül 2026',
        badge: 'Google Play Store Veri Güvenliği ve Kullanıcı Kontrolü',
        sections: [
          {
            number: '1',
            title: 'Hesabınızı ve Verilerinizi Silme Hakkı',
            content: [
              'Google Play Kullanıcı Verileri Politikası doğrultusunda, Fibera hesabınızı ve bu hesaba bağlı tüm kişisel/sağlık verilerinizi dilediğiniz an kalıcı olarak silebilirsiniz.',
              'Silinen veriler hiçbir şekilde yedeklerde tutulmaz veya kurtarılamaz.',
            ],
          },
          {
            number: '2',
            title: 'Silme Seçenekleri',
            content: [
              'a) Uygulama İçi Silme: Uygulamayı açın > Ayarlar > Hesap > Hesabımı Sil adımlarını takip edin. Onayınız ile tüm verileriniz anında silinir.',
              'b) Web Sitemiz Üzerinden: Web sayfamızdaki "Hesap Silme Talebi" formunu doldurarak anında silme talebi oluşturabilirsiniz.',
              'c) E-posta ile Talep: Uygulamaya kayıtlı e-posta adresinizden support@fibera.xyz adresine "Hesap Silme Talebi" konulu e-posta göndererek silme sürecini başlatabilirsiniz.',
            ],
          },
          {
            number: '3',
            title: 'Hangi Veriler Tamamen Silinir?',
            content: [
              '• Hesap Kimliği ve E-posta adresi',
              '• Tüm haftalık enjeksiyon geçmişi ve bölge rotasyon kayıtları',
              '• Kilo, vücut ölçümü ve doz-hız korelasyon verileri',
              '• Beslenme, lif, protein, kalori ve su tüketim kayıtları',
              '• Belirtilen semptom ve sağlık takip notları',
              'Tüm veriler güvenli sunucularımızdan ve veritabanlarımızdan geri döndürülemez biçimde temizlenir.',
            ],
          },
          {
            number: '4',
            title: 'İşlem Süresi ve Doğrulama',
            content: [
              'Web veya e-posta yoluyla yapılan taleplerde kullanıcının güvenliği için teyit e-postası iletilir ve doğrulama sonrası en geç 24-48 saat içinde veritabanı temizliği tamamlanır.',
            ],
          },
        ],
      },
    },
  },
  en: {
    nav: {
      features: 'Features',
      howItWorks: 'How It Works',
      support: 'Support & Feedback',
      deleteAccount: 'Delete Account',
      downloadApp: 'Download App',
      logoPack: 'Logo Pack',
      categoryBadge: 'GLP-1 Companion',
      langSwitchLabel: 'Switch Language',
    },
    hero: {
      badge: 'First Smart Companion Specially Designed for GLP-1 Therapy',
      title1: 'A New Era in Your GLP-1 Journey:',
      titleHighlight: 'Dose, Fiber & Balance',
      title2: 'in Your Pocket.',
      subtitle:
        'Never miss injection days, master injection rotation. Keep side effects under control with balanced fiber and protein, and reach your goals with confidence alongside your AI companion.',
      googlePlay: 'GET IT ON',
      googlePlayAction: 'GOOGLE PLAY',
      appStore: 'DOWNLOAD ON THE',
      appStoreAction: 'APP STORE',
      soon: 'Soon',
      trustPrivacy: 'User Privacy First',
      trustHealthData: 'Encrypted Health Data Tracking',
      trustMeds: 'Compatible with Ozempic® • Wegovy® • Mounjaro® • Zepbound®',
      fairySays: 'Fibera Fairy Says:',
      fairyQuote: '"You reached your fiber goal today! Injection day in 3 days."',
      dragDropPrompt:
        'You can drag your original Photoroom.png logo file directly onto the mascot or click the button to select it.',
      uploadLogoBtn: 'Upload / Select Your Logo',
      activeCustomLogo: 'Your Custom Logo Active (Change)',
      transparentView: '🌱 Transparent View',
      squareView: '📱 App Icon View',
      downloadBtn: 'Download',
      dropHereTitle: 'Drop Your Logo File Here!',
      dropHereSub: 'Visual will update immediately across the entire site',
      cycleTitle: 'Weekly Dose Cycle',
      cycleSubtitle: 'Mounjaro 5 mg • Week 6',
      daysLeft: '3 Days Left',
      trackerTitle: 'Injection Dose Tracker',
      dayNum: 'Day 4',
      lastSite: 'Last Injection Site',
      nextRotationPrompt: 'Upcoming Rotation (Prevents tissue scarring):',
      fiberScoreTitle: 'Daily Fiber Score',
      fiberGoalText: '30g Target',
      addMeal: 'Add meal:',
      fiberOption: '+3g (Oats & Broccoli)',
      comfortTitle: 'Digestion & Stomach Comfort:',
      comfortStatus: 'Calm & Balanced ✨',
    },
    simulator: {
      badge: 'Interactive Experience',
      title: 'Simulate Your Own Treatment Cycle',
      subtitle:
        'Select your medication and last injection site to see Fibera’s live rotation and fiber recommendations.',
      fairyBeside: 'Fiber Fairy by Your Side',
      fairyGoal: 'Goal: 25-30g Fiber/Day',
      step1Med: '1. Select Your GLP-1 Medication',
      step2Dose: 'Current Dosage',
      step3Day: 'Weekly Injection Day',
      everyDay: 'Every',
      step4LastSite: 'Last Injection Site',
      step5Fiber: 'Daily Fiber Intake',
      fiberLow: '5g (Low)',
      fiberIdeal: '30g (Ideal GLP-1 Goal)',
      fiberHigh: '40g (High)',
      grams: 'grams',
      activeTracking: 'Active Tracking',
      recommendedNext: 'Recommended Next Injection Site',
      fiberBalanceLevel: 'Fiber Balance Level',
      fiberWarning:
        '⚠️ Warning: Low fiber can exacerbate constipation during GLP-1 use. Increase portions of flaxseed, chia seeds, and leafy greens.',
      fiberOptimal:
        '✨ Optimal Balance: You are at the ideal fiber level supporting digestion and prolonged satiety.',
      waterAdviceTitle: 'Hydration Reminder',
      waterAdvicePrefix: 'To support dietary fiber function, remember to drink at least',
      waterAdviceHighlight: '2.5 Liters',
      waterAdviceSuffix: 'of water today.',
      algorithmTitle: 'Fibera Algorithm',
      algorithmSub: 'Automated reminders in the mobile app',
    },
    features: {
      badge: 'Comprehensive Health Solution',
      title: 'Manage Your GLP-1 Treatment Scientifically & Comfortably',
      subtitle:
        'Engineered to maximize therapeutic efficacy while proactively mitigating common side effects like constipation and muscle loss.',
      items: [
        {
          id: 'feature-rotation',
          badge: 'Lipohypertrophy Protection',
          title: 'Dose & Rotation Calendar',
          description:
            'Track which site was injected each week to prevent subcutaneous tissue hardening. Receive timely notifications on injection days and never miss a dose.',
          highlights: [
            'Full body rotation map (Abdomen, Thigh, Arm)',
            'Tissue hardening & tenderness prevention algorithm',
            'Personalized weekly injection day reminders',
          ],
        },
        {
          id: 'feature-fiber',
          badge: 'Constipation & Muscle Shield',
          title: 'Fiber & Protein Analytics',
          description:
            'Intelligently monitor your fiber and protein balance to protect lean muscle mass and digestive motility during GLP-1 use. Hit 25-30g of daily fiber effortlessly.',
          highlights: [
            'Soluble and insoluble fiber breakdown',
            'Target protein monitoring for muscle retention',
            'Smart portion guidance from Fibera Fairy',
          ],
        },
        {
          id: 'feature-symptom',
          badge: 'Doctor-Ready PDF Reports',
          title: 'Symptom & Side Effect Log',
          description:
            'Log moments of nausea, fatigue, or satiety. Export an organized clinical PDF report for your endocrinologist appointments to analyze food-symptom correlations.',
          highlights: [
            'Nausea, reflux, and fullness scoring',
            'One-tap clinical PDF export for your physician',
            'Timeline & dosage correlation visualization',
          ],
        },
        {
          id: 'feature-nutrition',
          badge: 'AI-Powered Insights',
          title: 'Light & Bloat-Free Nutrition',
          description:
            'Analyze meal portions with AI and choose gentle foods that respect delayed gastric emptying without causing reflux or bloating.',
          highlights: [
            'Smart menus tailored for slower digestion',
            'Non-gas-producing soluble fiber sources',
            'Real-time plate analysis & feedback',
          ],
        },
      ],
    },
    howItWorks: {
      badge: 'Simple & Guided Workflow',
      title: 'How Does Fibera Work?',
      subtitle:
        'Instead of overwhelming health spreadsheets, 3 intuitive steps that guide you throughout your treatment.',
      steps: [
        {
          step: '01',
          title: 'Select Medication & Dosage',
          description:
            'Pick your active GLP-1 medication (Semaglutide, Tirzepatide, etc.), scheduled injection weekday, and starting dose in seconds.',
          detail: 'Full support for Ozempic, Wegovy, Mounjaro, Zepbound, and more',
        },
        {
          step: '02',
          title: 'Log Fiber, Protein & Symptoms',
          description:
            'Effortlessly record your macronutrients and fiber with Fibera. Note down any stomach sensitivity or digestive sensations.',
          detail: 'Tailored targets preventing constipation and muscle loss',
        },
        {
          step: '03',
          title: 'Rotate Injection Sites Safely',
          description:
            "Let Fibera guide your rotation site each week. Before your next doctor's appointment, export your comprehensive clinical PDF report in one tap.",
          detail: 'Eliminates the risk of subcutaneous tissue hardening',
        },
      ],
    },
    faq: {
      badge: 'Frequently Asked Questions',
      title: 'Common Questions About GLP-1 & Fibera',
      subtitle:
        'From titration timelines and dietary fiber balance to clinical reports and data privacy, everything you need to know.',
      searchPlaceholder: 'Search questions or answers (e.g., fiber, rotation, dose)...',
      filterAll: 'All Questions',
      filterGlp1: 'GLP-1 & Injections',
      filterNutrition: 'Nutrition & Fiber',
      filterApp: 'Fibera & Security',
      expandAll: 'Expand All',
      collapseAll: 'Collapse All',
      noResultsTitle: 'No matching questions found',
      noResultsDesc: 'Try adjusting your search terms or reach out to our dedicated support team directly.',
      items: [
        {
          id: 'faq-1',
          category: 'glp1',
          question: 'How does Fibera support my GLP-1 medication journey (Ozempic, Wegovy, Mounjaro, etc.)?',
          answer:
            'Fibera is purpose-built to solve the two most critical complications during GLP-1 (Semaglutide) and dual GIP/GLP-1 (Tirzepatide) treatments: lean muscle mass reduction (sarcopenia) and gastrointestinal slowdown causing severe constipation. Fibera tracks your weekly injection day and dosage, guides your injection site rotation to prevent subcutaneous lipohypertrophy, and dynamically monitors personalized protein and fiber targets tailored to your weight.',
        },
        {
          id: 'faq-2',
          category: 'glp1',
          question: 'Is Fibera a medical device or a replacement for my doctor’s advice?',
          answer:
            'No. Fibera is strictly a lifestyle companion, symptom log, and nutrition monitoring tool. It is not a certified medical device, does not provide clinical diagnoses, and never replaces professional healthcare consultations. All prescription choices, dose escalations, and medical decisions remain strictly between you and your supervising physician.',
        },
        {
          id: 'faq-3',
          category: 'nutrition',
          question: 'Why are protein and dietary fiber intake so crucial during GLP-1 therapy?',
          answer:
            'GLP-1 medications deliberately delay gastric emptying and curb appetite. If overall food intake drops without intentional macronutrient balance, up to 20–40% of lost weight can come from lean muscle rather than fat. Simultaneously, reduced intestinal motility combined with low fiber and fluid intake causes severe constipation. Fibera empowers you to hit optimal targets (typically 25–35g fiber and 1.2–1.6g protein per kg) to safeguard muscle mass and gastrointestinal comfort.',
        },
        {
          id: 'faq-4',
          category: 'glp1',
          question: 'What is injection site rotation and how does Fibera manage it?',
          answer:
            'Injecting repeatedly into the exact same subcutaneous spot can cause local tissue swelling, hardening, or scar tissue (lipohypertrophy), which hinders consistent drug absorption. Fibera visually maps your injection sites (abdomen quadrants, outer thighs, upper arms) and prompts you to rotate to a rested site on every injection cycle.',
        },
        {
          id: 'faq-5',
          category: 'glp1',
          question: 'Which GLP-1 and dual GIP/GLP-1 medications are supported?',
          answer:
            'Fibera supports all widely prescribed incretin therapeutics, including Semaglutide (Ozempic, Wegovy, Rybelsus), Tirzepatide (Mounjaro, Zepbound), and Liraglutide (Saxenda, Victoza). Standard titration dosage milestones (from 0.25 mg up to 15.0 mg) as well as custom micro-dosing prescribed by your physician are fully configurable.',
        },
        {
          id: 'faq-6',
          category: 'app',
          question: 'How can I share my progress with my endocrinologist or dietitian?',
          answer:
            'Using Fibera’s "Clinical PDF Export" feature, your weekly titration logs, weight curve, macronutrient compliance rates, and digestive notes are compiled into a comprehensive clinical summary in one tap. You can effortlessly print or email this document directly to your physician or healthcare team.',
        },
        {
          id: 'faq-7',
          category: 'app',
          question: 'How is my personal health data secured and protected?',
          answer:
            'Completely. Fibera operates in strict adherence to Google Play Store User Data policies and GDPR privacy frameworks. We do not integrate third-party ad networks, marketing trackers, or data brokers. Your sensitive metrics are protected in transit via TLS 1.3 encryption on secure server and database infrastructure, and you can permanently delete your account and entire dataset at any time.',
        },
        {
          id: 'faq-8',
          category: 'nutrition',
          question: 'Do I need a smart scale or connected wearable to use Fibera?',
          answer:
            'No, absolutely not. Fibera is designed to work completely standalone without requiring any connected wearables, smart scales, or complex setups. You can effortlessly log your weight, daily meals, and injection records manually in just a few seconds.',
        },
      ],
      supportBox: {
        title: 'Have another question or feature request?',
        description: 'Our team is here to assist you. Submit an inquiry through our support form and receive a reply within 24 hours.',
        cta: 'Contact Support Team',
      },
    },
    medicalDisclaimer: {
      badge: 'Important Medical Disclaimer',
      title: 'Important Medical Disclaimer',
      description:
        'Fibera is not a medical device or healthcare institution. The application does not provide medical diagnosis, treatment, or clinical decision support. The content and tools (dosage tracking, weight tracking, macro tracking, dose-weight change analysis) are strictly for personal tracking, record-keeping, and informational purposes. None of the data, notifications, or analytical outputs in Fibera replace the advice of a physician, pharmacist, or qualified healthcare professional. Always consult your healthcare provider regarding medication use, dose adjustments, injection timing, or dietary changes. Seek immediate medical attention in case of a medical emergency.',
      safetyBadge: 'Health Safety',
    },
    supportAndDeletion: {
      badge: 'User Communication & Data Control',
      title: 'Interactive Support & Account Operations',
      subtitle:
        'Send suggestions or questions to our team, or easily manage your personal data in full compliance with Google Play standards.',
      tabFeedback: 'Requests & Feedback',
      tabDeletion: 'Account Deletion Request',
      feedback: {
        heading: 'Your Voice Shapes Fibera',
        subheading:
          'Is there a feature you would love to see or a suggestion you wish to share? Our team responds within 24 hours.',
        nameLabel: 'Full Name',
        nameOptional: '(Optional)',
        namePlaceholder: 'e.g., Jane Doe',
        emailLabel: 'Email Address',
        emailPlaceholder: 'name@domain.com',
        categoryLabel: 'Subject / Category',
        categories: {
          feature: 'Suggestion / Feature Request',
          bug: 'Bug Report / App Glitch',
          general: 'General Question & Inquiries',
        },
        messageLabel: 'Your Message',
        messagePlaceholder:
          'Please describe your experience, suggestion, or question in detail...',
        submitBtn: 'Send Message',
        submitting: 'Submitting...',
        successTitle: 'Your message has been received!',
        successMessage:
          'The Fibera support team (support@fibera.xyz) will review your note and contact you via your registered email if follow-up is needed.',
        resetBtn: 'Send Another Message',
        errorEmail: 'Please enter a valid email address (e.g. name@domain.com).',
        errorMessage: 'Your message must be at least 10 characters long.',
      },
      deletion: {
        bannerTitle: 'Google Play & GDPR / Privacy Data Safety Standard',
        bannerDescription:
          'In full compliance with Google Play policies, you have the right to permanently delete your account and all associated health records (medication logs, injection history, weight, and macro logs). Purged data is irreversibly wiped from our secure servers and databases.',
        emailLabel: 'Registered Account Email',
        emailPlaceholder: 'name@domain.com',
        reasonLabel: 'Reason for Deletion',
        reasonOptional: '(Optional)',
        reasons: {
          stoppedMed: 'No longer using the medication',
          otherApp: 'Prefer a different application',
          privacyConcerns: 'Privacy concerns',
          other: 'Other reason',
        },
        checkboxLabel:
          'I confirm that my account, medication logs, weight, and macro records will be permanently and irreversibly deleted.',
        submitBtn: 'Submit Account Deletion Request',
        submitting: 'Processing Deletion Request...',
        successTitle: 'Account deletion request received.',
        successMessage:
          'Once your request is confirmed, your profile, medication history, weight, and macro records will be permanently purged from our secure servers and databases. You will receive a verification email within 24 hours.',
        resetBtn: 'Reset Form',
        errorEmail: 'Please enter the valid email registered to your account.',
        errorConfirmed: 'You must confirm that your data will be permanently deleted to proceed.',
      },
    },
    footer: {
      tagline:
        'Dose reminders, injection rotation, and fiber/protein balance assistant for individuals undergoing GLP-1 therapies such as Ozempic, Wegovy, and Mounjaro.',
      supportTitle: 'Official Support:',
      quickLinksTitle: 'Application',
      featuresLink: 'Core Features',
      howItWorksLink: 'How It Works',
      supportLink: 'Requests & Feedback',
      deletionLink: 'Account Deletion Request',
      logoPackLink: 'Logo & Mascot Assets (.SVG)',
      legalTitle: 'Legal & Safety',
      privacyLink: 'Privacy Policy',
      termsLink: 'Terms of Service',
      deletionPolicyLink: 'Account & Data Deletion',
      complianceNote:
        'Fully compliant with Google Play Health Policy and GDPR / KVKK privacy standards. Health data is never sold or shared with advertising networks.',
      copyright: '© 2026 Fibera. Developer: zegasega. All rights reserved.',
      designedWith: 'Crafted for the GLP-1 journey with',
      fairyEnding: 'and the Fiber Fairy.',
      developerInfo: 'Independent Developer: zegasega | Contact: support@fibera.xyz',
    },
    downloadModal: {
      title: 'Download Fibera App',
      subtitle: 'Closed beta and early access editions for Android & iOS are now live!',
      androidTitle: 'Download for Android',
      androidBadge: 'Google Play Early Access',
      iosTitle: 'Download for iOS',
      iosBadge: 'App Store Coming Soon',
      notifyLabel: 'Get notified when the public release launches:',
      emailPlaceholder: 'name@domain.com',
      notifyBtn: 'Notify Me',
      successTitle: 'Great, you are on the list!',
      successSub: 'We will notify you immediately once the application goes fully public.',
    },
    logoModal: {
      badge: 'Fibera Original Logo & Mascot',
      title: 'Fibera Brand Assets',
      subtitle:
        'Use, preview, or download the original Fibera branding assets or upload your original PNG logo file to see it live across the site.',
      squareTitle: 'Square App Icon',
      squareDesc: 'Google Play & App Store compliant icon with rounded card and cyan gradient backdrop.',
      downloadSquare: 'Download Icon',
      transparentTitle: 'Transparent Mascot & Ribbon',
      transparentDesc: 'Transparent background featuring the GLP heart, fairy wings, and Fibera banner.',
      downloadTransparent: 'Download Transparent Mascot (.SVG)',
      uploadTitle: 'Upload Your Original PNG / JPG File',
      uploadDesc: 'Select your local logo file to display it seamlessly in all mascot slots across the web app.',
      chooseFile: 'Select File...',
      resetDefaultTooltip: 'Reset to Vector Default',
      vectorQualityNote: 'Vector SVG icons maintain pristine clarity on all screens, mobile mockups, and design workflows without pixelation.',
      uploadSuccess: 'Custom logo loaded successfully and updated across the site!',
      resetSuccess: 'Reverted to default vector logo.',
    },
    legal: {
      closeBtn: 'Close',
      updatedDate: 'Last Updated: September 24, 2026',
      complianceBadge: 'Google Play Health Policy & GDPR / KVKK Compliant Document',
      tabs: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        deletion: 'Account Deletion Policy',
      },
      privacy: {
        title: 'Privacy Policy',
        lastUpdated: 'Last Updated: September 24, 2026',
        intro:
          'This Privacy Policy describes how information belonging to users ("User" or "you") of the Fibera mobile application ("Application"), developed by individual developer zegasega ("Developer", "we", "us", or "our"), is collected, used, stored, and protected.',
        agreement:
          'By downloading, accessing, or using Fibera, you agree to the practices described in this Privacy Policy.',
        summaryNote:
          'Fibera never shares health data with third-party ad networks, never processes health information for targeted advertising, and never sells data to data brokers. All data is encrypted and securely stored on secure cloud server and database infrastructure.',
        sections: [
          {
            number: '1',
            title: 'Important Medical Disclaimer',
            content: [
              'FIBERA IS NOT A MEDICAL DEVICE OR HEALTHCARE INSTITUTION. THE APPLICATION DOES NOT PROVIDE MEDICAL DIAGNOSIS, TREATMENT, OR CLINICAL DECISION SUPPORT.',
              'The application content and tools (dosage tracking, weight tracking, macro tracking, dose-weight change analysis) are strictly for personal tracking, record-keeping, and informational purposes.',
              'None of the data, notifications, or analytical outputs in Fibera replace the advice of a physician, pharmacist, or qualified healthcare professional.',
              'Always consult your treating physician regarding medication use, dosage adjustments, injection timing, or dietary modifications. In the event of a medical emergency, seek immediate medical attention.',
            ],
          },
          {
            number: '2',
            title: 'Collected Data',
            content: [
              'Fibera processes the following categories of data in order to provide its core tracking features:',
              'a) Account and Identity Information: Email address (for account creation, authentication, and cross-device sync), Account identifier (User ID).',
              'b) Health, Nutrition, and Biometric Tracking Data: Medication & Dose Tracking (Name of GLP-1 medication used, injection dose, date, time, and injection history); Body Measurements (Weight records, target weight, and dose-weight change/velocity curves); Nutrition & Macro Tracking (Daily calories, protein, carbohydrates, fat, and water intake records).',
              'c) Device and Technical Usage Data: Device model, operating system version, application version; Anonymized performance, crash, and error logs.',
              'd) Purchase Information: Fibera operates on a freemium model and offers optional paid premium subscription options. We do not collect or store credit card or payment details. All billing transactions are handled directly through the Google Play Store In-App Billing infrastructure.',
            ],
          },
          {
            number: '3',
            title: 'Purposes of Data Processing',
            content: [
              'Collected data is strictly processed for the following limited purposes:',
              '• Generating medication and injection schedule reminders.',
              '• Visualizing weight, macro, and dose correlation charts for you.',
              '• Synchronizing your records seamlessly across devices.',
              '• Maintaining application stability and handling debugging workflows.',
              'Google Play Health Policy Guarantee: Your health and tracking data is never shared with third-party advertising networks, never used for targeted advertising, and never sold to data brokers.',
            ],
          },
          {
            number: '4',
            title: 'Data Security and Hosting',
            content: [
              'In-Transit Security: All data transferred between the application and servers is encrypted using industry-standard HTTPS / TLS 1.3 protocols.',
              'At-Rest Security: Your personal and health data is hosted on secure cloud server and database infrastructure using modern encryption algorithms.',
              'Database and API access is governed by strict authentication and authorization access control rules.',
            ],
          },
          {
            number: '5',
            title: 'Data Sharing and Third Parties',
            content: [
              'Fibera contains no advertising networks or third-party marketing tracking SDKs. Your data is shared exclusively with our core infrastructure partners:',
              '• Secure Cloud Server & Database Systems: Encrypted data storage, protected API routing, and backend infrastructure.',
              '• Google Play: Subscription management and license verification.',
              'Unless required by legal mandate (court subpoena or authorized regulatory request), your data is never transferred to outside parties.',
            ],
          },
          {
            number: '6',
            title: 'Account Deletion and Data Retention',
            content: [
              'In compliance with Google Play policies and global data protection regulations, you hold full control over your data:',
              '• In-App Deletion: Follow Settings > Account > Delete My Account within the app to instantly and permanently erase your account and all past health records.',
              '• Web-Based Deletion: Even if the app is uninstalled from your device, you can request account deletion by emailing support@fibera.xyz from your registered email address or submitting the deletion form on our official website.',
              '• Deletion Process: Upon confirmation, your profile, medication history, weight logs, and macro records are irreversibly purged from our servers and databases.',
            ],
          },
          {
            number: '7',
            title: "Children's Privacy",
            content: [
              'Fibera is not directed toward or designed for use by individuals under 18 years of age. If we learn that data from a user under 18 has been submitted without verified authorization, such records will be promptly purged from our systems.',
            ],
          },
          {
            number: '8',
            title: 'Contact Information',
            content: [
              'For any questions, feedback, or data deletion requests regarding our Privacy Policy or your data rights:',
              'Developer: zegasega',
              'Email: support@fibera.xyz',
              'Application: Fibera',
            ],
          },
        ],
      },
      terms: {
        title: 'Terms of Service',
        lastUpdated: 'Last Updated: September 24, 2026',
        intro:
          'These Terms of Service govern your use of the Fibera mobile application. By using the Application, you agree to these terms.',
        medicalWarning:
          'Medical Responsibility Reminder: Fibera does not substitute physician care, prescribed protocols, or professional medical diagnosis.',
        sections: [
          {
            number: '1',
            title: 'Not Medical Advice',
            content: [
              'Fibera is strictly a personal lifestyle and tracking tool. All decisions regarding dosages, injection schedules, diet, or nutrition remain solely between the user and their treating physician.',
              'The application developer cannot be held liable for incorrect data entry, misuse of metrics, or medical negligence.',
            ],
          },
          {
            number: '2',
            title: 'User Account and Security',
            content: [
              'Maintaining the confidentiality of your account credentials is your responsibility. You are responsible for all activities occurring under your account.',
            ],
          },
          {
            number: '3',
            title: 'Subscriptions and Billing',
            content: [
              'Fibera operates under a freemium model. Core features are available free of charge, while advanced predictive analyses may require a premium subscription.',
              'Subscriptions are purchased and managed via the Google Play Store.',
              'Unless cancelled before the end of the billing period, subscriptions renew automatically through Google Play. Cancellations and refund requests are handled directly through Google Play’s subscription management center.',
            ],
          },
          {
            number: '4',
            title: 'Intellectual Property',
            content: [
              "Fibera's user interface design, logo, codebase, and metric computation algorithms belong exclusively to individual developer zegasega and may not be copied or reproduced without express authorization.",
            ],
          },
          {
            number: '5',
            title: 'Amendments and Termination',
            content: [
              'The developer reserves the right to update these terms and the privacy policy. Access may be terminated in cases of application abuse or fraudulent activity.',
            ],
          },
        ],
      },
      deletion: {
        title: 'Account Deletion & Data Retention Policy',
        lastUpdated: 'Last Updated: September 24, 2026',
        badge: 'Google Play Store Data Safety & User Control Standards',
        sections: [
          {
            number: '1',
            title: 'Right to Permanently Erase Your Account & Data',
            content: [
              'Under the Google Play User Data Policy and privacy legislation, you have the absolute right to delete your Fibera account and all associated personal and health metrics at any time.',
              'Deleted data cannot be recovered and is never retained in hidden backup sets.',
            ],
          },
          {
            number: '2',
            title: 'Deletion Methods',
            content: [
              'a) In-App Deletion: Open the Fibera app > Settings > Account > Delete My Account. Once confirmed, your records are deleted immediately.',
              'b) Via Official Web Form: Use the "Account Deletion Request" tab on our official website to submit an instant deletion notice.',
              'c) Via Email: Email support@fibera.xyz from your registered account email with the subject "Account Deletion Request".',
            ],
          },
          {
            number: '3',
            title: 'Which Data is Permanently Purged?',
            content: [
              '• Account credentials, user ID, and registered email address',
              '• Complete weekly injection history and site rotation maps',
              '• Weight records, body measurements, and dose correlation data',
              '• Nutrition, fiber, protein, calorie, and hydration logs',
              '• Logged symptoms, side effects, and private journal entries',
              'All information is irreversibly wiped from our secure server and database systems.',
            ],
          },
          {
            number: '4',
            title: 'Turnaround Time & Verification',
            content: [
              'For web and email requests, an automated security verification email is issued. Complete database purging concludes within 24 to 48 hours following confirmation.',
            ],
          },
        ],
      },
    },
  },
};
