import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const  data  = useLoaderData();
  //   const [followers, setFollowers] = useState(0);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/surajwd06")
  //       .then((response) => response.json())
  //       .then((data) => setFollowers(data));
  //   }, []);
  return (
    <>
      <h2 className="text-orange-700 text-xl flex justify-center font-bold items-center">
        Github:{data.followers}
      </h2>
      <div className="w-60">
        <img
          className="w-100% text-center top-0 "
          src={data.avatar_url}
          alt="user_img"
        />
      </div>
    </>
  );
};

export default Github;

export const githubLoaderInfo = async () => {
  const response = await fetch("https://api.github.com/users/surajwd06")
  return response.json();
};
