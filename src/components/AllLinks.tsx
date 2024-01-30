import React, { useEffect } from "react";
import { allLinks } from "../features/allLinksSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";

const AllLinks = () => {
  const links = useAppSelector((state) => state.allLinks);
  const shortLink = useAppSelector((state) => state.shortenLink.value);

  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log(links, " mitä tulee tänne?");
  }, [shortLink, dispatch]);

  return (
    <div>
      <button className="shorten-it-btn">Copy</button>

      {/*  <div> shorten link: {shortLink}</div>
      <div>original link: {longLink}</div>
      <button onClick={() => navigator.clipboard.writeText(shortLink)}>
        Copy shorten link
      </button> */}
    </div>
  );
};

export default AllLinks;
