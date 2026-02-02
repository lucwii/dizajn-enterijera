import { ApiResponse, ContactFormData } from "../types/contact";

export const sendContactForm = async (data: ContactFormData, serviceName: string): Promise<ApiResponse> => {
    try {
        console.log('Sending contact form:', { ...data, service: serviceName })

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...data, service: serviceName })
        })

        const result = await response.json();
        console.log('API response:', response.status, result)

        if (response.ok) {
      return {
        success: true,
        message: result.message || 'Email uspešno poslat!'
      }
    } else {
      console.error('API error:', result.error)
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