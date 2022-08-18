import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { itemData } from "../data/itemData";
function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={200}>
          Online Friends
        </Typography>
        <AvatarGroup max={5}>
          <Avatar alt="Remy Sharp" src="https://picsum.photos/200" />
          <Avatar
            alt="Travis Howard"
            src="https://picsum.photos/seed/picsum/200/300"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://picsum.photos/200/300?grayscale"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://picsum.photos/200/300/?blur=2"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://picsum.photos/200/300.webp"
          />
          <Avatar alt="Remy Sharp" src="https://picsum.photos/200" />
          <Avatar
            alt="Travis Howard"
            src="https://picsum.photos/seed/picsum/200/300"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://picsum.photos/200/300?grayscale"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://picsum.photos/200/300/?blur=2"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://picsum.photos/200/300.webp"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={200}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}

export default Rightbar;
