import { NextResponse } from "next/server";
import { videoManager } from "../videoManager";

export async function GET() {
  return NextResponse.json(videoManager.getAllFavorites());
}
