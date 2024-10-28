import { IContactData } from '../types'

// Function for sending a request from the front -end

const sendEmail = async (contactData: IContactData) => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    return response.ok;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to send email');
  }
};

export default sendEmail;
