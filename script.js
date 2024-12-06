var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);

//--------------------------------------------------------------------------------------------------------

const phone = document.getElementById("phoneIcon");
const language = document.getElementById("language");
const light = document.getElementById("lightModeIcon");
const extendedMessanger = document.getElementById("extandedMessanger");
const adminsSpaceB = document.getElementById("adminSpace");
const body = document.getElementById("body")
const mainMessage = document.getElementById("mainMessage")
const header = document.getElementById("headerId")



function messangerExtend(){
  if(extendedMessanger.style.display === "block"){
    language.style.zIndex = "1";
    light.style.zIndex = "1";
    extendedMessanger.style.display = "none";
    phone.src = "icons/phone.png"
  }
  else{
        language.style.zIndex = "-2";
        light.style.zIndex = "-2";
        extendedMessanger.style.display = "block";
        extendedMessanger.textContent = "557 778 837";
        phone.src = "icons/phoneOn.png";
}
}

function click(){

  if(adminsSpaceB.textContent == "ადმინის სივრცე")
  {
    adminsSpaceB.textContent = "Admin Space";
    adminsSpaceB.style.fontSize = "30px";
    language.src = "icons/languageEn.png";
  }
  else{
    adminsSpaceB.textContent = "ადმინის სივრცე";
    adminsSpaceB.style.fontSize = "25px";
    language.src = "icons/languageGe.png"
  }
}

let lightIndex = 1;
function lightup(){
  if(lightIndex == 1){
    light.src="icons/lightMode.png";
    body.style.backgroundColor = "#383838";
    adminsSpaceB.style.backgroundColor = "#383838";
    adminsSpaceB.style.border = "2px solid #f2f3f4";
    adminsSpaceB.style.color = "#f2f3f4";
    mainMessage.style.color = "#f2f3f4";
    header.style.backgroundColor = "#252525";
    lightIndex--;
  }
  else{
    light.src = "icons/lightModeOff.png";
    body.style.backgroundColor = "#f2f3f4";
    adminsSpaceB.style.backgroundColor = "#f2f3f4";
    adminsSpaceB.style.border = "2px solid black";
    adminsSpaceB.style.color = "black";
    mainMessage.style.color = "black";
    header.style.backgroundColor = "#e2e0e0";
    lightIndex++;
  }
}

phone.addEventListener('click',() => messangerExtend());
light.addEventListener('click', () =>  lightup());
language.addEventListener('click', () => click());