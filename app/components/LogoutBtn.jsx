"use client"
import { signOut} from "next-auth/react"
const LogoutBtn = () => {
  return (
    <button onClick={()=> signOut()}>Logout</button>
  )
}

export default LogoutBtn