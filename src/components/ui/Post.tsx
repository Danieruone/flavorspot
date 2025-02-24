import React from "react";
import Image from "next/image";

// icons
import { FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa6";

// components
import { ProfileName } from "./ProfileName";
import { Comments } from "./Comments";

export const Post = () => {
  return (
    <div className="w-full shadow-md mb-5 rounded-xl bg-white">
      <div className="p-4">
        <ProfileName name="Daniel" lastName="Mendoza" />
      </div>
      <div className="relative h-[300px] md:h-[450px]">
        <Image
          src={`https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg`}
          alt="Post Image"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex items-center">
        <div className="flex items-center">
          <FcLike size={20} /> <span className="text-sm ml-2">100</span>
        </div>
        <FaRegComment size={18} className="ml-5" />
      </div>
      <Comments />
    </div>
  );
};
