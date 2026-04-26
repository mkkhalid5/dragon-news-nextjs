import { redirect } from "next/navigation"

const default_category_id = "08"

const Home = async () =>{
  redirect(`/news/category/${default_category_id}`);
};

export default Home;