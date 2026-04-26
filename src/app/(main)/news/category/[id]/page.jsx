import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSideBar from "@/components/homepage/RightSideBar";
import { getCategories, getNewsByCategoriesId } from "@/lib/data";


const NewsByCategory = async ({ params }) => {
    const { id } = await params;
    const categories = await getCategories();
    const news = await getNewsByCategoriesId(id);
    return (
        <div className="container mx-auto grid grid-cols-11 gap-10 mt-15 py-5">
            <div className="col-span-3">
                <LeftSideBar categories={categories} activeId={id} />
            </div>

            <div className="col-span-5">
                <h3 className="font-bold text-lg">All categories</h3>
                <div className="spacey-4 mt-6">
                    {news.length > 0 ?
                        news.map((n) => {
                            return (
                                <NewsCard key={n._id} news={n} />
                            );
                        }) : <h2>No News Found</h2>
                    } 
                </div>
            </div>

            <div className="col-span-3">
                <RightSideBar />
            </div>
        </div>
    );
};

export default NewsByCategory;