import React from "react";

// components
import { ProfileName } from "./ProfileName";

export const Comment = () => {
  return (
    <div>
      <div className="mt-3">
        <ProfileName name="Angie" lastName="Barreto" />
        <p className="text-sm ml-10">Uyy que rica hambuguecha 😍</p>
      </div>
    </div>
  );
};
