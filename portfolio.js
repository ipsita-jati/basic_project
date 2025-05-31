const buttons = document.getElementsByClassName('button');
const tabs = document.getElementsByClassName('tab');
const bt2 = document.getElementById('bt2');

function opentab(tabname){
    for(but of buttons){
        but.classList.remove('active');
    }
    for(t of tabs){
        t.classList.remove('active');
    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active");
}

function show(tab){
    document.getElementById(tab).classList.remove('pri');
    bt2.classList.add('pri');
}

function hide(tab){
    document.getElementById(tab).classList.add('pri');
    bt2.classList.remove('pri');
}

function download(){
    const pdf = document.querySelector(".main");
    html2pdf().from(pdf).save();
}

const typed = new Typed('.profession',{
    strings: ['Web Developer.','Full Stack Developer.','Dancer.','Painter.'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

var xValues = ["Creativity", "Communication", "Problem Solving", "Team Work"];
var yValues = [86, 69, 74, 92];
var barColors = ["red", "green","blue","orange"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
  }
});


