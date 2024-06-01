import { SignIn } from "@clerk/nextjs"


const page = () => {
  return (
    <div className="flex justify-center items-center authpage z-20 h-screen pt-14">
      <SignIn />
    </div>
  )
}

export default page
