
//console.log("Java script working");



// Get references to buttons and divs
const buttons = document.querySelectorAll(".menu-button"); // Select all buttons with class "menu-button"
const rotisDiv = document.getElementById("rotisd");
const curriesDiv = document.getElementById("curriesd");
const startersDiv = document.getElementById("startersd");
const dessertsDiv = document.getElementById("dessertsd");
const healthynheartyDiv = document.getElementById("healthynheartyd");
const soupsDiv = document.getElementById("soupsd");
const beveragesDiv = document.getElementById("beveragesd");
const snacksDiv = document.getElementById("snacksd");


// Function to hide all divs
function hideAllDivs() {
  rotisDiv.style.display = "none";
  curriesDiv.style.display = "none";
  startersDiv.style.display = "none";
  dessertsDiv.style.display = "none";
  healthynheartyDiv.style.display = "none";
  soupsDiv.style.display = "none";
  beveragesDiv.style.display = "none";
  snacksDiv.style.display = "none";
  
}

// Add click event listeners to buttons
buttons.forEach(button => {
  button.addEventListener("click", function() {
    const clickedButton = this; // Get the clicked button
    const sectionToShow = clickedButton.id;
    console.log(sectionToShow) // Extract identifier (button text here)
    const correspondingDiv = document.getElementById(sectionToShow+"d");
    hideAllDivs();
    correspondingDiv.style.display = "grid";
    
  });
});

var rotisdiv = document.getElementById("rotis");


function show_curries(){
    const curriesdiv = document.getElementById("curries");
    curriesdiv.style.display = 'grid';
    rotisdiv.style.display = 'none';

}
function show_starters(){
    const startersdiv = document.getElementById("starters");
    startersdiv.style.display = 'grid';
    console.log(rotisdiv.style.display)
    rotisdiv.style.display = 'none';
    console.log(rotisdiv.style.display);

}
function show_desserts(){
    const dessertsdiv = document.getElementById("desserts");
    dessertsdiv.style.display = 'grid';
    rotisdiv.style.display = 'none';

}
function show_healthynhearty(){
    const healthynheartydiv = document.getElementById("healthynhearty");
    healthynheartydiv.style.display = 'grid';
    rotisdiv.style.display = 'none';

}
function show_soups(){
    const soupsdiv = document.getElementById("soups");
    soupsdiv.style.display = 'grid';
    rotisdiv.style.display = 'none';

}
function show_beverages(){
    const beveragesdiv = document.getElementById("beverages");
    beveragesdiv.style.display = 'grid';
    rotisdiv.style.display = 'none';

}
function show_snacks(){
    const snacksdiv = document.getElementById("snacks");
    snacksdiv.style.display = 'grid';
    rotisdiv.style.display = 'none';

}
function show_starters(){
    const startersdiv = document.getElementById("starters");
    startersdiv.style.display = 'grid';
    rotisdiv.style.display = 'none';

}


