
// const container =
// document.createElement("div");
// container.style.width = "350px";
// container.style.margin = "100px auto";
// container.style.padding = "20px";
// container.style.background = "#cc33ff"
// container.style.borderRadius = "15px";
// container.style.textAlign = "center";
// container.style.boxShadow = " 0 8px 20px rgba(0,0,0,0.3)";
// document.body.appendChild(container);

// const title = document.createElement("h2");
// title.textContent = "🎁Fun Even & Odd Checker🎁";
// title.style.color = "white";
// container.appendChild(title);

// const input =
//  document.createElement("input");
// input.type = "number"; 
// input.min = "50";
// input.placeholder = "Enter number (50+)";
// input.style.display = "block";
// input.style.margin = "15px auto"
// input.style.padding = "10px";
// input.style.marginBottom = "10px";
// input.style.borderRadius = "8px";
// input.style.border = "2px solid #fff";
// input.style.fontSize = "16px";
// input.style.width = "80%";
// input.style.boxSizing = "border-box";
// container.appendChild(input); 

// // Submit button
// const button = document.createElement("button");
// button.textContent = "Check Number!";
// button.style.background = "#ff3399";
// button.style.color = "white"; 
// button.style.padding = "10px 20px";
// button.style.border = "none";
// button.style.borderRadius = "8px";
// button.style.fontSize = "16px";
// button.style.cursor = "pointer";
// button.style.marginBottom = "20px";
// button.onmouseover = () => button.style.background = "#ff66b2";
// button.onmouseout = () => 
// button.onmouseout = () => button.style.background = "ff3399";
// container.appendChild(button); 

// const result = document.createElement("div");
// result.style.fontSize = "18px";
// result.style.fontWeight = "bold";
// result.style.padding = "15px";
// result.style.borderRadius = "10px";
// result.style.color = "white";
// container.appendChild(result);

// // Functionality
// button.addEventListener("click", ()=> {
//     let value = parseInt(input.value);
//     if (isNaN(value) || value < 50)
//     {
//         result.textContent = "⚠ Please enter a number 50 or above!";
//         result.style.background = "#ff0000";
//      } else if (value % 2 === 0) { result.textContent = `✅${value} is EVEN!`;
//         result.style.background = "#33cc33"; 
//         } else {
//             result.textContent = `🎉 $ {value} is ODD!`;
//             result.style.background = "#ff9933";
//         }
//     }); 