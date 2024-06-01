
import { auth } from '@clerk/nextjs/server'
import { currentUser } from '@clerk/nextjs/server';


import ChatContainer from "@/components/ChatContainer";


export default async function Home() {

  const { userId } = auth();
  const  user  = await currentUser()

  const username = user?.username
  const userImage = user?.imageUrl


  return (
    <main className="flex items-center justify-center h-screen pt-14">
      {
        !userId ? (
            <div className="flex flex-col items-center gap-6  justify-center homePage w-full h-full">
              <h1 className="text-5xl font-extrabold ">Welcome to</h1>
              <h3 className="text-3xl font-extrabold p-6 rounded-3xl titl">DevTalk</h3>
            </div> 
        ):(
          <ChatContainer 
            username={username}
            userImage={userImage}
          />
        )
      }
    </main>
  );
}
