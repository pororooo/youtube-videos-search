import axios from "axios";

const apiKey = 'AIzaSyCH__MBn7NOvFn8i75t8o64gJGcsAA967Y'


export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 3,
		key: `${apiKey}`
	},
});