var rotis = [
    {title: 'Tawa roti' , description: '' , price: '₹10'},
    {title: 'Multi grain roti' , description: 'roti made up of wheat, gram, jowar, ragi' , price: '₹15'},
    {title: 'Naan' , description: 'maida roti cooked in tandoor' , price: '₹12'},
    {title: 'Bajra roti' , description: '' , price: '₹12'},
    {title: 'Makke di roti' , description: 'Corn flour roti' , price: '₹12'},

];
var curries = [
    {title: 'rajma' , description: 'Red bean, tomato pulp' , price: '₹100'},
    {title: 't1' , description: 'd1' , price: 'p1'},
    {title: 't1' , description: 'd1' , price: 'p1'},
    {title: 't1' , description: 'd1' , price: 'p1'},
    {title: 't1' , description: 'd1' , price: 'p1'},

];
var starters = [
    {title: 'starter1' , description: 'd1' , price: 'p1'},
    {title: 't1' , description: 'd1' , price: 'p1'},
    {title: 't1' , description: 'd1' , price: 'p1'},
    {title: 't1' , description: 'd1' , price: 'p1'},
    {title: 't1' , description: 'd1' , price: 'p1'},

];
var desserts = [
    {title: 't1' , description: 'd1' , price: 'p1'},
    {title: 't1' , description: 'd1' , price: 'p1'},
    {title: 't1' , description: 'd1' , price: 'p1'},
    {title: 't1' , description: 'd1' , price: 'p1'},
    {title: 't1' , description: 'd1' , price: 'p1'},

];
var healthynhearty = [
    {title: 't1' , description: 'd1' , price: 'p1'},
    {title: 't1' , description: 'd1' , price: 'p1'},
    {title: 't1' , description: 'd1' , price: 'p1'},
    {title: 't1' , description: 'd1' , price: 'p1'},
    {title: 't1' , description: 'd1' , price: 'p1'},

];
var soups = [
    {title: 't1' , description: 'd1' , price: 'p1'},
    {title: 't1' , description: 'd1' , price: 'p1'},
    {title: 't1' , description: 'd1' , price: 'p1'},
    {title: 't1' , description: 'd1' , price: 'p1'},
    {title: 't1' , description: 'd1' , price: 'p1'},

];
var beverages = [
    {title: 't1' , description: 'd1' , price: 'p1'},
    {title: 't1' , description: 'd1' , price: 'p1'},
    {title: 't1' , description: 'd1' , price: 'p1'},
    {title: 't1' , description: 'd1' , price: 'p1'},
    {title: 't1' , description: 'd1' , price: 'p1'},

];
var snacks = [
    {title: 't1' , description: 'd1' , price: 'p1'},
    {title: 't1' , description: 'd1' , price: 'p1'},
    {title: 't1' , description: 'd1' , price: 'p1'},
    {title: 't1' , description: 'd1' , price: 'p1'},
    {title: 't1' , description: 'd1' , price: 'p1'},

];


function createcard(dish) {
    return ` 
    <div class="listing">
      <div class="button-trial" >
      <h2 class="dish-title" style="font-family:Space Gortesk; font-size: 20px">${dish.title}</h2>
      <button class="adding-button" ><img src="cart-plus-icon.png" class="add-cart"></button>
      </div>
        <p class="dish-description">${dish.description}</p>
        <p class="listing-price">${dish.price}</p>
    </div>
    `;
  }


 function renderlistings(){
    var rotisdiv = document.getElementById("rotisd");
    rotisdiv.innerHTML = rotis.map(createcard).join('');

    var curriesdiv = document.getElementById("curriesd");
    curriesdiv.innerHTML = curries.map(createcard).join('');
    
    var startersdiv = document.getElementById("startersd");
    startersdiv.innerHTML = starters.map(createcard).join('');
    
    var dessertsdiv = document.getElementById("dessertsd");
    dessertsdiv.innerHTML = desserts.map(createcard).join('');
    
    var healthynheartydiv = document.getElementById("healthynheartyd");
    healthynheartydiv.innerHTML = healthynhearty.map(createcard).join('');
    
    var soupsdiv = document.getElementById("soupsd");
    soupsdiv.innerHTML = soups.map(createcard).join('');
    
    var beveragesdiv = document.getElementById("beveragesd");
    beveragesdiv.innerHTML = beverages.map(createcard).join('');
    
    var snacksdiv = document.getElementById("snacksd");
    snacksdiv.innerHTML = snacks.map(createcard).join('');
 }

 let listings;

 // Render all listings on page load
 window.onload = function(){
    renderlistings();
    addTocartButton();
    addingQuantity();
    listings = document.querySelectorAll('.listing')
 };


