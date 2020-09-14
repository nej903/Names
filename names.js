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
