import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email, name } = await request.json()

    // Brevo API (Sendinblue)
    const response = await fetch('https://api.sendinblue.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        sender: { email: 'hello@chemlab.com', name: 'ChemLab Academy' },
        to: [{ email }],
        subject: 'Thank you for contacting ChemLab Academy',
        htmlContent: `
          <h3>Thank you, ${name}!</h3>
          <p>We have received your message and will get back to you within 24 hours.</p>
          <p>In the meantime, feel free to explore our free resources:</p>
          <ul>
            <li><a href="https://chemistry-website.vercel.app/notes">Free Notes</a></li>
            <li><a href="https://chemistry-website.vercel.app/videos">Video Tutorials</a></li>
          </ul>
          <p>Best regards,<br/>ChemLab Academy Team</p>
        `,
      }),
    })

    if (response.ok) {
      return NextResponse.json({ message: 'Auto-reply sent!' }, { status: 200 })
    } else {
      return NextResponse.json({ error: 'Failed to send auto-reply' }, { status: 500 })
    }
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
