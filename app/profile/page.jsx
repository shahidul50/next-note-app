import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Login from "../login/page";

const Profile = async () => {
  const session = await getServerSession(authOptions);
  return (
    <>
      {session?.user ? (
        <div className="w-96 md:w-2/4 lg:w-1/4  mx-auto mt-10">
          <h1 className="text-center text-3xl font-bold mb-4 underline">
            Update your Profile
          </h1>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Profile;
