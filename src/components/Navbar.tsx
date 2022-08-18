import { Mail, Notifications, Pets, SearchSharp } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled(Box)(({ theme }) => ({
  padding: "2px 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icon = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => {};
  return (
    <AppBar position="sticky">
      <StyleToolbar>
        <Button
          sx={{ display: { xs: "none", sm: "block" } }}
          LinkComponent="a"
          color="inherit"
          href="/"
        >
          <Typography variant="h6">MUI React UI</Typography>
        </Button>
        <Button
          sx={{ display: { xs: "block", sm: "none" } }}
          LinkComponent="a"
          color="inherit"
          href="/"
        >
          <Pets />
        </Button>
        <Search bgcolor={"background.default"} color={"text.primary"}>
          <InputBase placeholder="search" startAdornment={<SearchSharp />} />
        </Search>
        <Icon>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{
              width: 30,
              height: 30,
            }}
            src="https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=300"
            onClick={() => setOpen(true)}
          />
        </Icon>
        <UserBox onClick={() => setOpen(true)}>
          <Avatar
            sx={{
              width: 30,
              height: 30,
            }}
            src="https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=300"
          />
          <Typography>Jonh Doe</Typography>
        </UserBox>
      </StyleToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
