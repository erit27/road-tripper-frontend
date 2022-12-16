import "./PostCard.scss";
import { Link } from "react-router-dom";
import relativeTime from "../../Utils";

export default function PostCard({
  postId,
  title,
  heroUrl,
  name,
  createdAt,
  serverUrl,
}) {
  const linkPath = `/posts/${postId}`;

  return (
    <div className="card__wrapper">
      <Link to={linkPath} postId={postId} serverUrl={serverUrl}>
        <div className="card__top">
          <img className="card__hero" src={heroUrl} alt={title} />
        </div>
        <div className="card__details">
          {name}, {relativeTime(new Date(createdAt).getTime())}
        </div>
        <div className="card__title">
          <h1>{title}</h1>
        </div>
      </Link>
    </div>
  );
}
