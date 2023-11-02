import axios from "axios";

export const getImages = async (request, page) => {
	  const {data} = await axios.get(`https://pixabay.com/api/?q=${request}&page=${page}&key=39471314-85991d945a1adbb62f327094b&image_type=photo&orientation=horizontal&per_page=12`);
	  return data;
}