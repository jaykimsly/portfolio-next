import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { content } from '../lib/content';

export default function Experience() {
  return (
    <motion.div
    initial = {{opacity:0}}
    whileInView={{opacity:1}}
    viewport={{ once: true }}
    transition={{duration:1.5}}
    className='min-h-screen flex relative overflow-hidden flex-col text-left md:flex-row
    max-w-full px-5 md:px-10 pt-36 justify-evenly mx-auto items-center'>
      <h2 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
      Experience
      </h2>

      <ul className='w-full flex space-x-5 overflow-x-scroll p-5 md:p-10 snap-x snap-mandatory'>
        {content.experience.map((entry) => (
          <ExperienceCard key={`${entry.company}-${entry.start}`} experience={entry} />
        ))}
      </ul>
      </motion.div>
  )
}
