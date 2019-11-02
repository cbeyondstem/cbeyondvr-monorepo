import { MenuItem } from "../components/Menu"

export const menuItems:MenuItem[] = [
  { name: "", path: "/", icon:"HomeLogo", exact:true},
  { name: "Buy", path: "/", exact:true},
  { name: "Own", _path: "/own", exact:true},
  { name: "Sell", _path: "/sell", exact:true},
  { name: "How It Works", icon: "HowItWorks", path: "/how-it-works", exact:true, popup:true},
  
  { name: "User", exact: false, icon: "sign-in", only: "authenticated",
    dropdown:[
      { name: "Favorites", path: "/favorites", exact: true, icon: "heart outline" },
      { name: "Recommended", path: "/recommended", exact: true, icon:"thumbs up outline" },
      { name: "Calendar", path: "/calendar", exact: true, icon:"calendar alternate outline"},
      { name: "OpenHouse Log", path: "/openhouselog", exact: true, icon: "Reviews" },
      { name: "Messages", _path: "/messages", exact: true, icon: "mail outline" },
      { name: "Subscriptions", _path: "/subscriptions", exact: true },
      { name: "Saved Searches", _path: "/saved-searches", exact: true },
      { name: "Account Settings", _path: "/account", exact: true, divider: false },
      { name: "Sign Out", icon: "sign-out" },
    ]
  },
  { name: "Log In", only: "unauthenticated", icon: "sign-in" },
  //{ name: "Sign Up", only: "unauthenticated" },
];