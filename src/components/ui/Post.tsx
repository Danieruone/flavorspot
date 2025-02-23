import React from "react";
import Image from "next/image";
import { ProfileName } from "./ProfileName";

export const Post = () => {
  return (
    <div className="w-full shadow-md mb-5 rounded-lg bg-white">
      <ProfileName name="Daniel" lastName="Mendoza" />
      <div className="relative h-[600px]">
        <Image
          src={`https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg`}
          alt="Post Image"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};
