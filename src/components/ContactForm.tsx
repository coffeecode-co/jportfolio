'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { cn } from '@/lib/utils';
import { emailSend } from '@/config/adapters/email';
import { useTranslations } from 'next-intl';
import { C } from 'vitest/dist/chunks/reporters.6vxQttCV.js';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' }),
});

export const ContactForm = ({ className = '' }: { className?: string }) => {
  const t = useTranslations('ContactUs');
  const [canSend, setCanSend] = useState(true);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(data: z.infer<typeof formSchema>) {
    setCanSend(false);
    emailSend(data)
      .then((sended) => {
        if (!sended) {
          return;
        }
        console.log('sended');
        form.reset();
      })
      .catch((error) => {
        console.warn(error);
      })
      .finally(() => {
        setCanSend(true);
      });
  }

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center w-[80vw] max-w-md mx-auto',
        className
      )}
    >
      <h1 className="text-2xl font-bold mb-6 text-center md:text-4xl">
        {t('title')}
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('nameLabel')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('namePlaceholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('emailLabel')}</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder={t('emailPlaceholder')}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('msgLabel')}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={t('msgPlaceholder')}
                    {...field}
                    rows={5}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Botón de envío */}
          <Button type="submit" className="w-full" disabled={!canSend}>
            {t('submitBtn')}
          </Button>
        </form>
      </Form>
    </div>
  );
};
