import React from 'react';

const HeaderAndNavBar = () => {
    return(
        <>
			<div className="md:col-span-1 md:flex md:justify-center"> 
					<h1 className="font-bold uppercase p-4 border-b border-gray-100">
					<a href="/" className="hover:text-gray-700">U.S Death Trends and Doctors List</a>
					</h1>
			</div>   
            <div className="md:col-span-1 md:flex md:justify-center">
				<nav className="text-right">
				<ul className="text-sm mt-6 flex justify-evenly">
					<li className="text-gray-700 font-bold py-1">
					<a href="/" className=" px-4 flex justify-end border-r-4 border-primary">
						<span>Dashboard</span>
						<svg className="w-5 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
					</a>
					</li>
					<li className="py-1">
					<a href="doctorspage" className="  px-4 flex justify-end border-r-4 border-white">
						<span>Doctors Page</span>
						<svg className="w-5 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
					</a>
					</li>
				</ul>
				</nav>
			</div>       
        </>
    )
}

export default HeaderAndNavBar