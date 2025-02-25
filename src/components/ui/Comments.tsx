import React from "react";

// components
import { Comment } from "./Comment";

export const Comments = () => {
  return (
    <div className="p-4">
      <Comment />
      <Comment />
      <Comment />
      <div className="mt-3 flex justify-center hover:underline cursor-pointer">
        <p className="text-sm text-gray-400">View all comments</p>
      </div>
    </div>
  );
};
