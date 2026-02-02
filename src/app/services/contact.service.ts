import { ApiResponse, ContactFormData } from "../types/contact";

export const sendContactForm = async (data: ContactFormData, serviceName: string): Promise<ApiResponse> => {
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...data, service: serviceName })
        })

        const result = await response.json();

        if (response.ok) {
      return {
        success: true,
        message: result.message || 'Email uspešno poslat!'
      }
    } else {
      return {
        success: false,
        message: 'Greška pri slanju',
        error: result.error || 'Nepoznata greška'
      }
    }
    } catch (error) {
        console.error('Contact form error:', error)
    return {
      success: false,
      message: 'Greška pri povezivanju sa serverom',
      error: error instanceof Error ? error.message : 'Network error'
    }
    }
}