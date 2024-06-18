import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "services/user";

import Main from "components/template/Main"
import Sidebar from "components/template/Sidebar"

import Loader from "components/modules/Loader";

const style = {display: "flex"};

function HomePage() {
  const { data, isLoading } = useQuery({
    queryKey: ["post-list"],
    queryFn: getAllPosts
  })
  console.log(data)
  return (
    <>
      {
        isLoading ? <Loader /> : (
        <div style={style}>
          <Sidebar />
          <Main posts={data} />
        </div>
        )
      }
    </>
  )
}

export default HomePage