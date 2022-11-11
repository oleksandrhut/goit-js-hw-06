const ulCategories = document.querySelector("#categories");

const liArray = ulCategories.children;

console.log(`Number of categories:`, liArray.length);

const sectionsArray = document.querySelectorAll(".item");

sectionsArray.forEach((section) => {
  const nameSection = section.querySelector("h2");
  const lengthOfList = section.querySelectorAll("li").length;

  console.log(`Category:`, nameSection.textContent);
  console.log(`Elements:`, lengthOfList);
});
