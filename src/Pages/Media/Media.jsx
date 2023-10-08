import { useLoaderData } from "react-router-dom";
import SubMedia from "./subMedia";

const Media = () => {
    const mediaPhoto = useLoaderData()
    // console.log(mediaPhoto.category)
    const ourMedia = mediaPhoto.category;
    return (
        <div className="mt-40">
            <h2 className="text-4xl font-bold text-center">Our Media</h2>
        <div className="grid bg-red-50 py-8 grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-8 gap-5 mb-20">
            {
                ourMedia?.map(photo => <SubMedia 
                    key={photo.id}
                    photo={photo}
                ></SubMedia>)
            }
        </div>
        </div>
    );
};

export default Media;