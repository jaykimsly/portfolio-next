import { motion } from 'framer-motion'
import { content } from '../lib/content';

export default function About() {
    const { person } = content;

    return (
        <div className='flex flex-col relative min-h-screen text-center
    md:text-left md:flex-row max-w-7xl px-10 pt-36 pb-10 gap-10 justify-evenly mx-auto items-center'>
            <h2 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h2>

            <motion.img
                initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src={person.aboutImage}
                alt={`${person.name}`}
                className='flex-shrink-0 rounded-full h-56 w-56 object-cover md:rounded-lg md:h-96 md:w-64
         xl:w-[500px] xl:h-[600px]'
            />

            <div className='space-y-6 px-0 md:px-10'>
                <h3 className='text-4xl font-semibold'>
                    All about{" "}
                    <span className='underline decoration-brand uppercase text-brand'>
                        {person.shortName}
                    </span>
                </h3>
                {person.bio.map((paragraph) => (
                    <p key={paragraph} className='text-base'>
                        {paragraph}
                    </p>
                ))}
                <p className='text-sm text-gray-400'>
                    Based in {person.location}. Speaks {person.languages.join(', ')}.
                </p>
            </div>
        </div>
    )
}
