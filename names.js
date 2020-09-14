const searchInput = document.querySelector("input");
let timeout;

searchInput.addEventListener("input", () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    searchValue(searchInput.value);
  }, 2000);
});

const searchValue = (val) => {
  val === "" ? null : console.log(`${val}`);
};

const filePath = "test.csv";

fetch(filePath)
  .then((response) => response.text())
  .then((data) => displayData(data))
  .catch((error) => console.log(error));

const displayData = (data) => {
  const dataArr = data.split("\n");
  for (let i = 0; i < dataArr.length; i++) {
    const dataSplit = dataArr[i].split(",");
    const item = dataSplit[0];
    const price = dataSplit[dataSplit.length - 1];
    console.log(`${item} => $${price}`);
  }
};
