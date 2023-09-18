'use client'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useRouter } from "next/navigation";

const EditNoteForm = ({id, note}) => {
     const {title, description} = note
     const [newTitle, setNewTitle] = useState(title)
     const [newDescription, setNewDescription] = useState(description)
     const router = useRouter()
     const handleSubmit = async (e)=> {
         e.preventDefault() 
         if(!newTitle || !newDescription){
           toast.error('All field Required');
           return;
         }
         try {
          const res = await fetch(`/api/note/${id}`, {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ newTitle, newDescription }),
          });
          const {message, success} = await res.json()
          if (success) {
            toast.success(message)
            router.refresh();
            router.push("/");
          }else{
             toast.error("Failed to update note");
          }
        } catch (error) {
          console.log(error);
        }
      }
  return (
    <div className='p-4'>
      <form onSubmit={handleSubmit}>
          <div className='flex flex-col'>
            <label htmlFor='title' className='py-3 text-xl'>Title</label>
            <input type="text" id='title' value={newTitle} onChange={(e)=> setNewTitle(e.target.value)} className='border rounded-md border-slate-500 px-2 py-2 w-full' placeholder="Add your title"/>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='descrition' className='py-3 text-xl'>Description</label>
            <textarea id='descrition' value={newDescription} onChange={(e)=> setNewDescription(e.target.value)} className='border rounded-md border-slate-500 px-2 py-2 w-full h-44' placeholder="Add your description"></textarea>
          </div>
          <div className='mt-4'>
              <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
                  Update Note
              </button>
          </div>
      </form>
    </div>
  )
}

export default EditNoteForm