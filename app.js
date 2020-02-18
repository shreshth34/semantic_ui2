const color = ["linear-gradient(to right, #b2fefa, #0ed2f7)","linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b)","linear-gradient(to right, #f12711, #f5af19)" ,"linear-gradient(to right, #ee9ca7, #ffdde1)","linear-gradient(to right, #0f0c29, #302b63, #24243e)","linear-gradient(to right, #283048, #859398)", "linear-gradient(to right, #03001e, #7303c0, #ec38bc, #fdeff9)", "linear-gradient(to right, #ba8b02, #181818)", "linear-gradient(to right, #f0c27b, #4b1248)", "linear-gradient(to right, #000428, #004e92)"];

let Carr = [];
function myFunction() {
    const randomColor = color[Math.floor(Math.random() * color.length)];

    document.body.style.background = randomColor;
   
  }

document.getElementById("skill_menu").style.display = "none";

function newFunction(){

  var x = document.getElementById("skill_menu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}




function oneFunction(){

  var x = document.getElementById("past_exp_box");
  
}

document.getElementById("cert_2").style.display = "none";

document.getElementById('cert_right').onclick = () => {
  
  var newData = document.getElementById('cert_2').innerHTML;

  document.getElementById('cert_1').innerHTML = newData;

  

}



