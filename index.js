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
  el.forEach((e, index) => {
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
    div.append(dummyDiv, innerDiv);
    exploreElem.append(div);
  });
};

addData(data);
let page = 1;
let postData = [];

const fetchData = async (page) => {
  try {
    await fetch(
      `https://api.unsplash.com/search/photos?page=${page}&per_page=40&query=L&client_id=WlWzYioYsw1MAtzuh30oNc7ROz--nua0jFHi0urNhvs`
    )
      .then((res) => res.json())
      .then((res) => {
        postData = [...postData, ...res.results];
        console.log("Data", postData);
      });
  } catch (err) {
    console.log(err);
  }
  fillData(postData);
};

fetchData();

let column1 = document.getElementById("column1");
let column2 = document.getElementById("column2");
let column3 = document.getElementById("column3");
let column4 = document.getElementById("column4");

const fillData = (el) => {
  el.forEach((e, i) => {
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "mainPostDiv");
    let inneimgrDiv = document.createElement("div");
    inneimgrDiv.setAttribute("class", "inneimgrDiv");
    let img = document.createElement("img");
    img.src = e?.urls?.small;
    let bottomDiv = document.createElement("div");
    bottomDiv.setAttribute("class", "bottomDiv");
    let innerAction = document.createElement("div");
    innerAction.setAttribute("class", "innerAction");

    let b = document.createElement("p");
    b.setAttribute("class", "boldDiv");
    b.innerText = e?.description || e?.alt_description;

    let firstAction = document.createElement("div");
    let span1 = document.createElement("span");
    span1.setAttribute("class", "material-icons");
    span1.innerText = "arrow_upward";
    let span2 = document.createElement("span");
    span2.setAttribute("class", "material-icons");
    span2.innerText = "arrow_downward";
    let span3 = document.createElement("span");
    span3.setAttribute("class", "likes");
    span3.innerText = e.likes;
    firstAction.append(span1, span3, span2);
    firstAction.setAttribute("class", "actions");

    let secondAction = document.createElement("div");
    secondAction.setAttribute("class", "actions");
    let span4 = document.createElement("span");
    span4.setAttribute("class", "material-icons");
    span4.innerText = "chat_bubble_outline";
    let span5 = document.createElement("span");
    span5.setAttribute("class", "likes");
    span5.innerText = Math.abs(Math.floor(i + (10 * 25) / 5));
    secondAction.append(span4, span5);

    let thirdAction = document.createElement("div");
    thirdAction.setAttribute("class", "actions");
    let span6 = document.createElement("span");
    span6.setAttribute("class", "material-icons");
    span6.innerText = "visibility";
    let span7 = document.createElement("span");
    span7.setAttribute("class", "likes");
    span7.innerText = Math.abs(Math.floor(i + (10 * 5) / 3));
    thirdAction.append(span6, span7);

    innerAction.append(firstAction, secondAction, thirdAction);
    bottomDiv.append(b, innerAction);
    inneimgrDiv.append(img, bottomDiv);
    mainDiv.append(inneimgrDiv);
    if (i % 4 === 0) {
      column1.append(mainDiv);
    } else if (i % 3 === 0) {
      column2.append(mainDiv);
    } else if (i % 2 === 0) {
      column3.append(mainDiv);
    } else {
      column4.append(mainDiv);
    }
  });
};

window.onscroll = function () {
  var difference = document.documentElement.scrollHeight - window.innerHeight;
  var scrollposition = document.documentElement.scrollTop;
  if (difference - scrollposition <= 2) {
    fetchData(page++);
  }
};
