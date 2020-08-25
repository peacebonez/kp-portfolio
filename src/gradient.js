//functions and variables pertaining to the shifting gradient background

export default function () {
  let hue = 200;
  let light = 65;
  let deg = 90;
  let flagHue = true;
  let flagLight = true;
  let flagDeg = true;

  //triggers the interval

  let colorIncrement = () => setInterval(colorFunc, 150);

  function colorFunc() {
    // Hue alteration
    if (hue === 360 || hue === 0) flagHue = !flagHue;

    if (flagHue) {
      hue += 0.5;
      // console.log('Hue up:', hue);
    } else {
      hue -= 0.5;
      // console.log('Hue down:' ,hue);
    }

    // Light alteration
    if (light < 49 || light > 99) flagLight = !flagLight;

    if (flagLight) {
      light += 0.1;
      // console.log("Light up:", Math.round(light));
    } else {
      light -= 0.1;
      // console.log("Light down:", Math.round(light));
    }

    //Gradient degree alteration
    if (deg === 360 || deg === 0) flagDeg = !flagDeg;

    if (flagDeg) {
      deg++;
      // console.log("Deg up:", Math.round(deg));
    } else {
      deg--;
      // console.log("Deg down:", Math.round(deg));
    }
    // bodyMain.style.backgroundImage = `linear-gradient(${deg}deg, hsl(${hue}, 50%, ${light}%), hsl(${hue + 30}, 50%, ${light + 20}%))`;

    document.body.style.backgroundImage = `linear-gradient(${deg}deg, hsl(${hue}, 100%, ${light}%), hsl(${
      hue + 30
    }, 100%, ${light + 20}%))`;

    // bodyMain.style.background = `hsl(${hue}, 100%, ${light}%)`; // Neon
    // bodyMain.style.background = `hsl(${hue}, 50%, ${light}%)`; // Balance between the 2
    // console.log(bodyMain.style.backgroundImage)
  }

  //calling function to gradually change the background of the website
  colorIncrement();
}
