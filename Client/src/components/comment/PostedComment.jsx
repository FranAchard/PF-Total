export const PostedComment = ({ name, comment }) => {
  return (
    <>
      <div className="darker mt-4 text-justify user">
        <h4>{name}</h4>
        <br />
        <p>{comment}</p>
      </div>
    </>
  );
};
