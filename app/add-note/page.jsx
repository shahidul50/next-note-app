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
        <div className="w-96 md:w-2/4 lg:w-2/4  mx-auto mt-10">
             <AddNoteForm  userId={userId}/>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default AddNote;
