"use client";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';

const RemoveBtn = ({id}) => {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");
    try {
      if (confirmed) {
        const res = await fetch(`/api/note?id=${id}`, {
          method: "DELETE",
        });
        const {message, success} = await res.json()
        if (success) {
          toast.success(message)
          router.refresh();
        }
        else{
          throw new Error("Failed to update topic");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button className="text-red-400" onClick={removeTopic}>
    <HiOutlineTrash size={24} />
  </button>
  )
}

export default RemoveBtn