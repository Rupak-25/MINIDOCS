import React, { useRef, useState } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null);
    const data = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, labore?",
            filesize: "0.4MB",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, labore?",
            filesize: "0.4MB",
            close: true,
            tag: { isOpen: true, tagTitle: "", tagColor: "green"},
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, labore?",
            filesize: "0.4MB",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, labore?",
            filesize: "0.4MB",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, labore?",
            filesize: "0.4MB",
            close: true,
            tag: { isOpen: true, tagTitle: "", tagColor: "green"},
        },
    ];
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex flex-wrap gap-7 ml-12 p-10">
        {data.map((item, index)=>(
            <Card data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground
