import { Dispatch, SetStateAction } from "react";

export interface ISearchBar {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
}
