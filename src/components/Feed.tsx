import { Box, Grid } from "@mui/material";
import Post from "./Post";

function Feed() {
  return (
    <Box flex={4} p={2}>
      <Grid container spacing={4}>
        {Array(100)
          .fill(0)
          .map((_, i) => (
            <Grid key={i} item md={12} lg={6} xl={4}>
              <Post />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default Feed;
