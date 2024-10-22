import Image from "next/image"
import aboutImage from"@/images/about images-01.webp"

import { promises } from "node:dns"
import { resolve } from "node:path"

export default async function About(){
    await new Promise((resolve) => {
        setTimeout(resolve , 5000);
    })

    return(
        <div>
        <h1 className="text-center text-white p-2 border-2 border-green-600 mt-11 rounded-3xl shadow-green-600 shadow-lg hover:bg-yellow-500 font-bold">About Page</h1>
        <p className="text-pink-500 text-2xl text-center mt-5 italic border-b-2 border-green-700 pb-5">"Creating a loading page for your website is essential to improving user experience.

Including a loading screen can decrease abandoned visits, improve user experience, and give you time to load additional content or resources.

Remember these best practices when creating your loading page to ensure traffic stays on your site!"</p>
       <div className="img-div overflow-hidden mt-10">
       <Image className='m-auto rounded-2xl' src={aboutImage} alt="About image" width={400} height={400} />
       </div>
        </div>
    
    )
}