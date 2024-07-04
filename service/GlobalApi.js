import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3000",
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
