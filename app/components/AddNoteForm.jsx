"use client"

import { useState } from "react";
import toast from 'react-hot-toast';
import { useRouter } from "next/navigation";

const AddNoteForm = ({userId}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const router = useRouter()
    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!title || !description){
            toast.error('All feild Required')
            return;
        }
        try {
            const res = await fetch(`/api/note`,{
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ title, description, userId }),
            })
            const {message, success} = await res.json()
            if(success){
                setTitle('');
                setDescription('')
                toast.success(message);
                router.refresh();
                router.push('/')
            }else {
                toast.error("Failed to create a Note");
              }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
      <h1 className="text-center text-3xl font-bold mb-4 underline">
        Add New Note
      </h1>
      <div className="p-4">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="title" className="py-3 text-xl">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e)=> setTitle(e.target.value)}
              className="border rounded-md border-slate-500 px-2 py-2 w-full"
              placeholder="Add your title"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="descrition" className="py-3 text-xl">
              Description
            </label>
            <textarea
              id="descrition"
              value={description}
              onChange={(e)=> setDescription(e.target.value)}
              className="border rounded-md border-slate-500 px-2 py-2 w-full h-44"
              placeholder="Add your description"
            ></textarea>
          </div>
          <div className="mt-4">
            <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
              Add Note
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddNoteForm;
