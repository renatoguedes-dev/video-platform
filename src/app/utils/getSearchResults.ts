import { Dispatch, SetStateAction } from "react";
import { IVideo } from "../interfaces/Video";

function getSearchResults(
  data: IVideo[] | undefined,
  searchText: string,
  setSearchResults: Dispatch<SetStateAction<IVideo[] | null>>
) {
  if (!data || !searchText) {
    setSearchResults(null);
    return;
  }

  const lowerSearchText = searchText.toLowerCase();

  const results = data.filter(
    (video) =>
      video.channel.toLowerCase().includes(lowerSearchText) ||
      video.title.toLowerCase().includes(lowerSearchText)
  );

  setSearchResults(results);
}

export default getSearchResults;
