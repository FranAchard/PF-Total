import { useState } from "react";
import { useDispatch } from "react-redux";
import { getComments, getUserById } from "../../Redux/actions";

export const PostedComment = ({ name, comment }) => {
  const dispatch = useDispatch();

  const allComments = getComments();

  return (
    <>
    <div>
      {allComments.length > 0 ? (
        allComments.map((e) => (
          
          <div className="darker mt-4 text-justify user">
            <h4>{name}</h4>
            <br />
            <p>{comment}</p>
          </div>
        ))
      ) : (
        <h2>No Comments</h2>
      )}
      </div>
    </>
  );
};
