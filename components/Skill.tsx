import { motion } from 'framer-motion'
import { SkillEntry } from '../data/types';

type Props = {
    skill: SkillEntry;
    directionLeft?: boolean;
};

export default function Skill({ skill, directionLeft }: Props) {
  return (
    <li className='group relative flex' tabIndex={0} aria-label={`${skill.name}, ${skill.proficiency}%`}>
        <motion.img
            initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            src={skill.icon}
            alt=""
            className='rounded-full border border-gray-500 object-cover w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-32 xl:h-32
             filter group-hover:grayscale group-focus:grayscale transition duration-300 ease-in-out'
        />
        <div aria-hidden className='absolute opacity-0 group-hover:opacity-80 group-focus:opacity-80 transition duration-300
                        ease-in-out group-hover:bg-white group-focus:bg-white w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-32 xl:h-32
                        rounded-full z-0'>
            <div className='flex flex-col items-center justify-center h-full text-black'>
                <p className='text-xs sm:text-sm font-semibold'>{skill.name}</p>
                <p className='text-lg sm:text-2xl font-bold'>{skill.proficiency}%</p>
            </div>
        </div>
    </li>
  )
}
