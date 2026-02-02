import { ContactFormData, FormErrors } from '@/app/types/contact'

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const isValidPhone = (phone: string): boolean => {
  if (!phone) return true
  const phoneRegex = /^(\+381|0)[0-9]{8,9}$/
  return phoneRegex.test(phone.replace(/[\s-]/g, ''))
}

export const validateForm = (data: ContactFormData): FormErrors => {
  const errors: FormErrors = {}

  if (!data.name.trim()) {
    errors.name = 'Ime i prezime su obavezni'
  } else if (data.name.trim().length < 3) {
    errors.name = 'Ime mora imati najmanje 3 karaktera'
  }

  if (!data.email.trim()) {
    errors.email = 'Email je obavezan'
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Unesite validan email'
  }

  if (data.phone && !isValidPhone(data.phone)) {
    errors.phone = 'Unesite validan broj telefona'
  }

  if (!data.description.trim()) {
    errors.description = 'Opis projekta je obavezan'
  } else if (data.description.trim().length < 20) {
    errors.description = 'Opis mora imati najmanje 20 karaktera'
  }

  return errors
}