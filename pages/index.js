import { useRouter } from "next/router";
import { useEffect } from "react";
import { auth} from "../utils/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
export default function Home() {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if(!user){
      router.push('/login');
    }
  },[user]);
  return (
    <div className="w-full">
      <div className="mt-8">
        <h1 className="text-3xl text-blue-800 font-bold">Dashboard</h1>
      </div>
      <div className="mt-6 flex justify-center">
        <span className="text-md text-gray-900 font-normal">
          Dashboard Content
        </span>
      </div>
    </div>
  );
}
