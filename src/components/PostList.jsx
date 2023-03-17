import Post from "./Post";
import classes from "./PostList.module.css";

function Postlist() {
  return (
    <ul className={classes.posts}>
      <Post author="Paramvir" body="I am the POWERRRRR!" />
      <Post author="Reme" body="no power here bro" />
      <Post author="Reed" body="Medium Power, no voltage" />
    </ul>
  );
}

export default Postlist;
