import VideoIcon from "../icons/VideoIcon";
import styles from "./logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <VideoIcon />
      <span>VideoTube</span>
    </div>
  );
};

export default Logo;
