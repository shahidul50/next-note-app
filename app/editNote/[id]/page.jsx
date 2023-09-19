import EditNoteForm from '@/app/components/EditNoteForm'
import React from 'react'

const getNoteById = async(id) =>{
  try {
    const res = await fetch(process.env.NEXTAUTH_URL +`/api/note/${id}`,{cache: "no-store",});
    if (!res.ok) {
      throw new Error("Failed to fetch note");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading notes: ", error);
  }
}
const EditNote = async({params}) => {
  const { id } = params;
  const { note } = await getNoteById(id);
  return (
    <div className='mt-5'>
    <h1 className='text-center text-3xl font-bold mb-4 underline'>Update Your Note</h1>
    <EditNoteForm id={id} note={note}/>
  </div>
  )
}

export default EditNote