import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Login from "./login/page";
import Note from "./components/Note";
import Link from "next/link";

const getNotes = async (userId) => {
  try {
    const res = await fetch(process.env.NEXTAUTH_URL +`/api/note?userId=${userId}`,{cache: "no-store",});
    if (!res.ok) {
      throw new Error("Failed to fetch notes");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading notes: ", error);
  }
};

export default async function Home() {
  const session = await getServerSession(authOptions)
  let reverseNote;
  if(session){
    const userId = session?.user.userId.toString()
    const {notes} = await getNotes(userId)
    if(notes.length !== 0){
      reverseNote = notes?.reverse()
    }else{
      reverseNote = null
    }
  }
  else{
    reverseNote = []
  }
  const getNote =(rnote)=>{
    if(rnote){
      return reverseNote.map(note=> <Note note={note} key={note._id}/>)
    }
    else{
       return ( <>
       <div className="p-4 border border-slate-300 my-3 flex flex-col sm:flex-row justify-center gap-5 items-center">
         <h1 className="text-green-900 font-medium">You dont have any Note!!</h1> 
         <Link className="bg-blue-500 py-1 px-2 rounded-lg text-white" href="/add-note">Add Note</Link>
       </div>
       </>)
    }
  }

  return (
    <main>
      {session?.user ? ( 
        getNote(reverseNote) 
      ) : <Login />
      }
    </main>
  )
}
