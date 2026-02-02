import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    // Provera da li su env varijable postavljene
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set')
      return NextResponse.json(
        { error: 'Server konfiguracija nije potpuna (API ključ)' },
        { status: 500 }
      )
    }

    if (!process.env.OWNER_EMAIL) {
      console.error('OWNER_EMAIL is not set')
      return NextResponse.json(
        { error: 'Server konfiguracija nije potpuna (email)' },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { name, email, phone, description, service } = body

    if (!name || !email || !description || !service) {
      return NextResponse.json(
        { error: 'Nedostaju obavezna polja' },
        { status: 400 }
      )
    }

    const phoneText = phone || 'Nije unet'

    console.log('Sending email to:', process.env.OWNER_EMAIL)

    const { data, error } = await resend.emails.send({
      from: 'Zakazivanje <onboarding@resend.dev>',
      to: process.env.OWNER_EMAIL,
      subject: `Nova konsultacija: ${service}`,
      html: `
        <h2>Nova konsultacija sa sajta</h2>
        <hr />
        <p><strong>Usluga:</strong> ${service}</p>
        <p><strong>Ime:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phoneText}</p>
        <hr />
        <h3>Opis projekta:</h3>
        <p>${description}</p>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: `Greška pri slanju: ${error.message}` },
        { status: 500 }
      )
    }

    console.log('Email sent successfully:', data?.id)
    return NextResponse.json({ success: true, message: 'Email uspešno poslat', id: data?.id })
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Serverska greška' },
      { status: 500 }
    )
  }
}
