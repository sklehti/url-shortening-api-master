import React, { useEffect } from "react";
import { allLinks } from "../features/allLinksSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";

const AllLinks = () => {
  const links = useAppSelector((state) => state.allLinks);
  const shortLink = useAppSelector((state) => state.shortenLink.value);
  const longLink = useAppSelector((state) => state.originalLink.value);

  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log(links, " mitä tulee tänne?");
  }, [shortLink, dispatch]);

  return (
    <div>
      {/*  <div> shorten link: {shortLink}</div>
      <div>original link: {longLink}</div>
      <button onClick={() => navigator.clipboard.writeText(shortLink)}>
        Copy shorten link
      </button> */}

      {links.values.map((l, index) => (
        <div key={index} className="link-info">
          <div className="link-url-style">{l.values.originalLink}</div>
          <div>
            <hr className="info-hr" />
          </div>

          <div
            className="link-url-style"
            style={{ color: "hsl(180, 66%, 49%)" }}
          >
            {l.values.shortenLink}
          </div>

          <button className="copy-btn">Copy</button>
        </div>
      ))}

      {/* <div className="link-info">
        <div>{longLink}</div>
        <div>
          <hr className="info-hr" />
        </div>

        <div>{shortLink}</div>

        <button className="copy-btn">Copy</button>
      </div> */}
    </div>
  );
};

export default AllLinks;
