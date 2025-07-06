import React, { useContext } from "react";
import { Context } from "../../../context/Context";

const DeleteAccount = () => {
  const { deleteAccount, setDeleteAccount } = useContext(Context);
  return (
    deleteAccount && (
      <div className="fixed inset-0 bg-black/50 z-[999] overflow-y-auto py-4">
        <div className="flex justify-center items-center min-h-full">
            hshsh
        </div>
      </div>
    )
  );
};

export default DeleteAccount;
