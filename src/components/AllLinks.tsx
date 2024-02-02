import React from "react";
import { useAppSelector } from "../app/hooks";

const AllLinks = () => {
  const links = useAppSelector((state) => state.allLinks);

  const handleLinkCopy = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText(e.currentTarget.value);

    $(".copy-btn").css("backgroundColor", "hsl(180, 66%, 49%)");
    $(`#${e.currentTarget.id}`).html("Copy");

    $(`#${e.currentTarget.id}`).css("backgroundColor", "hsl(257, 27%, 26%)");
    $(`#${e.currentTarget.id}`).html("Copied!");
  };

  return (
    <div>
      {links.values.map((l, index) => (
        <div key={index} className="link-info">
          <div className="link-url-style">{l.values.originalLink}</div>
          <div>
            <hr className="info-hr" />
          </div>

          <div className="link-info-desktop">
            <div
              className="shorten-link-url-style"
              style={{ color: "hsl(180, 66%, 49%)" }}
            >
              {l.values.shortenLink}
            </div>

            <button
              id={index.toString()}
              className="copy-btn"
              value={l.values.shortenLink}
              onClick={handleLinkCopy}
            >
              Copy
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllLinks;
