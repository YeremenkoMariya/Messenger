import "../style/style.css"


document.querySelector("button").onclick = btn_click;


function btn_click() {
  document.getElementById('txtprev1').insertAdjacentHTML("beforeend", `<div id="block1"><p>${document.getElementById("txt1").value}</p></div>`)  ;
  document.getElementById("txt1").value = '';
  
  
  var block = document.getElementById("txtprev1");
  txtprev1.scrollTop = txtprev1.scrollHeight;
};

setInterval(func, 5000);
function func() {
 document.getElementById('txtprev1').insertAdjacentHTML("beforeend", `<p>текст входящего сообщения</p>`);

 var block = document.getElementById("txtprev1");
  txtprev1.scrollTop = txtprev1.scrollHeight;
}