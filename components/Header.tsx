import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import { content } from '../lib/content';

export default function Header() {
    const { socials } = content;

    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.nav
                aria-label="Social profiles"
                initial={{ x: -500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.7 }}
                className='flex flex-row items-center'>
                {socials.map((social) => (
                    <SocialIcon
                        key={social.url}
                        url={social.url}
                        fgColor='gray'
                        bgColor='transparent'
                        aria-label={social.label}
                        target='_blank'
                        rel='noopener noreferrer'
                    />
                ))}
            </motion.nav>

            <motion.a
                href='#contact'
                initial={{ x: 500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.7 }}
                className='flex flex-row items-center text-gray-300'>
                <SocialIcon as='span' network='whatsapp' fgColor='gray' bgColor='transparent' aria-hidden />
                <span className='uppercase hidden md:inline-flex text-sm text-gray-400'>Call or WhatsApp</span>
                <span className='sr-only md:hidden'>Call or WhatsApp</span>
            </motion.a>
        </header>
    )
}
