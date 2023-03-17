import classes from "./Post.module.css";

function Post(obj) {
  obj.author;
  obj.body;
  return (
    <li className={classes.post}>
      <p className={classes.author}>{obj.author}</p>
      <p className={classes.text}>{obj.body}</p>
    </li>
  );
}

export default Post;
