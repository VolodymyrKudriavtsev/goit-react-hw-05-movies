const Reviews = ({ data }) => {
  const elements = data.map(({ id, author, content }) => (
    <li key={id}>
      <b>{author}</b>
      <p>{content}</p>
    </li>
  ));

  return <ul>{elements}</ul>;
};

Reviews.defaultProps = {
  data: [],
};

export default Reviews;
