import { NextResponse } from "next/server";

export async function GET() {
  const videos = [
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
      title: "Como WebHooks funcionam",
      thumbnail: "https://img.youtube.com/vi/oQaJn6RdA3g/hqdefault.jpg",
      channel: "ByteMonk",
      embedUrl: "https://www.youtube.com/embed/oQaJn6RdA3g?si=z7d31lbvuFl-rp4l",
      favorite: false,
    },
    {
      id: "3",
      title: "React JS para Iniciantes",
      thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg",
      channel: "Programming with Mosh",
      embedUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
      favorite: false,
    },
    {
      id: "4",
      title: "Aprenda TypeScript do zero!",
      thumbnail: "https://img.youtube.com/vi/BwuLxPH8IDs/hqdefault.jpg",
      channel: "Academind",
      embedUrl: "https://www.youtube.com/embed/BwuLxPH8IDs",
      favorite: false,
    },
    {
      id: "5",
      title: "Node.js para Iniciantes",
      thumbnail: "https://img.youtube.com/vi/TlB_eWDSMt4/hqdefault.jpg",
      channel: "Programming with Mosh",
      embedUrl: "https://www.youtube.com/embed/TlB_eWDSMt4",
      favorite: false,
    },
    {
      id: "6",
      title: "React Query - Tutorial Completo",
      thumbnail: "https://img.youtube.com/vi/8K1N3fE-cDs/hqdefault.jpg",
      channel: "Cosden Solutions",
      embedUrl: "https://www.youtube.com/embed/8K1N3fE-cDs",
      favorite: false,
    },
  ];

  return NextResponse.json(videos);
}
