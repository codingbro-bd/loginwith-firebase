import Link from "next/link";
import { useRouter } from "next/router";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { Fragment } from "react";

function Navigation() {
  const router = useRouter();
  const [user] = useAuthState(auth);

  const LoginBtnHandler = () => {
    if (user) {
      toast.warn("You are loggedin!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
        hideProgressBar: true,
      });
    } else {
      router.push("/login");
    }
  };

  const ProfileClickHandler = () => {
    auth.signOut();
    toast.success("You are logged out!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1500,
      hideProgressBar: true,
    });
  };
  return (
    <nav className="h-[5rem] flex justify-between py-1">
      <div className="flex gap-3 py-2">
        <Link href={"/"}>
          <img className=" w-full h-full" src="./coding-bro-logo.svg" />
        </Link>

        <Link href={"/"}>
          <div className="hidden lg:flex flex-col">
            <h1 className="text-2xl text-blue-800 font-bold">Coding Bro</h1>
            <h1 className="text-[.65rem] text-gray-900">
              Achieved more knowledge
            </h1>
          </div>
        </Link>
      </div>
      <div className="flex gap-2 py-3">
        {!user && (
          <Fragment>
            <button
              onClick={LoginBtnHandler}
              className="px-5 py-2 text-blue-800 hover:text-white rounded-md border-2 border-blue-500 hover:bg-blue-700"
            >
              Registration
            </button>
            <button
              onClick={LoginBtnHandler}
              className="px-5 py-2 text-white rounded-md bg-blue-700 hover:bg-blue-800"
            >
              Login
            </button>
          </Fragment>
        )}
        
        {user && (
          <img
            onClick={ProfileClickHandler}
            className="cursor-pointer rounded-full"
            src={user?.photoURL}
            alt={user?.displayName}
          />
        )}
      </div>
    </nav>
  );
}
export default Navigation;
