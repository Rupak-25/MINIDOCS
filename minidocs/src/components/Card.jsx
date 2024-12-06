import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";


function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={0.2} dragTransition={{bounceStiffness:10, bounceDamping: 30}} className='relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden'>
        <div className='flex justify-between'>
          <FaFileAlt className=' size-5'/>
          {data.close ? <IoCloseSharp className='size-5 hover:bg-zinc-600 rounded-full cursor-pointer'/> : null}
          
        </div>
        <p className="leading-tight text-base mt-7 font-semibold">{data.desc}</p>
        <div className="footer absolute bottom-0 w-full left-0">
            <div className='flex items-center justify-between px-8 mb-5'>
                <h5>{data.filesize}</h5>
                <span>
                    {data.close ? <FaCheckCircle  className='size-5 '/> : <LuDownload className='text-blue-600 size-5 hover:bg-zinc-600 rounded-full cursor-pointer'/>}
                </span>
            </div>
            {data.tag.isOpen && (<div className={`tag w-[300px] pl-[60px] py-3 rounded-b-[40px] ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-zinc-900/300"} text-white font-semibold`}> {data.tag.tagTitle} </div>)}
        </div>
    </motion.div>
  )
}

export default Card
