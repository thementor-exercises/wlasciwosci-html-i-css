const boxArray = [];
let i = 1;

const onChange = (e, i) => {
  i = i - 1;

  if (e.target.checked) {
    const someStringToCheck = e.currentTarget.id;
    const indexOfSpace = someStringToCheck.indexOf("-");
    const index = parseInt(
      someStringToCheck.substr(indexOfSpace + 1, someStringToCheck.length + 1)
    );
    document.getElementById(`box-${i}`);
    let heightValue = document.getElementById(`height-${index}`).value + "px";
    let WidthValue = document.getElementById(`width-${index}`).value + "px";
    console.log("checkbox number -" + index);
    document.getElementById(`box-${index}`).style.width = WidthValue;
    document.getElementById(`box-${index}`).style.height = heightValue;
    document.getElementById(`box-${index}`).style.lineHeight = heightValue;
  } else {
    const someStringToCheck = e.currentTarget.id;
    const indexOfSpace = someStringToCheck.indexOf("-");
    const index = parseInt(
      someStringToCheck.substr(indexOfSpace + 1, someStringToCheck.length + 1)
    );
    document.getElementById(`box-${index}`).style.width = "100px";
    document.getElementById(`box-${index}`).style.height = "100px";
    document.getElementById(`box-${index}`).style.lineHeight = "100px";
  }
};

function addbox() {
  let divMainBox = document.createElement("div");
  divMainBox.id = `mainBox-${i}`;
  divMainBox.className = "mainBox";
  let divDtBorder = document.createElement("div");
  divDtBorder.className = "dtborder";
  divDtBorder.id = `box-${i}`;
  divDtBorder.innerText = "Box";
  let divDtBorder_two = document.createElement("div");
  divDtBorder_two.className = "dtborder_two";
  let divDtBorder_three = document.createElement("div");
  divDtBorder_three.className = "dtborder_three";
  let divDtBorder_four = document.createElement("div");
  divDtBorder_four.className = "dtborder_four";
  document.getElementById("main").append(divMainBox);
  divMainBox.appendChild(divDtBorder);
  divMainBox.appendChild(divDtBorder_two);
  divMainBox.appendChild(divDtBorder_three);
  divMainBox.appendChild(divDtBorder_four);

  let widthBox = document.createElement("input");
  widthBox.id = `width-${i}`;
  widthBox.className = "data";
  widthBox.type = "number";
  widthBox.placeholder = "Width";
  document.getElementById(`mainBox-${i}`).append(widthBox);
  let heightBox = document.createElement("input");
  heightBox.id = `height-${i}`;
  heightBox.className = "data";
  heightBox.type = "number";
  heightBox.placeholder = "Height";
  document.getElementById(`mainBox-${i}`).append(heightBox);

  let checkBoxDiv = document.createElement("div");
  let checkBox = document.createElement("input");
  checkBox.id = `checkbox-${i}`;
  checkBox.type = "checkbox";
  let checkboxLabel = document.createElement("label");
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
