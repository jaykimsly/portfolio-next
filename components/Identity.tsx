import { motion } from 'framer-motion';
import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle';
import { content } from '../lib/content';

const sections = [
    ['#about', 'About'],
    ['#experience', 'Experience'],
    ['#services', 'Services'],
    ['#skills', 'Skills'],
    ['#projects', 'Projects'],
    ['#contact', 'Contact'],
    ['#portfolios', 'Portfolios'],
] as const;

export default function Identity() {
    const { person } = content;

    const [text] = useTypewriter({
        words: person.headlines,
        loop: true,
        delaySpeed: 2000
    });

    return (
        <div className='h-screen flex flex-col space-y-8 justify-center text-center overflow-hidden'>
            <BackgroundCircle />
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2 }}
            >
                <Image
                    className='relative rounded-full mx-auto object-cover h-32 w-32'
                    src={person.profileImage}
                    alt={person.name}
                    width={128}
                    height={128}
                    priority
                />
            </motion.div>
            <div className='z-20'>
                <p className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                    {person.title}
                </p>
                <h1 className='text-4xl lg:text-6xl font-semibold px-10 min-h-[3em] md:min-h-0'>
                    <span className='sr-only'>{person.name}, {person.title}</span>
                    <span aria-hidden className='mr-3'>{text}</span>
                    <span aria-hidden><Cursor cursorColor='#f7ab0a' /></span>
                </h1>

                <nav className='pt-5 flex flex-wrap justify-center gap-2 px-5' aria-label="Page sections">
                    {sections.map(([href, label]) => (
                        <a key={href} href={href} className='identityButton hover:scale-105 transition-transform'>
                            {label}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );
}
