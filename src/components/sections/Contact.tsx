import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';

import { EarthCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map(input => [input, ''])
);

// Get a free key at https://web3forms.com using the inbox that should receive messages,
// then put it in .env as VITE_WEB3FORMS_ACCESS_KEY.
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

type TStatus = { type: 'success' | 'error'; text: string } | null;

const Contact = () => {
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<TStatus>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e === undefined) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);

    if (!WEB3FORMS_ACCESS_KEY) {
      console.error('VITE_WEB3FORMS_ACCESS_KEY is not set.');
      setStatus({
        type: 'error',
        text: `The form isn't set up yet. Please email me at ${config.html.email}.`,
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New portfolio message from ${form.name}`,
          from_name: 'Portfolio Contact Form',
          name: form.name,
          email: form.email,
          replyto: form.email,
          message: form.message,
        }),
      });
      const result = await response.json();

      if (!result.success) throw new Error(result.message);

      setStatus({
        type: 'success',
        text: 'Thank you. I will get back to you as soon as possible.',
      });
      setForm(INITIAL_STATE);
    } catch (error) {
      console.error(error);
      setStatus({
        type: 'error',
        text: `Something went wrong. Please email me directly at ${config.html.email}.`,
      });
    } finally {
      setLoading(false);
    }
  };

  const { email, location, linkedin, github } = config.html;
  const contactLinks = [
    { icon: FiMail, label: email, href: `mailto:${email}` },
    { icon: FiLinkedin, label: 'LinkedIn', href: linkedin },
    { icon: FiGithub, label: 'GitHub', href: github },
    { icon: FiMapPin, label: location, href: '' },
  ].filter(link => link.href || link.icon === FiMapPin);

  return (
    <>
      <div className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}>
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="bg-black-100 flex-[0.75] rounded-2xl p-8"
        >
          <Header useMotion={false} {...config.contact} />

          <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
            {Object.keys(config.contact.form).map(input => {
              const { span, placeholder } =
                config.contact.form[input as keyof typeof config.contact.form];
              const Component = input === 'message' ? 'textarea' : 'input';

              return (
                <label key={input} className="flex flex-col">
                  <span className="mb-4 font-medium text-white">{span}</span>
                  <Component
                    type={input === 'email' ? 'email' : 'text'}
                    name={input}
                    value={form[`${input}`]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    required
                    className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
                    {...(input === 'message' && { rows: 7 })}
                  />
                </label>
              );
            })}
            <button
              type="submit"
              disabled={loading}
              className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none disabled:opacity-60"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
            {status && (
              <p className={status.type === 'success' ? 'text-green-400' : 'text-red-400'}>
                {status.text}
              </p>
            )}
          </form>
        </motion.div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
        >
          <EarthCanvas />
        </motion.div>
      </div>

      <motion.ul
        variants={slideIn('up', 'tween', 0.4, 1)}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        {contactLinks.map(({ icon: Icon, label, href }) => {
          const pill = 'bg-black-100 text-secondary flex items-center gap-2 rounded-full px-5 py-3';

          return (
            <li key={label}>
              {href ? (
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={`${pill} transition-colors hover:text-white`}
                >
                  <Icon className="text-[#915EFF]" />
                  {label}
                </a>
              ) : (
                <span className={pill}>
                  <Icon className="text-[#915EFF]" />
                  {label}
                </span>
              )}
            </li>
          );
        })}
      </motion.ul>
    </>
  );
};

export default SectionWrapper(Contact, 'contact');
