import { useNavigate, Navigate } from "react-router-dom";
import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useGetuserInfo } from "../../hooks/useGetUserInfo";

export const Auth = () => {
  const navigate = useNavigate();
  const { isAuth } = useGetuserInfo();

  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    const authInfo = {
      userID: results.user.uid,
      name: results.user.displayName,
      profilePhoto: results.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem("auth", JSON.stringify(authInfo));
    navigate("/expense-tracker");
  };

  if (isAuth) {
    return <Navigate to="/expense-tracker" />;
  }
  return (
    <div className="flex flex-col  items-center h-[100vh] w-full  bg-black text-white justify-center">
      <p className="sm:text-5xl font-poppins text-center text-2xl font-semibold p-6 ">
        Sign In with Google to Continue
      </p>
      <button
        onClick={signInWithGoogle}
        type="button"
        class="text-black bg-[#4285F4] font-poppins font-semibold hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50  rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
      >
        <svg
          class="w-4 h-4 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 19"
        >
          <path
            fill-rule="evenodd"
            d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
            clip-rule="evenodd"
          />
        </svg>
        Sign in with Google
      </button>
    </div>
  );
};
