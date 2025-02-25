import React from "react";
import Image from "next/image";

interface ProfileNameProps {
  name: string;
  lastName: string;
}

export const ProfileName: React.FC<ProfileNameProps> = ({ name, lastName }) => {
  return (
    <div className="flex items-center">
      <Image
        src={`https://ui-avatars.com/api/?name=${name}+${lastName}&background=random`}
        alt="Profile Picture"
        width={30}
        height={30}
        className="rounded-full"
      />
      <h1 className="ml-2 text-sm">{`${name} ${lastName}`}</h1>
    </div>
  );
};
