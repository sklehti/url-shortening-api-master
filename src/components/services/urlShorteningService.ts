import axios from "axios";

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
};
