import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { firstName, lastName, email, phone, insuranceType, businessName, message, dynamicFields } = body

        // Building dynamic fields with HTML
        // dynamicFields contains the insurance-specific details

        // Start with empty string - we'll build the HTML here
        let detailsHtml = ''

        // Only build HTML if dynamicFields exists AND has at least one field
        // Object.keys(dynamicFields).length > 0 checks if object is not empty
        if (dynamicFields && Object.keys(dynamicFields).length > 0) {
            // Start the yellow highlighted box with the insurance type as header
            detailsHtml = `
                <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; border: 1px solid #fcd34d; margin: 20px 0;">
                    <p style="margin: 0 0 15px 0; font-weight: bold; color: #92400e; font-size: 18px;">
                        ${insuranceType} Details:
                    </p>
                    <ul style="margin: 0; padding-left: 20px; color: #78350f;">
            `
            // Loop through each key-value pair in dynamicFields
            // Object.entries converts { "Annual Sales": "$500,000" } into [["Annual Sales", "$500,000"]]
            for (const [key, value] of Object.entries(dynamicFields)) {
                // Add each field as a list item
                detailsHtml += `<li style="margin-bottom: 8px; font-size: 16px;"><strong>${key}:</strong> ${value}</li>`
            }
            // Close the list and container div
            detailsHtml += '</ul></div>'
        }

        await resend.emails.send({
            from: 'Stars & Stripes Quote <onboarding@resend.dev>',
            to: 'amir@starsnstripesins.com',
            replyTo: email,
            subject: `New Quote: ${insuranceType} - ${firstName} ${lastName}`,
            html: `
                <div style="background-color: #f3f4f6; padding: 40px 0; font-family: sans-serif; width: 100%;">
                    <div style="background-color: #ffffff; max-width: 600px; margin: 0 auto; padding: 40px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">

                        <div style="text-align: center; margin-bottom: 30px;">
                            <img src="https://placehold.co/400x100?text=STARS+%26+STRIPES+INSURANCE" alt="Stars & Stripes Logo" style="height: 60px; width: auto;" />
                        </div>

                        <h2 style="color: #1e3a8a; text-align: center; font-size: 24px; border-bottom: 2px solid #eee; padding-bottom: 20px; margin-bottom: 30px;">
                            New Quote Request: ${insuranceType}
                        </h2>
 
                        <div style="font-size: 16px; line-height: 1.6; color: #333;">
                            <p style="margin-bottom: 10px;"><strong>Name:</strong> ${firstName} ${lastName}</p>
                            <p style="margin-bottom: 10px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></p>
                            <p style="margin-bottom: 10px;"><strong>Phone:</strong> <a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a></p>
                            <p style="margin-bottom: 20px;"><strong>Business Name:</strong> ${businessName || 'N/A'}</p>

                            ${detailsHtml}

                            ${message ? `
                                <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; border-left: 5px solid #dc2626; margin-top: 20px;">
                                    <p style="margin-top: 0; margin-bottom: 10px; font-weight: bold; color: #1e3a8a; font-size: 18px;">
                                        Additional Information:
                                    </p>
                                    <p style="white-space: pre-wrap; margin-bottom: 0; font-size: 16px; color: #475569;">${message}</p>
                                </div>
                            ` : ''}
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

        // If the response is correct, the email was sent successfully
        // Return JSON with { success: true } and HTTP status 200 (OK)
        return NextResponse.json({ success: true })

    } catch (error) {
        // Error Handling - if anything in the try block fails, log the error to server console for debugging
        console.error('Email error:', error)

        // Return error response with HTTP status 500 (Internal Server Error)
        // The frontend will see { error: 'Failed to send email' }
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }
}