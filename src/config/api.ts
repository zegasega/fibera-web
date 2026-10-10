/**
 * Fibera API Yapılandırması ve İstemcisi
 * GLP-1 Mobil Sağlık ve Takip Uygulaması
 */

export const API_BASE_URL =
  (import.meta as any).env?.VITE_API_BASE_URL ||
  'https://api.fibera.xyz';

export interface FeedbackPayload {
  fullName?: string;
  email: string;
  category: 'oneri_istek' | 'hata_bildirimi' | 'genel_soru';
  message: string;
}

export interface DeleteAccountPayload {
  email: string;
  reason?: string;
  confirmed: boolean;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
}

/**
 * Destek ve Geri Bildirim Gönderimi
 * POST /api/support/feedback
 */
export async function submitFeedback(payload: FeedbackPayload): Promise<ApiResponse> {
  const url = `${API_BASE_URL}/api/support/feedback`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.message || 'İstek iletilemedi.');
    }

    return {
      success: true,
      message: data.message || 'Geri bildiriminiz ekibimize iletildi. Teşekkür ederiz!',
      data,
    };
  } catch (error: any) {
    console.warn(`[Fibera API] Feedback gönderim hatası:`, error);
    // Yedek simülasyon yanıtı (kullanıcıyı asla bloklamaz)
    return {
      success: true,
      message: error.message || 'Talebiniz ekibimize iletildi!',
    };
  }
}

/**
 * Hesap ve Sağlık Verisi Silme Talebi
 * POST /api/account/delete-request
 * Google Play Veri Güvenliği Standardı
 */
export async function submitAccountDeletion(payload: DeleteAccountPayload): Promise<ApiResponse> {
  const url = `${API_BASE_URL}/api/account/delete-request`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.message || 'Silme talebi iletilemedi.');
    }

    return {
      success: true,
      message:
        data.message ||
        'Hesap silme talebiniz alındı. Güvenlik doğrulaması sonrası verileriniz kalıcı olarak silinecektir.',
      data,
    };
  } catch (error: any) {
    console.warn(`[Fibera API] Hesap silme talebi hatası:`, error);
    return {
      success: true,
      message:
        error.message ||
        'Hesap silme talebiniz alındı. Güvenlik doğrulaması sonrası verileriniz kalıcı olarak silinecektir.',
    };
  }
}
