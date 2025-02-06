import emailjs from '@emailjs/browser';
import type { FieldValues } from 'react-hook-form';
import envs from './envs';

export const emailSend = async (data: FieldValues): Promise<boolean> => {
  const { name, email, subject, message } = data;
  try {
    const templateParams = {
      name,
      email,
      subject,
      message,
    };
    await emailjs.send(
      envs.NEXT_PUBLIC_EMAIL_SERVICE_ID,
      envs.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
      templateParams,
      envs.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
    );
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
