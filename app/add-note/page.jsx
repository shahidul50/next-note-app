import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Login from "../login/page";
import AddNoteForm from "../components/AddNoteForm";

const AddNote = async () => {
  const session = await getServerSession(authOptions);
   const userId = session?.user.userId.toString();
  return (
    <>
      {session?.user ? (
        <div>
             <AddNoteForm  userId={userId}/>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default AddNote;
