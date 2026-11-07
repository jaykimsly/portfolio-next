import { motion } from 'framer-motion'
import { ExperienceEntry } from '../data/types';

type Props = {
    experience: ExperienceEntry;
}

export default function ExperienceCard({ experience }: Props) {
    return (
        <li className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
                            w-[85vw] md:w-[600px] xl:w-[900px] snap-center bg-surface-card p-6 md:p-10
                            opacity-80 hover:opacity-100 transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
                src={experience.logo}
                alt="" />

            <div className='px-0 md:px-10'>
                <h3 className='text-3xl md:text-4xl font-light'>{experience.role}</h3>
                <p className='font-bold text-2xl mt-1'>{experience.company}</p>
                <ul className='flex space-x-2 my-2' aria-label='Technologies'>
                    {experience.stack.map((tech) => (
                        <li key={tech.name}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img className='h-10 w-10 rounded-full' src={tech.icon} alt={tech.name} title={tech.name} />
                        </li>
                    ))}
                </ul>
                <p className='uppercase py-5 text-gray-300'>{experience.period}</p>

                <ul className='list-disc space-y-4 ms-5 text-base md:text-lg'>
                    {experience.points.map((point) => (
                        <li key={point}>{point}</li>
                    ))}
                </ul>
            </div>
        </li>
    )
}
