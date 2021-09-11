const boxArray = [];
let i = 1;

const onChange = (e, i) => {
  i = i - 1;
  const someStringToCheck = e.currentTarget.id;
  const indexOfSpace = someStringToCheck.indexOf("-");
  const index = parseInt(
    someStringToCheck.substr(indexOfSpace + 1, someStringToCheck.length + 1)
  );
  let boxDiv = document.getElementById(`box-${index}`);
  let heightValue = document.getElementById(`height-${index}`).value + "px";
  let widthValue = document.getElementById(`width-${index}`).value + "px";
  if (e.target.checked) {
    boxDiv.style.width = widthValue;
    boxDiv.style.height = heightValue;
  } else {
    boxDiv.style.width = "100px";
    boxDiv.style.height = "100px";
  }
};

function instantSizeChange(e, i) {
  i = i - 1;
  const someStringToCheck = e;
  const indexOfSpace = someStringToCheck.indexOf("-");
  const index = parseInt(
    someStringToCheck.substr(indexOfSpace + 1, someStringToCheck.length + 1)
  );
  let boxDiv = document.getElementById(`box-${index}`);
  let heightValue = document.getElementById(`height-${index}`).value + "px";
  let widthValue = document.getElementById(`width-${index}`).value + "px";
  boxDiv.style.width = widthValue;
  boxDiv.style.height = heightValue;
  document.getElementById(`checkbox-${i}`).checked = true;
}

function addbox() {
  const divMainBox = document.createElement("div");
  const divBixBox = document.createElement("div");
  const divSmallBox = document.createElement("div");
  divMainBox.id = `mainBox-${i}`;
  divMainBox.className = "mainBox";
  divBixBox.className = "bigBox";
  divSmallBox.id = `box-${i}`;
  divSmallBox.className = "smallbox";
  divSmallBox.innerText = "Box";
  document.getElementById("main").append(divMainBox);
  divMainBox.append(divBixBox);
  divBixBox.appendChild(divSmallBox);

  const widthBox = document.createElement("input");
  const heightBox = document.createElement("input");
  let mainBoxDib = document.getElementById(`mainBox-${i}`);
  widthBox.id = `width-${i}`;
  widthBox.className = "data";
  widthBox.type = "number";
  widthBox.placeholder = "Width";
  widthBox.addEventListener("input", () => instantSizeChange(widthBox.id, i));
  mainBoxDib.append(widthBox);
  heightBox.id = `height-${i}`;
  heightBox.className = "data";
  heightBox.type = "number";
  heightBox.placeholder = "Height";
  heightBox.addEventListener("input", () => instantSizeChange(widthBox.id, i));
  mainBoxDib.append(heightBox);

  const checkBoxDiv = document.createElement("div");
  const checkBox = document.createElement("input");
  const checkboxLabel = document.createElement("label");
  checkBox.id = `checkbox-${i}`;
  checkBox.type = "checkbox";
  checkboxLabel.setAttribute("for", checkBox.id);
  checkboxLabel.innerText = "Box sizing ?";
  checkBox.addEventListener("change", (e) => onChange(e, i));

  document.getElementById(`mainBox-${i}`).append(checkBoxDiv);
  checkBoxDiv.appendChild(checkBox);
  checkBoxDiv.appendChild(checkboxLabel);
  i++;
}

document.getElementById("addBoxButton").addEventListener("click", addbox);
addbox();
