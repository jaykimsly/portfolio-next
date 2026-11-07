import { content, telHref, whatsAppHref } from '../lib/content';

export default function Contact() {
    const { person, phones } = content;

    return (
        <div className='min-h-screen flex relative flex-col text-center max-w-7xl mx-auto px-5 md:px-10 pt-40 pb-10 justify-center items-center'>
            <h2 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Contact
            </h2>

            <h3 className='text-3xl md:text-4xl font-semibold'>
                Need a developer or IT help?{" "}
                <span className='decoration-brand/50 underline'>Let&apos;s talk.</span>
            </h3>

            <ul className='mt-12 space-y-8'>
                {phones.map((phone) => (
                    <li key={phone.number} className='flex flex-col items-center gap-3'>
                        <p className='text-2xl md:text-3xl'>
                            <span aria-hidden className='text-brand icon-pulse me-3'>&#128241;</span>
                            {phone.display}
                        </p>
                        <div className='flex flex-wrap justify-center gap-3'>
                            {phone.calls && (
                                <a href={telHref(phone)} className='identityButton'>
                                    Call<span className='sr-only'> {phone.display}</span>
                                </a>
                            )}
                            {phone.whatsapp && (
                                <a href={whatsAppHref(phone)} target='_blank' rel='noopener noreferrer' className='identityButton'>
                                    WhatsApp<span className='sr-only'> {phone.display}</span>
                                </a>
                            )}
                        </div>
                    </li>
                ))}
            </ul>

            <p className='mt-12 text-lg md:text-2xl'>
                <span aria-hidden className='text-brand icon-pulse me-3' style={{ animationDelay: '0.8s' }}>&#128205;</span>
                {person.location}
            </p>
        </div>
    )
}
