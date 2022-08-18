import {
  AccountBox,
  Feed,
  Groups,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import { Dispatch, ReactElement, SetStateAction } from "react";

interface ItemListProps {
  href: string;
  text: string;
  icon: ReactElement;
}

const ItemList = ({ href, icon, text }: ItemListProps) => {
  return (
    <ListItem>
      <ListItemButton LinkComponent="a" href={href}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};
interface PropsTheme {
  setMode: Dispatch<SetStateAction<string>>;
  mode: string;
}
function Sidebar({ setMode, mode }: PropsTheme) {
  return (
    <Box
      padding="0 20px 0 0"
      sx={{
        display: { xs: "none", sm: "block" },
        flex: { sm: 2, md: 1.5, lg: 1 },
      }}
    >
      <Box position="fixed">
        <List>
          <ItemList href="#home" icon={<Home />} text="Home" />
          <ItemList href="#page" icon={<Feed />} text="Page" />
          <ItemList href="#groups" icon={<Groups />} text="Groups" />
          <ItemList
            href="#market-place"
            icon={<Storefront />}
            text="Marketplace"
          />
          <ItemList href="#freinds" icon={<Person />} text="Freinds" />
          <ItemList href="#setting" icon={<Settings />} text="Settings" />
          <ItemList href="#profile" icon={<AccountBox />} text="Profile" />
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
                onChange={() => setMode(mode === "dark" ? "light" : "dark")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar;
