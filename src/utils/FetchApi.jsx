import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    relatedToVideoId: "7ghhRHRP6t4",
    part: "id,snippet",
    type: "video",
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

export const FetchApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
