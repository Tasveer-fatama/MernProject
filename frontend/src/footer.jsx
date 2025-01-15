"use client";
import React from 'react'

const Footer = () => {
    return (
        <>
            {/* Footer container */}
            <footer className="bg-black text-center text-white  lg:text-left">
                <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6  lg:justify-between">
                    <div className="me-12 hidden lg:block font-Montserrat">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    {/* Social network icons container */}
                    <div className="flex justify-center">
                        <a href="https://www.facebook.com/Quality-Sistema-102823931839383" className="me-6 [&>svg]:h-4 [&>svg]:w-4 hover:scale-150 hover:-translate-y-1 hover:text-tri  transition ease-in-out duration-300 delay-150">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 320 512"
                            >
                                {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                            </svg>
                        </a>
                        <a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4 hover:text-tri hover:scale-150 hover:-translate-y-1  transition ease-in-out duration-300 delay-150">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 512 512"
                            >
                                {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                            </svg>
                        </a>

                        <a href="https://www.instagram.com/sistemacerts/" className="me-6 [&>svg]:h-4 [&>svg]:w-4 hover:text-tri hover:scale-150 hover:-translate-y-1  transition ease-in-out duration-300 delay-150">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 448 512"
                            >
                                {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/company/quality-sistema/" className="me-6 [&>svg]:h-4 [&>svg]:w-4 hover:text-tri hover:scale-150 hover:-translate-y-1  transition ease-in-out duration-300 delay-150">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 448 512"
                            >
                                {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                            </svg>
                        </a>
                        <a href="mailto:sistemacerts@gmail.com" className="[&>svg]:h-4 [&>svg]:w-4 hover:text-tri hover:scale-150 hover:-translate-y-1  transition ease-in-out duration-300 delay-150">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 48 48"
                            >
                                {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                                <path
                                    className="color000000 svgShape"
                                    d="M40 8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 8L24 26 8 16v-4l16 10 16-10v4z"
                                    
                                />
                                <path d="M0 0h48v48H0z" fill="none" />                     
                                       </svg>
                        </a>
                    </div>
                </div>
                {/* Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. */}
                <div className="mx-6 py-10 text-start md:text-left p-5 ">
                    <div className="grid-1 grid gap-0 md:grid-cols-2 lg:grid-cols-4">
                        {/* TW Elements section */}
                        <div className=" font-Montserrat ">
                            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start tracking-wide ">
                                {/* <span className="me-3 [&>svg]:h-4 [&>svg]:w-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                    </svg>
                  </span> */}
                                BUILDING SOLUTIONS  Pvt. Ltd.
                            </h6>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi placeat impedit quasi voluptate pariatur mollitia dignissimos doloremque magni quia maiores, ut libero quibusdam labore qui quaerat odio architecto deleniti quidem.
                            </p>
                        </div>
                        {/* Products section */}
                        <div className='md:ml-36 mt-6 font-Montserrat'>
                            <h6 className="mb-4  flex justify-start  font-semibold uppercase md:justify-start tracking-widest ">
                                Links
                            </h6>
                            <p className="mb-4  hover:translate-x-1 duration-300">
                                <a href="#!">Home</a>
                            </p>
                            <p className="mb-4  hover:translate-x-1 duration-300">
                                <a href="#!">About Us</a>
                            </p>
                            <p className="mb-4  hover:translate-x-1 duration-300">
                                <a href="#!">Industries</a>
                            </p>
                            <p className="mb-4  hover:translate-x-1 duration-300">
                                <a href="#!">Our Policies</a>
                            </p>
                            <p className=' hover:translate-x-1 duration-300'>
                                <a href="#!">Business Services</a>
                            </p>
                        </div>
                        {/* Useful links section */}
                        <div className='md:ml-16 mt-6 font-Montserrat'>
                            <h6 className="mb-4 flex justify-start  font-semibold uppercase md:justify-start tracking-widest">
                                Useful links
                            </h6>
                            <p className="mb-4  hover:translate-x-1 duration-300">
                                <a href="#!">Contact</a>
                            </p>
                            <p className="mb-4  hover:translate-x-1 duration-300">
                                <a href="#!">Downloads</a>
                            </p>
                            <p className="mb-4  hover:translate-x-1 duration-300">
                                <a href="#!">Client Search</a>
                            </p>
                            <p className="mb-4  hover:translate-x-1 duration-300">
                                <a href="#!">News & Events</a>
                            </p>
                            <p className=' hover:translate-x-1 duration-300'>
                                <a href="#!">About Sistema Certs</a>
                            </p>
                        </div>
                        {/* Contact section */}
                        <div className=' mt-6 font-Montserrat'>
                            <h6 className="mb-4 flex justify-start  font-semibold uppercase md:justify-start tracking-widest">
                                Contact
                            </h6>
                            <p className="mb-4 flex items-start justify-start md:justify-start">
                                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                                    </svg>
                                </span>
                                friend colony vikas nagar sector 7 
                            </p>
                            <p className="mb-4 flex items-start justify-start  md:justify-start">
                                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                    </svg>
                                </span>
                               buildingsolution@gmail.com
                            </p>
                            <p className="mb-4 flex items-start justify-start md:justify-start">
                                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                                0522-4017730

                            </p>
                            <p className="flex items-start justify-start md:justify-start">
                                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                                63-9001-9004
                            </p>
                        </div>
                    </div>
                </div>
                {/*Copyright section*/}
                <div className="bg-black p-6 text-center max-w-screen-lg mx-auto border-t-2 border-white font-Montserrat ">
                    <span>© 2024  All Copyright Reserved</span> &nbsp;
                    <a className="" href="/">
                        By BUILDING SOLUTION PVT LTD.
                    </a>
                </div>
            </footer>
        </>


    )
}

export default Footer