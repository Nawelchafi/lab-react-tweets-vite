import ProfileImage from "./ProfileImage";
import User from "./User"
import Timestamp from "./Timestamp"
import Message from "./Message";
import Actions from "./Actions";

function Tweet({ tweet }) {
  return (
    <div className="tweet">


      <div className="body">
        <div className="top">
          <div><ProfileImage image={tweet.user.image} /></div>
          <span className="user">
            <User name={tweet.user.name} handle={tweet.user.handle} />
          </span>
          <span><Timestamp time={tweet.imestamp} /></span>
        </div>

        <Message message={tweet.message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
