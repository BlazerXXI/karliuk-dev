import axios from 'axios'
import { IContactData } from '../types'

// Function for sending a request from the front-end

const sendEmail = async (contactData: IContactData) => {
	try {
		const response = await axios.post('/api/send-email', contactData, {
			headers: {
				'Content-Type': 'application/json'
			}
		})

		return response.status === 200
	} catch (error) {
		console.error('Error:', error)
		throw new Error('Failed to send email')
	}
}

export default sendEmail
