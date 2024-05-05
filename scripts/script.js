window.onload = () =>{

  document.querySelector('.preloader').classList.add('preloadernone')

  let activeButton = document.querySelectorAll(".beforeitem");

for (let i of activeButton) {
  i.onclick = () => {
    
    i.classList.toggle("activeOpen");
    event.currentTarget.children[0].children[1].children[1].children[0].classList.toggle(
      "verticalActive"
    );
    event.currentTarget.children[1].classList.toggle("opentextActive");
  };
}

let activesNumber = document.querySelector(".activesNumber");
let jobsNumber = document.querySelector(".jobsNumber");
let consults = document.querySelector(".consults");

let int = (count, item, timee) => {
  let a = 0;
  let interval = setInterval(() => {
    a++;
    item.innerHTML = a;
    if (a == count) {
      clearInterval(interval);
      return a;
    }
  }, timee);
};

let num = document.querySelector("#numbers");
let flag = true;

window.onscroll = (e) => {

  if (window.innerHeight - num.getBoundingClientRect().y > 300) {
    if (flag) {
      int(210, jobsNumber, 15 );
      int(33, activesNumber, 65);
      int(8, consults, 400);
      flag = false;
    }
  } 
  // else if (window.innerHeight - num.getBoundingClientRect().y < -200) {
  //     jobsNumber.innerHTML = 0
  //     activesNumber.innerHTML = 0
  //     consults.innerHTML = 0
  //     flag = true;
  //   }
};






let openBio = document.querySelector('.openBio')
let wrapper2 = document.querySelectorAll('.wrapper2')
let wrapper1 = document.querySelector('.wrapper1')
let neskrit = document.querySelector('.neskrit')
let skrit = document.querySelector('.skrit')
openBio.onclick = () =>{
  for(let i of wrapper2){
    i.classList.toggle('wrapper2Active')
  }

  if(wrapper2[2].id){
    wrapper2[2].removeAttribute('id')
  }else{
    wrapper2[2].setAttribute('id','smaller')
  }

  // fourth.style = `
  // background: red !important; 
  // `
  skrit.classList.toggle('skitActive')
  neskrit.classList.toggle('neskritActive')
  wrapper1.classList.toggle('wrapper1Active')
}


let sertificats = document.querySelectorAll('#sertificat')
let showSertificate = document.querySelector('.showSertificate')

for(let sertificat of sertificats){
  sertificat.onclick = () =>{
    // console.log(event.currentTarget.children[0].src);
    // console.log();
    // console.log();
    showSertificate.classList.add('showSertificateActive')
    showSertificate.children[0].src = event.currentTarget.children[0].src
  }
}

showSertificate.onclick = () =>{
  showSertificate.classList.remove('showSertificateActive')
}
}