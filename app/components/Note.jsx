'use client'
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "../components/RemoveBtn";
import Link from "next/link";

const Note = ({note}) => {
  return (
    <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
    <div>
      <h2 className="font-bold text-2xl">{note.title}</h2>
      <div>{note.description}</div>
    </div>
    <div className="flex gap-2">
      <RemoveBtn id={note._id}/>
      <Link href={`/editNote/${note._id}`}>
        <HiPencilAlt size={24} />
      </Link>
    </div>
  </div>
  )
}

export default Note