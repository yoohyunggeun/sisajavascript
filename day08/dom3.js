/**
 * 
 */
const newDiv = document.createElement("div");
newDiv.style.width = "100px";
newDiv.style.height = "100px";
newDiv.style.border = "1px solid red";
newDiv.style.display = "flex";
newDiv.style.justifyContent = "center";
newDiv.style.alignItems = "center";
//newDiv.style.cssText=`width:100px; height:100px; border:1px solid red;`;

const newBtn = document.createElement("button");
newBtn.innerHTML="hello";
newDiv.append(newBtn);
document.body.append(newDiv);