/* made a function because "addingbuttons" variable was returning nodelist[], it was not able to detect 
"add to cart" buttons, so the function delays it and makes the querySelector to fetch elements after 
all elements are rendered, by using window.onload */
const proceedToCart = document.querySelector('.checkout-btn')
function addTocartButton(){
 const addingbuttons = document.querySelectorAll('.adding-button');
 
 console.log(addingbuttons)
 addingbuttons.forEach(button => {
    button.addEventListener("click", function() {
     const clickedbutton = this;
     const listingdiv = clickedbutton.closest('.listing');
     const productName = listingdiv.querySelector('.dish-title').textContent;
     const productdescp = listingdiv.querySelector('.dish-description').textContent;
     const productprice = listingdiv.querySelector('.listing-price').textContent;
     
     
    
     console.log(`Adding dish ${productName} with price ${productprice}`); 
     assignToPopup(productName,productdescp,productprice);
    //  calculatePriceFunction()
    

     });
     

});

}



// let basePrice
let calculatePriceFunction

function assignToPopup(newTitle, newDescription, newPrice){
    const quantityWindow = document.getElementById('quantitywindow');
    quantityWindow.querySelector("h2").textContent = newTitle;
    quantityWindow.querySelector("p:nth-child(2)").textContent = newDescription; // Target the second paragraph
    const priceSpan = document.getElementById("finalPrice"); // Target the price paragraph
    const backdrop = document.querySelector('.backdrop');
    priceSpan.textContent = newPrice; 
    // basePrice=newPrice.slice(1)
    quantityWindow.classList.add('active') ;
    backdrop.classList.add('active');
    const quantityText = document.getElementById('quantity');
    // var quantity = parseInt(quantityText.textContent)
    quantityText.textContent = 1;
    // addtocart()
    // editQunatity()
    calculatePriceFunction = calculatePrice();
    calculatePriceFunction()
    searchDuplicate()
}

const closebutton = document.getElementById('close-button');
const backdrop = document.querySelector('.backdrop');
const modal = document.getElementById('quantitywindow');

closebutton.addEventListener("click", () => {

    modal.classList.remove('active');
    backdrop.classList.remove('active');

    
    }
)



function calculatePrice() {
    
     // Declare basePrice inside the function (private to the closure)
    let basePrice; 
    let finalPriceText = document.getElementById('finalPrice');
    const finalPrice = parseInt(finalPriceText.textContent.slice(1))
    console.log("outer function")
    console.log("fP = " + finalPrice);

    return () => { // Inner function returned by calculatePrice
      
        const quantityText = document.getElementById('quantity');
        let quantity = parseInt(quantityText.textContent)    

        if (!basePrice) {
        console.log("Inside if ")
        
        basePrice = finalPrice / quantity  // Extract base price only once
        }
        
        console.log("Inner function")
        console.log("bP = " + basePrice);
        console.log(quantity)
        let finalprice = basePrice * quantity ; 
        finalPriceText.innerText = `₹${finalprice}`;
        
    };
   
}





function addingQuantity(){

    const addButton = document.getElementById('add-button')
    const minusButton = document.getElementById('minus-button')
    
    
    
    addButton.addEventListener("click", () => {
        const quantityText = document.getElementById('quantity');
        proceedToCart.style.display = "block"
        var quantity = parseInt(quantityText.textContent)
        if(quantity<15)
        quantity = quantity + 1;
        console.log(quantity);
        quantityText.innerText = quantity;
        calculatePriceFunction()
    
    })
    
    // var quantity = parseInt(quantityText.textContent)
    minusButton.addEventListener("click", () => {
        const quantityText = document.getElementById('quantity');
        var quantity = parseInt(quantityText.textContent)
        if(quantity>1){
        quantity = quantity - 1;
        console.log(quantity);
        quantityText.innerText = quantity;
        calculatePriceFunction()
        }
    })
    
}


const editButtonTemplate = `
  <div class="edit-buttons">
    <button class="edit-btn">
    <img class="edit-img" src="edit-246.png" alt=""> 
    </button>
    <button class="delete-btn">
        <img class="delete-img" src="delete-button.png" alt=""> 
    </button>
  </div>
`;



const addTocartB = document.querySelector('.total')
const satusEmpty = document.querySelector('.satus-empty')
const itemsAdded = document.querySelector('.items-added')
const checkoutBtn = document.querySelector('.checkout-btn') 
let totalAmnt = 0 ;


