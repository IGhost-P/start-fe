import { API_KEY } from "../constants/API_KEY.js";
import { URL } from "../constants/url.js";

export function API(data) {
  this.get = async function (data) {
    try {
      const res = await fetch(`${URL}?query=${data}`, {
        method: "GET",
        headers: { Authorization: `KakaoAK ${API_KEY}` },
      });

      return await res.json();
    } catch (err) {
      alert("데이터를 가져올수 없습니다");
    }
  };
}
