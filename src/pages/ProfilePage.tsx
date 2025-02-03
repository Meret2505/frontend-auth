import AnimatedPage from "../components/AnimatedPage";
import ProfileCard from "../components/ProfileCard";

const ProfilePage = () => {
  return (
    <AnimatedPage>
      <div className="flex items-center justify-center min-h-screen">
        <ProfileCard />
      </div>
    </AnimatedPage>
  );
};

export default ProfilePage;
