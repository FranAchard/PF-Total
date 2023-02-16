import { useState } from "react";

export const FormComment = (setPostedComments) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.length > 0) {
      //guardar el comentario en la base de datos de este producto y de este usuario
      console.log(comment);
    } else {
      alert("Add a comment");
    }
    //validar que haya un comentario y guardarlo en la base de datos
  };

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  return (
    <form id="algin-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <h4>Leave a comment</h4>
        <textarea
          onKeyUp={handleComment}
          cols="30"
          rows="5"
          className="form-control"
        ></textarea>
      </div>
      <div className="form-group">
        <button type="submit" id="post" className="btn">
          Post Comment
        </button>
      </div>
    </form>
  );
};
