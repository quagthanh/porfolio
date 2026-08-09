import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle2 } from 'lucide-react';
import clsx from 'clsx';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Mock API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form submitted:', data);
    setIsSuccess(true);
    reset();
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">Get in Touch</h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Have a question or want to work together? Leave a message below.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 md:p-8">
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 flex items-center gap-2 rounded-lg bg-green-50 p-4 text-green-700 dark:bg-green-900/30 dark:text-green-400"
            >
              <CheckCircle2 size={20} />
              <p>Thank you! Your message has been sent successfully.</p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name')}
                  className={clsx(
                    'w-full rounded-lg border bg-transparent px-4 py-2.5 outline-none transition-colors focus:ring-2 dark:bg-zinc-950',
                    errors.name
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                      : 'border-zinc-300 focus:border-blue-500 focus:ring-blue-500/20 dark:border-zinc-700'
                  )}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className={clsx(
                    'w-full rounded-lg border bg-transparent px-4 py-2.5 outline-none transition-colors focus:ring-2 dark:bg-zinc-950',
                    errors.email
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                      : 'border-zinc-300 focus:border-blue-500 focus:ring-blue-500/20 dark:border-zinc-700'
                  )}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                {...register('subject')}
                className={clsx(
                  'w-full rounded-lg border bg-transparent px-4 py-2.5 outline-none transition-colors focus:ring-2 dark:bg-zinc-950',
                  errors.subject
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                    : 'border-zinc-300 focus:border-blue-500 focus:ring-blue-500/20 dark:border-zinc-700'
                )}
                disabled={isSubmitting}
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                {...register('message')}
                className={clsx(
                  'w-full resize-none rounded-lg border bg-transparent px-4 py-2.5 outline-none transition-colors focus:ring-2 dark:bg-zinc-950',
                  errors.message
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                    : 'border-zinc-300 focus:border-blue-500 focus:ring-blue-500/20 dark:border-zinc-700'
                )}
                disabled={isSubmitting}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 dark:focus:ring-offset-zinc-900"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
