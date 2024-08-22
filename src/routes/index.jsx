/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home/Home"));
const Login = lazy(() => import("../pages/LogIn/Login"));
const Tunes = lazy(() => import("../pages/Home/Tunes"));
const Playground = lazy(() => import("../pages/Home/Playground"));

const Artist = lazy(() => import("../pages/Profile/Artist"));
const Page404 = lazy(() => import("../pages/404"));
const Blank = lazy(() => import("../pages/Blank"));
const TrackDetail = lazy(() => import("../pages/Home/TrackDetail"));
const Profile = lazy(() => import("../pages/Profile/Profile"));
const Manage = lazy(() => import("../pages/Manage/Manage"));

const routes = [
  {
    path: "/home",
    icon: "./home.svg",
    name: "Home",
    role: "user",
    component: Home,
  },
  {
    path: "/tunes",
    icon: "./home.svg",
    name: "Home",
    role: "user",
    component: Tunes,
  },
  {
    path: "/playground",
    icon: "./home.svg",
    name: "Home",
    role: "user",
    component: Playground,
  },
  {
    path: "/login",
    icon: "./home.svg",
    name: "Home",
    role: "user",
    component: Login,
  },
  {
    path: "/profile",
    icon: "LibarayIcon",
    name: "Profile",
    auth: false,
    role: "user",
    component: Profile,
  },
];

export default routes;
