import { PlusCircleIcon } from "lucide-react";
import React from "react";

export const AddButton = () => {
  return (
    <div className="h-48 w-48 transition-all rounded-md border-dashed bg-green-400 flex justify-center items-center flex-col hover:scale-105 hover:opacity-95 cursor-pointer">
      <PlusCircleIcon />
    </div>
  );
};