addTocartB.addEventListener("click", () => {

    const priceSpan = document.getElementById("finalPrice");
    const totalAmount = document.getElementById("totalAmount");
    let fPrice = priceSpan.textContent
    const quantityWindow = document.getElementById('quantitywindow');
    let pName = quantityWindow.querySelector("h2").textContent;
    const quantityText = document.getElementById('quantity');
    let quantity = parseInt(quantityText.textContent)
    fPriceValue = parseInt(fPrice.slice(1))
    // totalAmnt = totalAmnt + fPriceValue ;
    // console.log(totalAmnt);
    totalAmount.textContent = `₹${totalAmnt}`;

    satusEmpty.style.display ="none"
    itemsAdded.style.display ="block"
    checkoutBtn.style.display = "block"
    modal.classList.remove('active');
    backdrop.classList.remove('active');
    if(searchDuplicate()){
        console.log("Inside if of add to cart button")
        let duplicateRow = searchDuplicate();
        let spanElement = duplicateRow.querySelector('.cartQnty')
        spanElement.textContent = ` x${quantity}`
        let fPriceElement = duplicateRow.cells[2];
        fPriceElement.textContent = fPrice
        calculateTotal()

        return
    }
    adjustDivHeight()           // To adjust cart height
    const cartItems = document.getElementById('tBody')
    const row = document.createElement('tr')
    const pname = document.createElement('td')
    const dishQuantity = document.createElement('span')
    const edits = document.createElement('td')
    const totalpr = document.createElement('td')
    edits.innerHTML = editButtonTemplate

    pname.textContent = pName
    dishQuantity.textContent = ` x${quantity}`
    dishQuantity.classList.add('cartQnty')
    totalpr.textContent = fPrice
    pname.appendChild(dishQuantity)
    row.appendChild(pname)
    row.appendChild(edits)
    row.appendChild(totalpr)
    cartItems.appendChild(row) 
    calculateTotal()

    // addDeleteButton()
});  
    

// function addDeleteButton(){

    const tableBody = document.querySelector('tbody'); // Select the table body
    console.log(tableBody)
    tableBody.addEventListener('click', (event) => {
        console.log("There is a click")
        
        const deleteButton = event.target ;
        evaluatePrice(deleteButton);
        console.log(event.target)
        
        if (event.target.classList.contains('delete-img')) {           // Check if the clicked element is a delete button
        const tableRow = event.target.closest('tr');             // Get the parent TR element using event.target.closest('tr')
        if (tableRow) {
        tableRow.remove();                                      // Remove the TR element from the DOM
        if(tableBody.children.length == 0){
            satusEmpty.style.display ="block"
            itemsAdded.style.display ="none"
            proceedToCart.style.display = "none"
            
            totalAmnt = 0
        }
        } else {
        // Handle potential errors: button not within a TR
        console.error('Delete button not found within a table row');
        }
  }
});


function evaluatePrice(deletebtn){

    if (deletebtn.classList.contains('delete-img')) {
        const deletedRow = deletebtn.closest('tr')
        const deletedPriceText = deletedRow.querySelector("td:nth-child(3)").textContent
        const deletedPrice = parseInt(deletedPriceText.slice(1));
        totalAmnt = totalAmnt - deletedPrice ;
        console.log(deletedPrice) 
        const totalAmount = document.getElementById("totalAmount");
        totalAmount.textContent = `₹${totalAmnt}`;
    }

    
    if(deletebtn.classList.contains('edit-img')){
    
        // let editButtons = document.querySelector('edit-btn')
        const tableRow = deletebtn.closest('tr');
        const tdElement = tableRow.querySelector('td:nth-child(1)');
        const tableFinalPrice = tableRow.querySelector('td:nth-child(3)').textContent;
        const textInsideTd = tdElement.textContent;
        const spanElement = tdElement.querySelector('span');
        const textInsideSpan = spanElement ? spanElement.textContent : '';
        const currntQuantity = textInsideSpan.slice(2).trim();
        // Exclude the text inside the span
        const onlyDishName = textInsideTd.replace(textInsideSpan, '');

        console.log(onlyDishName); // This will log the desired text

        listings.forEach(listing => {
            
            const title = listing.querySelector('h2').textContent;
            const description = listing.querySelector("p:nth-child(2)").textContent;
            const quantityWindow = document.getElementById('quantitywindow');
            const quantityTag = document.getElementById('quantity')
            const finalPrice = document.getElementById('finalPrice')

            if(onlyDishName == title){
                console.log(description)
                console.log(currntQuantity)
                quantityWindow.querySelector("h2").textContent = title;
                quantityWindow.querySelector("p:nth-child(2)").textContent = description;
                quantity.textContent = currntQuantity;
                finalPrice.textContent = tableFinalPrice;

                modal.classList.add('active');
                backdrop.classList.add('active')

                quantityTag.textContent = currntQuantity
                calculatePriceFunction =  calculatePrice();
                calculatePriceFunction();
            }
            else{
                // console.log(title+"\n")
            }

        })

    }
}   


