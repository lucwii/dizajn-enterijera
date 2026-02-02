import { ContactFormData, FormErrors, SubmitStatus } from "@/app/types/contact"
import { useState } from "react"
import { validateForm } from "./validators"
import { sendContactForm } from "@/app/services/contact.service"

export const useContactForm = (initialService: string | null) => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        phone: '',
        description: ''
    })
    
    const [errors, setErrors] = useState<FormErrors>({})
    const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
}
const handleSubmit = async (
    e: React.FormEvent,
    serviceName: string
  ) => {
    e.preventDefault()

    const validationErrors = validateForm(formData)
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setSubmitStatus('submitting')

    const result = await sendContactForm(formData, serviceName)

    if (result.success) {
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        description: ''
      })
      setErrors({})
      
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 3000)
    } else {
      setSubmitStatus('error')
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 3000)
    }

    return result
  }

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      description: ''
    })
    setErrors({})
    setSubmitStatus('idle')
  }

  return {
    formData,
    errors,
    submitStatus,
    focusedField,
    handleChange,
    handleSubmit,
    setFocusedField,
    resetForm,
    isSubmitting: submitStatus === 'submitting',
    isSuccess: submitStatus === 'success',
    isError: submitStatus === 'error'
  }
}