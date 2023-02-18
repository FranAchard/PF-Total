import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUsers, postComments } from '../../Redux/actions';
import "./comment.css"
export const CommentForm = ({ productId }) => {

  
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [moderated, setModerated] = useState(false);
  const [postedBy, setPostedBy] = useState('');
  // const user = useSelector(state => state.user); 
  // console.log("soy el user" , user)

  // useEffect(() => {
  //   dispatch(getUsers());
  // }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const commentData = {
      text,
      moderated,
      postedBy, //undefined(?
      productId: productId
    };
    dispatch(postComments(commentData));
    console.log(commentData)
    alert("Success")
    setText('');
    setModerated(false);
    setPostedBy('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Comment:</label>
      <textarea id="text" value={text} onChange={(e) => setText(e.target.value)} />

      <label htmlFor="moderated">Moderated:</label>
      <input type="checkbox" id="moderated" checked={moderated} onChange={(e) => setModerated(e.target.checked)} />

      <label htmlFor="postedBy">Posted by:</label>
      <input type="text" id="postedBy" value={postedBy} onChange={(e) => setPostedBy(e.target.value)} />

      <input type="hidden" name="product" value={productId} />
      <button type="submit">Submit Comment</button>
    </form>
  );
}
