import Background from "./Background/Background";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <Background />
      <ProfileInfo user={props.user} isLoad={props.isLoad} />
    </div>
  );
};

export default Profile;
