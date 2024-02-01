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

  const linkInfo = await response.json();
  return linkInfo.link;
};
