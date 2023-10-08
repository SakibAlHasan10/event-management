import { useEffect, useState } from "react";
import SingleClient from "./SingleClient";

const Client = () => {
  const [clientReviews, setClientReviews] = useState([]);
  useEffect(() => {
    fetch("../../public/clientReviews.json")
      .then((res) => res.json())
      .then((data) => setClientReviews(data));
  }, []);

  // console.log(client)
  // const {} = client
  return (
    <div >
        <h2 className="text-center text-5xl font-bold mt-14"> Testimonials</h2>
        <p className="text-center text-green-500 mt-4 mb-10">HAPPY CLIENT ABOUT US</p>
      <div className="grid grid-cols-2 mb-16 md:grid-cols-5 gap-2 max-w-7xl mx-auto px-8">
        {clientReviews?.map((review) => (
          <SingleClient key={review.id} review={review}></SingleClient>
        ))}
      </div>
    </div>
  );
};

export default Client;
