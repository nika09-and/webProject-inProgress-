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


//--------------------------------------------------------------------------------------------------------

const phone = document.getElementById("phoneIcon");
const language = document.getElementById("language");
const light = document.getElementById("lightModeIcon");
const extendedMessanger = document.getElementById("extandedMessanger");
const adminsSpaceB = document.getElementById("adminSpace");
const body = document.getElementById("body")
const mainMessage = document.getElementById("mainMessage")
const header = document.getElementById("headerId")
const home = document.getElementById("home");
const product = document.getElementById("product")
const gallery = document.getElementById("gallery")
const contact = document.getElementById("contact")
const displayPhoto = document.getElementById("displayPhoto");
let homeBackgroundColor = getComputedStyle(home).backgroundColor;
let productBackgroundColor = getComputedStyle(product).backgroundColor;



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
  if(homeBackgroundColor == "rgb(255, 210, 2)"){
    if(adminsSpaceB.textContent == "ადმინის სივრცე")
      {
        adminsSpaceB.textContent = "Admin Space";
        home.textContent = "HOME";
        product.textContent = "PRODUCT";
        gallery.textContent = "GALLERY";
      contact.textContent = "CONTACT";
      adminsSpaceB.style.fontSize = "30px";
      language.src = "icons/languageEn.png";
    }
    else{
      adminsSpaceB.textContent = "ადმინის სივრცე";
      home.textContent = "სახლი";
      product.textContent = "პროდუქტი";
      gallery.textContent = "გალერია";
      contact.textContent = "კონტაქტი";
      
      adminsSpaceB.style.fontSize = "25px";
      language.src = "icons/languageGe.png"
    }
  }
  else if(productBackgroundColor == "rgb(255, 210, 2)"){
    
    if(home.textContent == "სახლი"){
        home.textContent = "HOME";
        product.textContent = "PRODUCT";
        gallery.textContent = "GALLERY";
        contact.textContent = "CONTACT";
        language.src = "icons/languageEn.png";
    }
    else{
      home.textContent = "სახლი";
      product.textContent = "პროდუქტი";
      gallery.textContent = "გალერია";
      contact.textContent = "კონტაქტი";
      
      language.src = "icons/languageGe.png"
    }
  }

}

let lightIndex = 1;
function lightup(){
  if(homeBackgroundColor == "rgb(255, 210, 2)"){
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
  else if(productBackgroundColor == "rgb(255, 210, 2)"){
    console.log("traki");
  }
}

phone.addEventListener('click',() => messangerExtend());
light.addEventListener('click', () =>  lightup());
language.addEventListener('click', () => click());

//display working

let currentImageIndex = 0;

const images = [
  "images/displayImages/display_1.png",
  "images/displayImages/display_2.png",
  "images/displayImages/display_3.png"
];

function changePhoto() {
  if(productBackgroundColor == "rgb(255, 210, 2)"){
  setTimeout(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const newImageSrc = images[currentImageIndex];

    const newImage = document.createElement('img');
    newImage.src = newImageSrc;
    newImage.id = 'displayPhoto';
    newImage.style.position = 'absolute';
    newImage.style.top = '0';
    newImage.style.left = '100%';
    newImage.style.width = '100%';
    newImage.style.height = '100%';
    newImage.style.objectFit = 'cover';
    newImage.style.transition = 'transform 1s ease-in-out';

    document.getElementById('productsDisplay').appendChild(newImage);


    setTimeout(() => {
      newImage.style.transform = 'translateX(-100%)';
    }, 50);

    setTimeout(() => {
      displayPhoto.remove();
    }, 1050);
  }, 1000);
  }
  else {return;}
}

setInterval(changePhoto, 5000);


const scrollArea = document.getElementById("scrollArea");
const popularProducts = document.getElementById("popularProducts");

// Listen for mouse wheel events on the larger scroll area
scrollArea.addEventListener("wheel", (event) => {
    event.preventDefault(); // Prevent default vertical scrolling
    popularProducts.scrollLeft += event.deltaY; // Scroll horizontally
});
