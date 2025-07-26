import { Copy, Edit2, Star } from "lucide-react";
import { MenuItem } from "./Types";

export const MENU_ITEMS: MenuItem[] = [
  {
    icon: Edit2, // Edit icon
    label: "Edit", // Label for the Edit option
    shortcut: "⌘E", // Shortcut for the Edit option
  },
  {
    icon: Copy, // Copy icon
    label: "Make a Copy", // Label for the Make a Copy option
    shortcut: "⌘C", // Shortcut for the Make a Copy option
  },
  {
    icon: Star, // Star icon
    label: "Favorite", // Label for the Favorite option
    shortcut: "⌘S", // Shortcut for the Favorite option
  },
];

// Label options configuration
export const LABEL_OPTIONS = ["Bug", "Feature", "Documentation"];
