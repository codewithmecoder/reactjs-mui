import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { Fragment } from "react";
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
    <Box
      flex={2}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
        overflowY: "scroll",
        height: "100vh",
      }}
    >
      <Box width={300}>
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
        <Typography variant="h6" fontWeight={200} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
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
        <Typography variant="h6" fontWeight={200} mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            minHeight: "100vh",
          }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://picsum.photos/200/300.webp"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://picsum.photos/200/300.webp"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://picsum.photos/200/300.webp"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Rightbar;
