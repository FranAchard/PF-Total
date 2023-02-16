import { useState } from "react";
import { useDispatch } from "react-redux";
import { postComments } from "../../Redux/actions";

export const FormComment = () => {
  const dispatch = useDispatch();

  const [comment, setComment] = useState({
    text: "",
    moderated: false,
    postedBy: "",
    product: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.text.length > 0) {
      dispatch(postComments(comment));
      alert("Success");
      setComment({
        text: "",
        moderated: false,
        postedBy: "",
        product: "",
      });
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
