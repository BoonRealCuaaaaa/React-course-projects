import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";

export default function RootLauout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}
