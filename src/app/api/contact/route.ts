import { Resend } from 'resend'
// Import NextResponse to send HTTP responses back to the client
import { NextResponse } from 'next/server'

// Create a new Resend client instance using your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY)

// Export an async POST function - this handles POST requests to /api/contact
export async function POST(request: Request) {
    // Try-catch block to handle any errors that might occur
    try {
        // Parse the JSON data from the request body
        const body = await request.json()

        // Destructure (extract) the specific fields we need from the body
        const { firstName, lastName, email, phone, message } = body

        // Send an email using Resend
        await resend.emails.send({
            // Who the email is from (must be a verified domain in Resend)
            from: 'Stars & Stripes Contact <onboarding@resend.dev>',

            // Who receives the email
            to: 'aryanlakhani2001@gmail.com',

            // When Amir clicks "Reply" in Outlook, it will go to the customer, not the website system email.
            replyTo: email,

            // Email subject line
            subject: `New Message from ${firstName} ${lastName}`,

            // Email body in HTML format
            html: `
            <div style="background-color: #f3f4f6; padding: 40px 0; font-family: sans-serif; width: 100%;">
                    <div style="background-color: #ffffff; max-width: 600px; margin: 0 auto; padding: 40px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                        
                        <div style="text-align: center; margin-bottom: 30px;">
                            <img src="https://placehold.co/400x100?text=STARS+%26+STRIPES+INSURANCE" alt="Stars & Stripes Logo" style="height: 60px; width: auto;" />
                        </div>

                        <h2 style="color: #1e3a8a; text-align: center; font-size: 24px; border-bottom: 2px solid #eee; padding-bottom: 20px; margin-bottom: 30px;">
                            New Contact Message
                        </h2>
                        
                        <div style="font-size: 16px; line-height: 1.6; color: #333;">
                            <p style="margin-bottom: 10px;"><strong>Name:</strong> ${firstName} ${lastName}</p>
                            <p style="margin-bottom: 10px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></p>
                            <p style="margin-bottom: 25px;"><strong>Phone:</strong> <a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a></p>
                            
                            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; border-left: 5px solid #dc2626;">
                                <p style="margin-top: 0; margin-bottom: 10px; font-weight: bold; color: #1e3a8a; font-size: 18px;">
                                    Message:
                                </p>
                                <p style="white-space: pre-wrap; margin-bottom: 0; font-size: 16px; color: #475569;">${message}</p>
                            </div>
                        </div>
                        
                        <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee;">
                            <p style="font-size: 14px; color: #94a3b8;">
                                Sent from the <strong>Stars & Stripes</strong> Website
                            </p>
                        </div>
                    </div>
                </div>
            `
        })

        // If email sent successfully, return a success response with status 200
        return NextResponse.json({ success: true })
    } catch (error) {
        // If something goes wrong, log the error to the console
        console.error('Email error:', error)

        // Return an error response with status 500 (Internal Server Error)
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }
}
