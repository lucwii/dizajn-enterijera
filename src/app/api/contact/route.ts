import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const {name, email, phone, description, service} = body;

        if(!name || !email || !service || !description) {
            return NextResponse.json(
                {message: "Sva obavezna polja moraju biti popunjena."},
                {status: 400}
            );
        }

        const { data, error } = await resend.emails.send({
      from: 'Enterijer Dizajn <onboarding@resend.dev>', 
      to: 'milanoviclukaa23@gmail.com', 
      subject: `Novi zahtev za konsultaciju: ${service}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                line-height: 1.6; 
                color: #2d2d2d;
                margin: 0;
                padding: 0;
              }
              .container { 
                max-width: 600px; 
                margin: 0 auto; 
                background: #ffffff;
              }
              .header { 
                background: linear-gradient(135deg, #9b8573 0%, #d4c4b0 100%);
                color: white; 
                padding: 40px 30px; 
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 28px;
                font-weight: 300;
                letter-spacing: 1px;
              }
              .content { 
                background: #f8f5f2;
                padding: 40px 30px;
              }
              .field { 
                margin-bottom: 25px;
                background: white;
                padding: 20px;
                border-radius: 8px;
                border-left: 4px solid #9b8573;
              }
              .label { 
                font-weight: 600;
                color: #9b8573;
                text-transform: uppercase;
                font-size: 11px;
                letter-spacing: 1.5px;
                margin-bottom: 8px;
              }
              .value { 
                font-size: 16px;
                color: #2d2d2d;
                line-height: 1.6;
              }
              .footer {
                text-align: center;
                padding: 30px;
                color: #6b6b6b;
                font-size: 13px;
              }
              a {
                color: #9b8573;
                text-decoration: none;
              }
              a:hover {
                text-decoration: underline;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>✨ Novi Zahtev za Konsultaciju</h1>
              </div>
              
              <div class="content">
                <div class="field">
                  <div class="label">Izabrana Usluga</div>
                  <div class="value">${service}</div>
                </div>
                
                <div class="field">
                  <div class="label">Ime i Prezime</div>
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="label">Email</div>
                  <div class="value">
                    <a href="mailto:${email}">${email}</a>
                  </div>
                </div>
                
                <div class="field">
                  <div class="label">Telefon</div>
                  <div class="value">
                    ${phone ? `<a href="tel:${phone}">${phone}</a>` : '<em>Nije navedeno</em>'}
                  </div>
                </div>
                
                <div class="field">
                  <div class="label">Opis Projekta</div>
                  <div class="value">${description.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
              
              <div class="footer">
                <p>Primljeno sa sajta Enterijer Dizajn</p>
              </div>
            </div>
          </body>
        </html>
      `
    });

    if(error) {
        console.error("Resend error:", error);
        return NextResponse.json(
            {message: "Resend error", error},
            {status: 200}
        )
    }


    } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Greška na serveru' },
      { status: 500 }
    )
}
}