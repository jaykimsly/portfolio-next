import { ProjectEntry } from '../data/types';

type Props = {
  project: ProjectEntry;
};

export default function ProjectCard({ project }: Props) {
  return (
    <li className='flex flex-col rounded-lg flex-shrink-0 w-[85vw] md:w-[600px] snap-center bg-surface-card p-8 md:p-10
                   opacity-90 hover:opacity-100 transition-opacity duration-200'>
      <h3 className='text-3xl md:text-4xl font-light'>{project.name}</h3>
      <p className='font-bold text-xl mt-1 text-gray-300'>{project.language}</p>
      <ul className='flex flex-wrap gap-2 my-3' aria-label='Tags'>
        {project.tags.map((tag) => (
          <li key={tag} className='bg-brand/20 text-brand px-2 py-1 rounded text-sm'>{tag}</li>
        ))}
      </ul>
      <p className='py-4 text-gray-300'>{project.description}</p>
      <div className='flex gap-6 items-center mt-auto'>
        <a href={project.repo} target='_blank' rel='noopener noreferrer' className='underline hover:text-brand'>
          Code<span className='sr-only'> for {project.name}</span>
        </a>
        <a href={project.url} target='_blank' rel='noopener noreferrer' className='underline hover:text-brand'>
          Live site<span className='sr-only'> for {project.name}</span>
        </a>
      </div>
    </li>
  );
}
