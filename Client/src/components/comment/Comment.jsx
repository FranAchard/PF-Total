import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../../Redux/actions';

export const Comments = () => {
    const dispatch = useDispatch()
    const comments = useSelector(state => state.comments); // obtenemos todos los comentarios del estado de redux
    const productId = useSelector(state => state.detail.id); // obtenemos el ID del producto actual


useEffect(() => {
    dispatch(getComments(productId));
  }, [productId]);

  // filtramos los comentarios para mostrar solo los que corresponden al producto actual
  const filteredComments = comments.filter(comment => comment.product && comment.product.includes(productId));


  return (
    <div>
    <h2>Comments:</h2>
      {filteredComments.map(comment => (
        <div key={comment.id}>
          <div>{comment.text}</div>
          <p>Por: {comment.postedBy}</p>
        </div>
      ))}
    </div>
  );
};
