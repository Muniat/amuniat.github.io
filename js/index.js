//travel, cats image gallery
//using ES6 (let, const, Arrow Functions)
let myFunction = imgs => {
    // Get the expanded image
    let expandImg = document.querySelector(".expandedImg");
    expandImg.innerHTML='';
    let el = document.createElement("img");
    el.src = imgs.src; //setting the src to be the same as chosen photo
    expandImg.appendChild(el);
    // Get the image text
    let imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid

    
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }

  let myFunc = imgs => {
    // Get the expanded image
    let expandImg = document.querySelector(".expandedImg1");
    expandImg.innerHTML='';
    let el = document.createElement("img");
    el.src = imgs.src; //setting the src to be the same as chosen photo
    expandImg.appendChild(el);
    // Get the image text
    let imgText = document.getElementById("imgtext1");
    
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }

  //generating random cat pic/gf
  //using ES6 (let, arrow functions)
  //fetch API
  let fetchPics = () => {
    
    let catsImgDiv = document.querySelector(".catsImg")
    catsImgDiv.innerHTML='';
    fetch("https://api.thecatapi.com/v1/images/search") .then(
    (response)=>
     response.json()
    )
    .then ((data) => {
        let catsImgUrl=data[0].url;
        let catImgEl = document.createElement("img")
        catImgEl.setAttribute('src',`${catsImgUrl}`)
        catImgEl.classList.add("showcase")
        let catsImgDiv = document.querySelector(".catsImg")
        catsImgDiv.appendChild(catImgEl);
    })
    .catch (err=>console.log(err))
}