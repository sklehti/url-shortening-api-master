export const fetchShortenLink = async (longUrl: string) => {
  const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
    method: "POST",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_BITLY_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      long_url: longUrl,
      domain: "bit.ly",
      group_guid: `${process.env.REACT_APP_GUID}`,
    }),
  });
  /* .then((response) => response.json())
        .then((data) => {
          console.log(data.link, "ldkglö");
        }); */

  const linkInfo = await response.json();
  console.log(linkInfo.link, "shorten link info");
  return linkInfo.link;

  /*  await fetch("https://api-ssl.bitly.com/v4/bitlinks/bitly.is/3ug9KhR", {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_BITLY_TOKEN}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data, "lddkl");
        }); */
};
