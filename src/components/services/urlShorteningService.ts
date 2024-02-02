import axios, { AxiosError } from "axios";

export const fetchShortenLink = async (longUrl: string) => {
  try {
    const response = await axios.post(
      "https://url-shortening-api-backend.vercel.app/links",
      { longUrl }
    );

    return response.data.result_url;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.log(error.status);
      console.error(error.response);
      alert("Incorrect url address!");
    } else {
      console.error(error);
    }
  }

  /* const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
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
  return linkInfo.link; */
};
