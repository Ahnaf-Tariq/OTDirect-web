import { useContext } from "react";
import { Context } from "../../../context/Context";
import axios from "axios";
import { toast } from "react-toastify";

const DeleteAccount = () => {
  const { setDeleteAccount, backendUrl, token, setToken } = useContext(Context);

  const deleteAccount = async () => {
    try {
      const response = await axios.post(`${backendUrl}/api/user/delete`, {token});

      if (response.data.success) {
        localStorage.removeItem("token");
        setToken("");
        setDeleteAccount(false);
        toast.success(response.data.msg);
      } else {
        console.log(response.data.msg);
        toast.error(response.data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="fixed inset-0 bg-black/50 z-[999] overflow-y-auto py-4">
      <div className="flex justify-center items-center min-h-full">
        <div className="bg-white w-md p-6 rounded-xl shadow-lg mx-2 flex flex-col items-center gap-6">
          <div className="size-20 flex justify-center items-center border-4 border-amber-500 rounded-full p-4">
            <p className="text-amber-500 font-semibold text-5xl">!</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-2xl font-semibold">Are You Sure?</h1>
            <p className="text-lg text-gray-700">
              You won't be able to revert this!
            </p>
          </div>
          <div className="flex justify-center gap-2">
            <button
              onClick={deleteAccount}
              className="bg-[#7A1233] text-white py-2 px-5 rounded-md cursor-pointer"
            >
              Yes
            </button>
            <button
              onClick={() => setDeleteAccount(false)}
              className="border border-gray-300 py-2 px-5 rounded-md cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
