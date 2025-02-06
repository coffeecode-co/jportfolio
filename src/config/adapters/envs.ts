import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_EMAIL_SERVICE_ID: z.string(),
  NEXT_PUBLIC_EMAIL_TEMPLATE_ID: z.string(),
  NEXT_PUBLIC_EMAIL_PUBLIC_KEY: z.string(),
});

const getEnvs = () => {
  try {
    const envs = envSchema.parse({
      NEXT_PUBLIC_EMAIL_SERVICE_ID: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
      NEXT_PUBLIC_EMAIL_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
      NEXT_PUBLIC_EMAIL_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
    });
    return envs;
  } catch (error) {
    console.error('❌ Invalid environment variables:', error);
    throw new Error('Failed to validate environment variables');
  }
};
const envs = getEnvs();
export default envs;
