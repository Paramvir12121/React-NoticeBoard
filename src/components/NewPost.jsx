import classes from "./NewPost.module.css";

function NewPost(props) {
  //   stateData[0]; //current value
  //   stateData[1]; //state updating function
  //   function changeBodyHandler(event) {
  //     setEnteredBody(event.target.value);
  //   }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your Name</label>
        <textarea
          id="name"
          type="text"
          required
          onChange={props.onAuthorChange}
        />
      </p>
    </form>
  );
}

export default NewPost;
