import { content } from '../lib/content';

export default function Portfolios() {
    const { hub, portfolios } = content;

    return (
        <div className='min-h-screen flex flex-col items-center justify-center text-center px-5 md:px-10 py-24 max-w-7xl mx-auto'>
            <h2 className='text-3xl md:text-5xl font-semibold'>{hub.title}</h2>
            <p className='mt-6 text-lg text-gray-300 max-w-2xl'>{hub.text}</p>

            <ul className='mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 w-full text-start'>
                {portfolios.map((portfolio) => (
                    <li key={portfolio.id} className='flex flex-col rounded-lg bg-surface-card p-6 border border-transparent hover:border-brand/40 transition-colors'>
                        <p className='text-xs uppercase tracking-widest text-gray-400'>{portfolio.audience}</p>
                        <h3 className='mt-2 text-2xl font-semibold text-brand'>{portfolio.title}</h3>
                        <p className='mt-3 text-gray-300'>{portfolio.pitch}</p>
                        <p className='mt-4 text-sm text-gray-400'>Built with {portfolio.framework}</p>
                        <div className='mt-auto pt-5'>
                            {portfolio.status === 'live' ? (
                                <a href={portfolio.url} className='underline hover:text-brand'>
                                    Open<span className='sr-only'> the {portfolio.title} portfolio</span><span aria-hidden> &rarr;</span>
                                </a>
                            ) : (
                                <span className='text-gray-500'>Coming soon</span>
                            )}
                        </div>
                    </li>
                ))}
            </ul>

            <a
                href={hub.url}
                className='mt-12 bg-brand py-4 px-8 rounded-md text-black font-bold text-lg hover:bg-brand-light transition-colors'>
                See them all on the hub<span aria-hidden> &rarr;</span>
            </a>
        </div>
    )
}
