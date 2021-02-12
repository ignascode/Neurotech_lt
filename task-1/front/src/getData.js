import axios from "axios";

export default async function getData() {
	const resp = await axios.get("http://localhost:8080/");
	return resp.data;
}
