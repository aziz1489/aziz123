document.addEventListener("keydown", (event) => {
  const aziz = document.querySelector("v1");
  const key = event.key; 
  document.querySelector(".v1").innerText = key;
  
});
document.addEventListener("keydown", (event) => {
  const aziz2 = document.querySelector("v2");
  const code = event.code;  
  document.querySelector(".v2").innerText = code;
  
});
document.addEventListener("keydown", (event) => {
  const aziz3 = document.querySelector("v1");
  const keyCode = event.keyCode; 
  document.querySelector(".v3").innerText = keyCode;
  
});
