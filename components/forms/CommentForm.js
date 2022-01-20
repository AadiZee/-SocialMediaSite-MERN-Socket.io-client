const CommentForm = ({ addComment, comment, setComment }) => {
  return (
    <form onSubmit={addComment}>
      <input
        type="text"
        className="form-control"
        placeholder="Write Something..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        className="btn btn-dark btn-sm btn-block mt-2 d-block"
        style={{ margin: "auto", marginRight: "0" }}
      >
        Post Comment
      </button>
    </form>
  );
};

export default CommentForm;
