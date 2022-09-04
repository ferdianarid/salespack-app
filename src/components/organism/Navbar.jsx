import { useState } from "react"
import { Transition } from "@headlessui/react"
import { motion } from "framer-motion"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="w-full bg-primary-main">
            <div className="py-5 px-8 lg:px-24 max-w-[1440px] mx-auto">
                <div className="w-full flex items-center justify-between">
                    <div className="w-[70%] flex items-center space-between">
                        <motion.div initial={{ opacity: 0, translateY: -40 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: .2 }}>
                            {/* <img src={Logo} width={200} height={50} alt="logo" /> */}
                            <h1 className="font-bold text-3xl text-neutral-10 hover:cursor-pointer">Salespack.</h1>
                        </motion.div>
                        <div className="hidden md:block ml-auto">
                            <div className="ml-16 flex items-center space-x-8">
                                <div className="flex items-center min-h-max">
                                    <input type="text" name="search" id="search" placeholder="Kamu mau cari apa ?" className="rounded-l-2xl border-none bg-neutral-10 py-3 px-4 text-sm focus:outline-none w-48" />
                                    <button className="rounded-r-2xl bg-secondary text-sm text-neutral-10 p-3">Search</button>
                                </div>
                                <motion.a initial={{ opacity: 0, translateY: -40 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: .4 }} className=" text-white font-normal text-headline-7 ipad:text-sm hover:cursor-pointer">
                                    Home
                                </motion.a>
                                <motion.a href="/blog" initial={{ opacity: 0, translateY: -40 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: .6 }} className="text-white font-normal text-headline-7 ipad:text-sm hover:cursor-pointer">
                                    Blog
                                </motion.a>
                                <motion.a href="/about" initial={{ opacity: 0, translateY: -40 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: .6 }} className="text-white font-normal text-headline-7 ipad:text-sm hover:cursor-pointer">
                                    About
                                </motion.a>
                            </div>
                        </div>
                    </div>
                    <div className="flex ipad:ml-5 md:space-x-4 justify-between">
                        <motion.a initial={{ opacity: 0, translateY: -40 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: .8 }} className="md:block hidden text-headline-7 ipad:text-sm w-40 ipad:w-20 text-center font-semibold hover:cursor-pointer py-3 bg-secondary rounded-2xl text-white">
                            Hubungi Kami
                        </motion.a>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-headline-7 inline-flex md:hidden items-center justify-center p-2 rounded-md text-white focus:outline-none "
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg width="24" height="24" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.799805 1.9999C0.799805 1.11625 1.51615 0.399902 2.3998 0.399902H21.5998C22.4835 0.399902 23.1998 1.11625 23.1998 1.9999C23.1998 2.88356 22.4835 3.5999 21.5998 3.5999H2.3998C1.51615 3.5999 0.799805 2.88356 0.799805 1.9999Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.799805 9.9999C0.799805 9.11625 1.51615 8.3999 2.3998 8.3999H11.9998C12.8835 8.3999 13.5998 9.11625 13.5998 9.9999C13.5998 10.8836 12.8835 11.5999 11.9998 11.5999H2.3998C1.51615 11.5999 0.799805 10.8836 0.799805 9.9999Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.799805 17.9999C0.799805 17.1162 1.51615 16.3999 2.3998 16.3999H21.5998C22.4835 16.3999 23.1998 17.1162 23.1998 17.9999C23.1998 18.8836 22.4835 19.5999 21.5998 19.5999H2.3998C1.51615 19.5999 0.799805 18.8836 0.799805 17.9999Z" fill="white" />
                                </svg>
                            ) : (
                                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.868532 0.868532C1.49337 0.243693 2.50643 0.243693 3.13127 0.868532L9.9999 7.73716L16.8685 0.868532C17.4934 0.243693 18.5064 0.243693 19.1313 0.868532C19.7561 1.49337 19.7561 2.50643 19.1313 3.13127L12.2626 9.9999L19.1313 16.8685C19.7561 17.4934 19.7561 18.5064 19.1313 19.1313C18.5064 19.7561 17.4934 19.7561 16.8685 19.1313L9.9999 12.2626L3.13127 19.1313C2.50643 19.7561 1.49337 19.7561 0.868532 19.1313C0.243693 18.5064 0.243693 17.4934 0.868532 16.8685L7.73716 9.9999L0.868532 3.13127C0.243693 2.50643 0.243693 1.49337 0.868532 0.868532Z" fill="white" />
                                </svg>

                            )}
                        </button>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="py-2 mb-7">
                                <a className="text-headline-7 text-neutral-10 hover:text-white block px-3 pt-3 mt-9 pb-3 mb-3 rounded-md hover:cursor-pointer font-medium hover:bg-neutral-10 hover:bg-opacity-20">
                                    Home
                                </a>
                                <a className="text-white hover:bg-neutral-10 hover:bg-opacity-20 text-headline-7 block px-3 mb-3 py-3 hover:cursor-pointer rounded-md font-medium">
                                    Blog
                                </a>
                                <a className="text-white hover:bg-neutral-10 hover:bg-opacity-20 text-headline-7 block px-3 py-3 hover:cursor-pointer rounded-md font-medium">
                                    About
                                </a>
                            </div>
                            <div className="flex flex-col space-y-4 w-full">
                                <motion.a initial={{ opacity: 0, translateY: -40 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: .8 }} className="text-headline-7 ipad:text-sm w-full text-center font-semibold hover:cursor-pointer py-3 bg-secondary rounded-2xl text-white">
                                    Hubungi Kami
                                </motion.a>
                            </div>
                        </div>
                    )}
                </Transition>
            </div>
        </nav>
    )
}

export default Navbar