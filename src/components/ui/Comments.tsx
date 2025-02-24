import React from "react";
import { ProfileName } from "./ProfileName";

export const Comments = () => {
  return (
    <div className="p-4">
      <div className="mt-3">
        <ProfileName name="Angie" lastName="Barreto" />
        <p className="text-sm">Uyy que rica hambuguecha 😍</p>
      </div>
      <div className="mt-3 flex justify-center hover:underline cursor-pointer">
        <p className="text-sm text-gray-400">View all comments</p>
      </div>
    </div>
  );
};
