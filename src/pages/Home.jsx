import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import { useState } from "react";
function Home() {
  const [category, setCategory] = useState(0);
  return (
    <div className="">
      <div className="md:flex">
        <div className="">
          <Sidebar category={category} setCategory={setCategory} />
        </div>
        <div className="">
          <Feed category={category} />
        </div>
      </div>
    </div>
  );
}
export default Home;
