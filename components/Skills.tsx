import { motion } from 'framer-motion'
import Skill from './Skill'
import { content } from '../lib/content';

export default function Skills() {
  const { skills } = content;

  return (
    <motion.div
    initial = {{opacity:0}}
    whileInView={{opacity:1}}
    viewport={{ once: true }}
    transition={{duration:1.5}}
    className='flex relative flex-col text-center max-w-[2000px] xl:px-10 min-h-screen pt-48 pb-10 justify-center mx-auto items-center'>
      <h2 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h2>

      <p className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm px-5'>
        Hover over a skill for current proficiency
      </p>

      <ul className='grid grid-cols-4 gap-3 sm:gap-5'>
        {skills.map((skill, index) => (
          <Skill key={skill.name} skill={skill} directionLeft={index < skills.length / 2} />
        ))}
      </ul>
    </motion.div>
  )
}
