import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const ProjectItem = ({title, backgroundImg, projectUrl, projectTech}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#2F575D]  rounded-xl p-4 group hover:bg-gradient-to-r from-[#99AEAD] to-black'>
    <Image className='rounded-xl border-solid border-2 border-[#2F575D] group-hover:opacity-10' src={backgroundImg} alt=''/>
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className=' text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{projectTech}</p> 
        <Link href={projectUrl}>
            <p className='text-center py-3 rounded-lg bg-white text-black font-bold text-lg cursor-pointer'>More Info</p>
        </Link>
    </div>
</div>
  )
}
export default ProjectItem