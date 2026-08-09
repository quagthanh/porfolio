import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp } from '../animations/variants';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [showForm, setShowForm] = useState(false);
  
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
      setShowForm(false);
    }, 3000);
  };

  return (
    <section id="contact" className="section-container mb-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="mb-4 font-mono text-cyan text-sm">05. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-lightest-slate mb-6">Get In Touch</h2>
        
        <p className="mb-8 text-lg text-slate">
          I am currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="mb-12 flex flex-col items-center gap-4 text-slate">
          <div className="flex items-center gap-3">
            <span className="font-mono text-cyan">Email:</span>
            <span>dinhquangthanh0107@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-cyan">Phone:</span>
            <span>0906923347</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-cyan">Location:</span>
            <span>Binh Thanh, Ho Chi Minh City, Viet Nam</span>
          </div>
        </div>

        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="rounded-md border border-cyan px-8 py-4 font-mono text-cyan hover:bg-cyan/10 transition-colors"
          >
            Say Hello
          </button>
        )}

        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-12 text-left"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-lg border border-lightest-navy bg-light-navy p-8 shadow-2xl">
                {isSuccess && (
                  <div className="mb-6 rounded-md border border-cyan/50 bg-cyan/10 p-4 font-mono text-cyan">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block font-mono text-sm text-cyan">
                      $ name
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register('name')}
                      className={`w-full rounded-md border bg-navy px-4 py-3 font-mono text-slate outline-none transition-colors focus:border-cyan ${
                        errors.name ? 'border-coral' : 'border-lightest-navy'
                      }`}
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p className="mt-2 font-mono text-xs text-coral">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block font-mono text-sm text-cyan">
                      $ email
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register('email')}
                      className={`w-full rounded-md border bg-navy px-4 py-3 font-mono text-slate outline-none transition-colors focus:border-cyan ${
                        errors.email ? 'border-coral' : 'border-lightest-navy'
                      }`}
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="mt-2 font-mono text-xs text-coral">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block font-mono text-sm text-cyan">
                    $ subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    {...register('subject')}
                    className={`w-full rounded-md border bg-navy px-4 py-3 font-mono text-slate outline-none transition-colors focus:border-cyan ${
                      errors.subject ? 'border-coral' : 'border-lightest-navy'
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.subject && (
                    <p className="mt-2 font-mono text-xs text-coral">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block font-mono text-sm text-cyan">
                    $ message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register('message')}
                    className={`w-full resize-none rounded-md border bg-navy px-4 py-3 font-mono text-slate outline-none transition-colors focus:border-cyan ${
                      errors.message ? 'border-coral' : 'border-lightest-navy'
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="mt-2 font-mono text-xs text-coral">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-md border border-cyan px-6 py-3 font-mono text-cyan hover:bg-cyan/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Execute Submit'}
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
