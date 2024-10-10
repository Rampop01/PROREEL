import Video from "./Video";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { FetchApi } from "../utils/FetchApi";
import Feed from "../components/Feed";
function Home() {
  return (
    <div className="">
      <div className="flex">
        <div className="">
          <Sidebar />
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 ">
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
        </div>
      </div>
    </div>
  );
}
export default Home;
