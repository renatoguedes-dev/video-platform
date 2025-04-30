import { IVideo } from "@/app/interfaces/Video";

export class VideoManager {
  private videos: IVideo[];

  constructor() {
    this.videos = [
      {
        id: "1",
        title: "Never Gonna Give You Up (Official Music Video)",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
        channel: "Rick Astley",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        favorite: false,
      },
      {
        id: "2",
        title: "CS50W - Lecture 3 - Django",
        thumbnail: "https://img.youtube.com/vi/w8q0C-C1js4/hqdefault.jpg",
        channel: "CS50",
        embedUrl:
          "https://www.youtube.com/embed/w8q0C-C1js4",
        favorite: false,
      },
      {
        id: "3",
        title: "Binary Trees, Part 1",
        thumbnail: "https://img.youtube.com/vi/76dhtgZt38A/hqdefault.jpg",
        channel: "MIT OpenCourseWare",
        embedUrl:
          "https://www.youtube.com/embed/76dhtgZt38A",
        favorite: false,
      },
      {
        id: "4",
        title: "Como WebHooks funcionam",
        thumbnail: "https://img.youtube.com/vi/oQaJn6RdA3g/hqdefault.jpg",
        channel: "ByteMonk",
        embedUrl:
          "https://www.youtube.com/embed/oQaJn6RdA3g?si=z7d31lbvuFl-rp4l",
        favorite: false,
      },
      {
        id: "5",
        title: "React JS para Iniciantes",
        thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg",
        channel: "Programming with Mosh",
        embedUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
        favorite: false,
      },
      {
        id: "6",
        title: "Aprenda TypeScript do zero!",
        thumbnail: "https://img.youtube.com/vi/BwuLxPH8IDs/hqdefault.jpg",
        channel: "Academind",
        embedUrl: "https://www.youtube.com/embed/BwuLxPH8IDs",
        favorite: false,
      },
      {
        id: "7",
        title: "Node.js para Iniciantes",
        thumbnail: "https://img.youtube.com/vi/TlB_eWDSMt4/hqdefault.jpg",
        channel: "Programming with Mosh",
        embedUrl: "https://www.youtube.com/embed/TlB_eWDSMt4",
        favorite: false,
      },
      {
        id: "8",
        title: "React Query - Tutorial Completo",
        thumbnail: "https://img.youtube.com/vi/8K1N3fE-cDs/hqdefault.jpg",
        channel: "Cosden Solutions",
        embedUrl: "https://www.youtube.com/embed/8K1N3fE-cDs",
        favorite: false,
      },
    ];
  }

  getAll() {
    return this.videos;
  }

  getAllFavorites() {
    return this.videos.filter((video) => video.favorite);
  }

  setFavorite(id: string, favorite: boolean) {
    const video = this.videos.find((item) => item.id === id);
    if (video) {
      video.favorite = favorite;
      return video;
    }

    return null;
  }
}

export const videoManager = new VideoManager();