// function editQunatity(){

    
//     editButtons.removeEventListener("click");
//     editButtons.addEventListener("click", (event) =>{
        
//         // const editButton = event.target;
        

//     })

// }


// const tdElement = document.querySelector('td'); // Replace with your actual selector

function searchDuplicate(){
    const quantityWindow = document.getElementById('quantitywindow');
    let title = quantityWindow.querySelector("h2").textContent
    let statusNonEmpty = document.querySelector('.items-added');
    let tBody = document.getElementById('tBody');
    let rows = tBody.rows;
    let modalQuanty = document.getElementById('quantity')
    let modalFPrice = document.getElementById('finalPrice')
    if(statusNonEmpty.style.display == "block"){

        console.log("Some items in the list")
        console.log(rows)

        for (let i = 0; i < rows.length; i++) {
        let currentRow = rows[i];
        let firstCell = currentRow.cells[0];
        let thirdCell = currentRow.cells[2];
        let fPriceInCart = thirdCell.textContent;
        console.log("value in third cell-", fPriceInCart )
        console.log("firstCell - ", firstCell)
        let spanElement = firstCell.querySelector('.cartQnty');
        console.log("childElement - ", spanElement)
        console.log("Number of children in firstCell:", firstCell.children.length);
        // Check if the pElement exists and is indeed a p tag
        // if (pElement && pElement.tagName.toLowerCase() === 'p') {
        // Get the first child element of the p element (assuming it's the span element)
            // let spanElement = childElement.firstChild;
            let spanValue = spanElement.textContent
            let tableQuantity = spanValue.slice(2)
            let cellContent = firstCell.textContent;
            if (cellContent.includes(title)){

                console.log("There's a match")
                console.log("quantity in cart - ", tableQuantity)
                modalQuanty.textContent = tableQuantity
                modalFPrice.textContent = fPriceInCart

                return currentRow

            //}
            }
        // console.log("Name of dish:", cellContent)
        
        }
    }

}

function calculateTotal(){

    let totalAmountElement = document.getElementById("totalAmount");
    let tBody = document.getElementById('tBody');
    let rows = tBody.rows;
    totalAmnt = 0
    for (let i = 0; i < rows.length; i++) {
        let currentRow = rows[i];
        let fPriceElement = currentRow.cells[2]
        let fPrice = parseInt(fPriceElement.textContent.slice(1))
        totalAmnt = totalAmnt + fPrice
        
    }

    totalAmountElement.textContent = `₹${totalAmnt}`;
}


function adjustDivHeight() {
    console.log("Adjst div height function")
    const Inpagecart = document.querySelector(".inpage-cart");
    const Itemsadded = document.querySelector(".items-added");
    const Cartheight = Inpagecart.offsetHeight;
    const Addedheight = Itemsadded.offsetHeight;
    
    console.log("Added height - " + Addedheight)
    console.log("cart height - " + Cartheight)
    if (Cartheight - Addedheight <= 40) {

        console.log("Subtr- " + (Cartheight - Addedheight))
      Inpagecart.style.height = `${Cartheight + 15}px`;
    }
  }