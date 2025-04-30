import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { IFavoriteButton } from "@/app/interfaces/FavoriteButton";

const FavoriteButton = ({ isFavorite }: IFavoriteButton) => {
  return (
    <IconButton>
      {isFavorite ? <StarIcon sx={{ color: "#ffc401" }} /> : <StarBorderIcon />}
    </IconButton>
  );
};

export default FavoriteButton;
