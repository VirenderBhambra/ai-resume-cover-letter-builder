import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://ai-resume-cover-letter-builder.vercel.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

const createResume = async (data) => {
  const res = await axiosClient.post("/api/resume", data);
  return res.data;
};

const getResume = async ()=>{
    const res = await axiosClient.get("/api/resume");
    return res.data;
}
const GlobalApi = {
    createResume, getResume
}
export default GlobalApi;
