import "./PostList.scss";
import deleteIcon from "../../assets/images/icons/delete.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PostList({ serverUrl, posts }) {
  const navigate = useNavigate();

  const handleDelete = (postId) => {
    axios
      .delete(`${serverUrl}/posts/${postId}`)
      .then((response) => {
        console.log(response);
        alert(`Your post was deleted!`);
        navigate(`/`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="pl">
      <h1 className="pl__title">Posts Summary</h1>
      <div className="pl__wrapper">
        <div className="pl__individual">
          <div className="pl__left">POST TITLE</div>
          <div className="pl__mid">POST AUTHOR</div>
          <div className="pl__right">DELETE POST?</div>
        </div>
        {posts.map((post) => (
          <div className="pl__individual">
            <div className="pl__left">{post.title}</div>
            <div className="pl__mid">{post.first_name}</div>
            <button type="button" className="pl__right">
              <img
                src={deleteIcon}
                onClick={() => {
                  handleDelete(post.id);
                }}
                alt="Delete"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
