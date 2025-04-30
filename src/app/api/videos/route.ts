import { NextResponse } from "next/server";
import { videoManager } from "./videoManager";

export async function GET() {
  return NextResponse.json(videoManager.getAll());
}

export async function POST(request: Request) {
  const data = await request.json();

  if (!data.id || typeof data.favorite !== "boolean") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const updatedVideo = videoManager.setFavorite(data.id, data.favorite);
  if (!updatedVideo) {
    return NextResponse.json({ error: "Video not found" }, { status: 404 });
  }

  return NextResponse.json(updatedVideo);
}
