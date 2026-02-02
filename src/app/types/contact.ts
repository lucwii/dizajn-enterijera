export interface ContactFormData {
  name: string
  email: string
  phone: string
  description: string
}

export interface FormErrors {
  name?: string
  email?: string
  phone?: string
  description?: string
}

export interface ApiResponse {
  success: boolean
  message: string
  error?: string
}

export type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'