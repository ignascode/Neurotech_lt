import axios from "axios";

export default async function getData() {
	const resp = await axios.get("http://localhost:4000/prices");
	return resp.data;
}
