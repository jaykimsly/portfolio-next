import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { content } from '../lib/content';

export default function Projects() {
  return (
    <motion.div
    initial = {{opacity:0}}
    whileInView={{opacity:1}}
    viewport={{ once: true }}
    transition={{duration:1.5}}
    className='min-h-screen relative flex overflow-hidden flex-col text-left max-w-full pt-40 pb-10 justify-center mx-auto items-center z-0'>

      <h2 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h2>

      <ul className='relative w-full flex gap-5 px-5 md:px-10 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 py-5'>
        {content.projects.map((project) => (
          <ProjectCard key={project.repo} project={project} />
        ))}
      </ul>

      <div aria-hidden className='w-full absolute top-[30%] bg-brand/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}
