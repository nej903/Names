const searchInput = document.querySelector("input");
const filePath = "texas_names_test.csv";
const resultsDiv = document.querySelector(".results");
let timeout;

searchInput.addEventListener("input", () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    resultsDiv.innerHTML = "";
    searchValue(searchInput.value.toUpperCase()[0]);
  }, 2000);
});

const searchValue = (val) => {
  val === "" ? null : getFile(filePath, val);
};

const getFile = async (file, val) => {
  const response = await fetch(file);
  const data = await response.text();
  const results = decipherData(data);
  displayData(results, val);
};

const decipherData = (data) => {
  const dataArr = data.split("\n");
  const result = [];
  for (let i = 0; i < dataArr.length; i++) {
    const dataSplit = dataArr[i].split(",");
    const state = dataSplit[0];
    const gender = dataSplit[1];
    const year = dataSplit[2];
    const name = dataSplit[3];
    result.push({ state, gender, year, name });
  }
  return result;
};

const displayData = (result, val) => {
  for (let i = 0; i < result.length; i++) {
    val === result[i].gender ? addData(result[i]) : null;
  }
  resultsDiv.childElementCount === 0 ? noResultsFound() : null;
};

const noResultsFound = () => {
  const div = document.createElement("div");
  const pTag = document.createElement("p");
  pTag.innerText = "No Results Found";
  div.appendChild(pTag);
  div.classList.add("row", "centered");
  resultsDiv.appendChild(div);
};

const addData = (data) => {
  const { state, gender, year, name } = data;
  const dataArr = [state, gender, year, name];
  const div = document.createElement("div");
  div.classList.add("name");
  div.id = name;
  dataArr.forEach((el) => {
    const pTag = document.createElement("p");
    pTag.innerText = el;
    div.appendChild(pTag);
  });
  resultsDiv.append(div);
};
