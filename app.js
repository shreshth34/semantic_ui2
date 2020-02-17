const color = ["linear-gradient(to right, #b2fefa, #0ed2f7)","linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b)","linear-gradient(to right, #f12711, #f5af19)" ,"linear-gradient(to right, #ee9ca7, #ffdde1)","linear-gradient(to right, #0f0c29, #302b63, #24243e)","linear-gradient(to right, #283048, #859398)", "linear-gradient(to right, #03001e, #7303c0, #ec38bc, #fdeff9)", "linear-gradient(to right, #ba8b02, #181818)", "linear-gradient(to right, #f0c27b, #4b1248)", "linear-gradient(to right, #000428, #004e92)"];

function myFunction() {
    const randomColor = color[Math.floor(Math.random() * color.length)];

    document.body.style.background = randomColor;
   
  }