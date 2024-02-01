import fetchToCurl from "fetch-to-curl";

export const fetchShortenLink = async (longUrl: string) => {
  const urlEncode = encodeURI(longUrl);

  const url = "https://cleanuri.com/api/v1/shorten";
  const options = {
    headers: {
      "Access-Control-Allow-Origin":
        "https://url-shortening-api-master-sklehti.vercel.app/",
    },
    method: "post",
    body: "url=https%3A%2F%2Fgoogle.com%2F",
  };
  // Log your request
  console.log(fetchToCurl(url, options));
  // Do your request
  const response = await fetch(url, options);
  console.log(response, "dfklj");

  // const linkInfo = await response.json();
  return "";
};

/* export const fetchShortenLink = async (longUrl: string) => {
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
}; */
