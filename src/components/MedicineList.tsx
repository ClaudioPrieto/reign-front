import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import MedicineItem from "./MedicineItem";

const MedicineList: FC = () => {
  // const baseURL = 'https://polls.apiblueprint.org/products';

  // const [posts, setPosts] = useState<any[]>([]);

  // useEffect(() => {
  //   axios.get(`${baseURL}`).then((response) => {
  //     setPosts(response.data.hits);
  //   });
  // }, []);
  
  const posts = [
    {
      id: 1,
      name: "Eutirox",
      concentration: "75 mg",
      imagesUrl: "https://d131ml7m6yr3wl.cloudfront.net/images/8632a5f3-546e-4a60-a4a0-55d7aaa8d8c6/large.jpeg",
    },
    {
      id: 2,
      name: "T4-Bago",
      concentration: "75 mg",
      imagesUrl: "https://d131ml7m6yr3wl.cloudfront.net/images/ab992d00-f87e-415d-aa63-dc1b3ce6de4d/large.jpeg",
    },
    {
      id: 3,
      name: "Sertralina",
      concentration: "100 mg",
      imagesUrl: "https://d131ml7m6yr3wl.cloudfront.net/images/1ad8abbe-66f5-42b4-820f-751aedc4b9af/large.jpeg",
    },
  ]
    
  return (
      <div>
        <div className="bg-gray-100">
          <p className="font-medium pb-1 pt-[7px] px-4 text-[19px]">
            Te queda
          </p>
        </div>
        <div className='body'>
        

          <div>
            {posts.map((post, index) => (
              <div key={ index }>
                <MedicineItem {...post}/>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}

export default MedicineList;
