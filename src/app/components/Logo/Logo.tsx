import Link from "next/link";
import VideoIcon from "../icons/VideoIcon";
import styles from "./logo.module.css";

const Logo = () => {
  return (
    <Link href={"/"} className={styles.link}>
      <div className={styles.logo}>
        <VideoIcon />
        <span>VideoTube</span>
      </div>
    </Link>
  );
};

export default Logo;
