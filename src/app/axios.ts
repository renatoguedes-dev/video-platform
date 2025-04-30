import axios from "axios";
import { IVideo } from "./interfaces/Video";

export const getVideoList = async (): Promise<IVideo[]> => {
  try {
    const res = await axios.get<IVideo[]>("/api/videos");

    return res.data;
  } catch (err: unknown) {
    console.log(err);
    throw new Error("Erro ao buscar vídeos: " + err);
  }
};

export const getFavoritesVideoList = async (): Promise<IVideo[]> => {
  try {
    const res = await axios.get<IVideo[]>("/api/videos/favorites");

    return res.data;
  } catch (err: unknown) {
    console.log(err);
    throw new Error("Erro ao buscar vídeos favoritos: " + err);
  }
};

export const updateFavoriteVideo = async (
  id: string,
  favoriteStatus: boolean
) => {
  try {
    const res = await axios.post("/api/videos", {
      id,
      favorite: favoriteStatus,
    });

    return res.data;
  } catch (err: unknown) {
    console.log(err);
    throw new Error("Erro ao buscar vídeos favoritos: " + err);
  }
};
