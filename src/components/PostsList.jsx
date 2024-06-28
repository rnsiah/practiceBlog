import Post from './Post';
import classes from './PostsList.module.css';
function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author="Robert" body="This is a great course" />
      <Post author="Sarah" body="This is a course" />
    </ul>
  );
}

export default PostsList;
