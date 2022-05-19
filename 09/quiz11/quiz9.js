// import App from "./App.js";
// import { $ } from "./util/selector.js";

// const $App = $(".container");

// new App({ $target: $App });

const $btn = document.querySelector("#search-btn");
const $text = document.querySelector("#search-text");
const $result = document.querySelector("#result");
const url = "https://dapi.kakao.com/v2/search/web";
const headers = {
  Authorization: "KakaoAK b9d48907ec9cb01ccd2cfb3cdf0ad79d",
};

function success(data) {
  console.log(data);
  const { documents } = data;
  const li = documents.map((doc) => {
    return `
            <li class="list-group-item"><a href="${doc.url}">${doc.contents}</a></li>
        `;
  });
  $result.innerHTML = `<ul class="list-group list-group-flush">${li.join(
    ""
  )}</ul>`;
}

function error() {
  alert("데이터를 가져올수 없습니다");
}

function search() {
  const { value } = $text;

  if (value === "") {
    alert("검색어를 입력해주세요");
    return;
  }

  fetch(`${url}?query=${value}`, { headers })
    .then((res) => res.json())
    .then(success)
    .catch(error);

  return true;
}

$btn.addEventListener("click", search);
