const Footer = () => {
    return (
        <footer className="relative bg-[#0a0a0a] overflow-hidden font-sans mt-10">

            {/* Main content */}
            <div className="relative z-10 px-20 pt-16 max-md:px-8 max-sm:px-5">
                <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 pb-12 max-md:grid-cols-2 max-sm:grid-cols-1">

                    {/* Brand */}
                    <div className='text-start'>
                        <p className="text-[#8a8a8a] text-[13px] leading-relaxed mb-5 max-w-[260px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </p>
                        <a
                            href="mailto:example@gmail.com"
                            className="text-[#c0c0c0] text-[13px] no-underline hover:text-white transition-colors duration-200"
                        >
                            example@gmail.com
                        </a>
                    </div>

                    {/* Links */}
                    <div className='text-start'>
                        <h4 className="text-white text-[11px] font-medium tracking-[0.12em] uppercase mb-5">
                            Links
                        </h4>
                        <ul className="flex flex-col gap-3 list-none p-0 m-0">
                            {['Features', 'Solutions', 'Benefits', 'FAQ'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-[#7a7a7a] text-[13px] no-underline hover:text-[#c8d8f0] transition-colors duration-200">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className='text-start'>
                        <h4 className="text-white text-[11px] font-medium tracking-[0.12em] uppercase mb-5">
                            Resources
                        </h4>
                        <ul className="flex flex-col gap-3 list-none p-0 m-0">
                            {['Contact', 'Download Geko', 'About Us'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-[#7a7a7a] text-[13px] no-underline hover:text-[#c8d8f0] transition-colors duration-200">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className='text-start'>
                        <h4 className="text-white text-[11px] font-medium tracking-[0.12em] uppercase mb-5">
                            Socials
                        </h4>
                        <ul className="flex flex-col gap-3 list-none p-0 m-0">
                            {['Instagram', 'Twitter (X)', 'TikTok', 'Facebook'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-[#7a7a7a] text-[13px] no-underline hover:text-[#c8d8f0] transition-colors duration-200">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <hr className="border-none border-t border-[#1e1e1e] mx-20 max-md:mx-8 max-sm:mx-5" style={{ borderTopWidth: '1px' }} />

            {/* Bottom bar */}
            <div className="relative z-10 flex items-center justify-between px-20 py-5 max-md:px-8 max-md:flex-col max-md:items-start max-md:gap-4 max-sm:px-5">
                <p className="text-[#4a4a4a] text-xs m-0">
                    2026 @ Oppia Labs - All Rights Reserved
                </p>

                <div className="flex gap-2.5">
                    {/* Instagram */}
                    <a
                        href="#"
                        aria-label="Instagram"
                        className="w-9 h-9 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-[#aaa] no-underline transition-all duration-200 hover:bg-[#2a3a50] hover:border-[#4a6a90] hover:text-[#c8d8f0]"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                    </a>

                    {/* Facebook */}
                    <a
                        href="#"
                        aria-label="Facebook"
                        className="w-9 h-9 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-[#aaa] no-underline transition-all duration-200 hover:bg-[#2a3a50] hover:border-[#4a6a90] hover:text-[#c8d8f0]"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="#"
                        aria-label="LinkedIn"
                        className="w-9 h-9 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-[#aaa] no-underline transition-all duration-200 hover:bg-[#2a3a50] hover:border-[#4a6a90] hover:text-[#c8d8f0]"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect x="2" y="9" width="4" height="12" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                    </a>

                    {/* X / Twitter */}
                    <a
                        href="#"
                        aria-label="Twitter / X"
                        className="w-9 h-9 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-[#aaa] no-underline transition-all duration-200 hover:bg-[#2a3a50] hover:border-[#4a6a90] hover:text-[#c8d8f0]"
                    >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer