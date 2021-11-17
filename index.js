const data = [
  {
    image: "Images/8.jpg",
    title: "Storytime",
    details: "Featured . 107,268 Posts",
    color: "rgb(151,72,182)",
  },
  {
    image: "Images/6.jpg",
    title: "Metal",
    details: "5,434 Posts",
    color: "rgb(30,95,67)",
  },
  {
    image: "Images/3.jpg",
    title: "Football",
    details: "13,027 Posts",
    color: "rgb(170,51,230)",
  },
  {
    image: "Images/4.jpg",
    title: "Secret Santa",
    details: "50,306 Posts",
    color: "rgb(36,86,94)",
  },
  {
    image: "Images/5.jpg",
    title: "Steve Irwin",
    details: "496 Posts",
    color: "rgb(129,176,87)",
  },
  {
    image: "Images/2.jpg",
    title: "Inspiring",
    details: "84,759 Posts",
    color: "rgb(80,83,90)",
  },
  {
    image: "Images/7.png",
    title: "Family",
    details: "7,543 Posts",
    color: "rgb(21,149,89)",
  },
  {
    image: "Images/1.jpg",
    title: "Cat",
    details: "260,934 Posts",
    color: "rgb(46,167,153)",
  },
  {
    image: "Images/9.png",
    title: "Food",
    details: "75,514 Posts",
    color: "rgb(59,163,177)",
  },
];

const exploreElem = document.getElementById("exploreElem");

const addData = (el) => {
  el.map((e, index) => {
    let div = document.createElement("div");
    if (index === 0) div.setAttribute("class", "sliderCard1");
    else div.setAttribute("class", "sliderCard");
    div.style.backgroundImage = `url(${e.image})`;
    let innerDiv = document.createElement("div");
    let dummyDiv = document.createElement("div");
    dummyDiv.setAttribute("class", "dummyDiv");
    innerDiv.setAttribute("class", "innerDIv");
    let b1 = document.createElement("b");
    b1.setAttribute("class", "b1");
    b1.innerText = e.title;
    let b2 = document.createElement("b");
    b2.setAttribute("class", "b2");
    b2.innerText = e.details;
    innerDiv.append(b1, b2);
    innerDiv.style.backgroundColor = e.color;
    console.log(e.color);
    div.append(dummyDiv, innerDiv);
    exploreElem.append(div);
  });
};

addData(data);
