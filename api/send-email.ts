import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

// Server handler for sending letters to Vercel
import dotenv from 'dotenv'
dotenv.config()

export default async function handler(req: VercelRequest, res: VercelResponse) {
	if (req.method === 'POST') {
		const { name, email, subject, message } = req.body

		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			}
		})

		const mailOptions = {
			from: email,
			to: process.env.EMAIL_RECIPENT,
			subject: subject || 'New Contact Form Message',
			text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
		}

		try {
			await transporter.sendMail(mailOptions)
			res.status(200).json({ message: 'Email sent successfully' })
		} catch (error) {
			console.error('Error sending email:', error)
			res.status(500).json({ message: 'Failed to send email' })
		}
	} else {
		res.status(405).json({ message: 'Method not allowed' })
	}
}
