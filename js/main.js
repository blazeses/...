// Вкладки «Что происходит за кадром»
var texts=["Съёмка: как подготовиться к съёмке, работать с материалом и выбрать место.","Интервью: как вести себя перед камерой, работать с собеседником и проводить интервью.","Новости: как подготовить материал и наполнить выпуск новостей.","Монтаж: как отснятый материал превращается в готовую программу."];
var tabs=document.querySelectorAll(".tabs button"),out=document.getElementById("tabtext");
function show(i){tabs.forEach(function(b,k){b.setAttribute("aria-selected",k==i)});out.textContent=texts[i]}
tabs.forEach(function(b){b.onclick=function(){show(+b.dataset.t)}});show(0);

// Блок «Факультет»: точки
document.querySelectorAll(".spots button").forEach(function(b){b.onclick=function(){document.getElementById("spottext").textContent=b.dataset.s}});

// «Попробуйте себя в кадре»: камера + телесуфлёр
var btn=document.getElementById("rec"),cam=document.getElementById("cam"),msg=document.getElementById("recmsg"),tele=document.querySelector(".tele"),stream;
btn.onclick=function(){
  if(stream){stream.getTracks().forEach(function(t){t.stop()});stream=null;cam.srcObject=null;tele.classList.remove("run");btn.textContent="Начать запись";msg.textContent="Ваш первый эфир готов. Теперь попробуйте сделать репортаж.";return}
  if(!navigator.mediaDevices){msg.textContent="Камера недоступна в этом браузере.";return}
  navigator.mediaDevices.getUserMedia({video:true}).then(function(s){stream=s;cam.srcObject=s;tele.classList.add("run");btn.textContent="Закончить запись";msg.textContent="Идёт запись. Видео никуда не отправляется."}).catch(function(){msg.textContent="Нет доступа к камере. Разрешите доступ в настройках браузера."});
};
