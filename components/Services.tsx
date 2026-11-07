import { motion } from 'framer-motion'
import { content } from '../lib/content';

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className='min-h-screen relative flex flex-col max-w-7xl mx-auto px-5 md:px-10 pt-40 pb-10 justify-center items-center'>
      <h2 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Services
      </h2>

      <ul className='grid gap-5 sm:grid-cols-2 w-full'>
        {content.services.map((service) => (
          <li key={service.name} className='rounded-lg bg-surface-card p-8 border border-transparent hover:border-brand/40 transition-colors'>
            <h3 className='text-2xl font-semibold text-brand'>{service.name}</h3>
            <p className='mt-3 text-gray-300'>{service.description}</p>
          </li>
        ))}
      </ul>

      <a href='#contact' className='mt-10 bg-brand py-4 px-8 rounded-md text-black font-bold text-lg hover:bg-brand-light transition-colors'>
        Call or WhatsApp to book
      </a>
    </motion.div>
  )
}
