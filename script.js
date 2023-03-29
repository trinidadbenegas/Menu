//local database
const menu = [
    {
    id:1,
    title: "Daikiri Floral",
    category: "drinks",
    price: 15.99,
    img: "./img/item-1-drink.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis beatae eum sunt. Labore velit minus adipisci laboriosam consectetur assumenda?"
},
{
    id: 2 ,
    title: "Mojito Tropical",
    category:"drinks",
    price: 20.99,
    img:"./img/item-2-drink.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis beatae eum sunt. Labore velit minus adipisci laboriosam consectetur assumenda?,"
},{
    id: 3,
    title: "Margarita Pink",
    category:"drinks",
    price: 18.99,
    img:"./img/item-3-drink.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis beatae eum sunt. Labore velit minus adipisci laboriosam consectetur assumenda?",
},{
    id: 4,
    title:"Martini Chic",
    category: "drinks",
    price: 21.99,
    img:"./img/item-4-drink.jpg",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis beatae eum sunt. Labore velit minus adipisci laboriosam consectetur assumenda?",
},{
    id: 5,
    title: "Giny Tonic",
    category:"drinks",
    price: 22.99,
    img:"./img/item-5-drink.jpg",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis beatae eum sunt. Labore velit minus adipisci laboriosam consectetur assumenda?",
},{
    id: 6,
    title:"Pink Island",
    category:"drinks",
    price: 23.99,
    img:"./img/item-6-drink.jpg",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis beatae eum sunt. Labore velit minus adipisci laboriosam consectetur assumenda?",
},{
    id: 7,
    title: "Pink Nails",
    category: "drinks",
    price: 22.99,
    img:"./img/item-7-drink.jpg",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis beatae eum sunt. Labore velit minus adipisci laboriosam consectetur assumenda?",
},{
    id: 8,
    title:"Milshake Donna",
    category: "breakfast",
    price: 13.99,
    img:"./img/item-8-breakfast.jpg",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis beatae eum sunt. Labore velit minus adipisci laboriosam consectetur assumenda?",
},{
    id: 9,
    title: "Frutal Tower Cake",
    category:"breakfast",
    price: 23.99,
    img:"./img/item-9-breakfast.jpg",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis beatae eum sunt. Labore velit minus adipisci laboriosam consectetur assumenda?",
},{
    id: 10,
    title:"Strawberry Hotcakes",
    category:"breakfast",
    price: 15.99,
    img:"./img/item-10-breakfast.jpg",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis beatae eum sunt. Labore velit minus adipisci laboriosam consectetur assumenda?",
},{
    id: 11,
    title: "Cherry Glow",
    category:"breakfast",
    price: 17.95,
    img:"./img/item-11-breakfast.jpg",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis beatae eum sunt. Labore velit minus adipisci laboriosam consectetur assumenda?",
},{
    id: 12,
    title:"Rose Petal Cake",
    category:"breakfast",
    price: 25.95,
    img:"./img/item-12-breakfast.jpg",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis beatae eum sunt. Labore velit minus adipisci laboriosam consectetur assumenda?",
},{
    id: 13,
    title:"Cherry Blossom Latte",
    category:"breakfast",
    price:21.95,
    img:"./img/item-13-breakfast.jpg",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis beatae eum sunt. Labore velit minus adipisci laboriosam consectetur assumenda?",
},{
    id: 14,
    title:"Hamburger Rose",
    category:"lunch",
    price: 26.55,
    img:"./img/item-14-lunch.jpg",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis beatae eum sunt. Labore velit minus adipisci laboriosam consectetur assumenda?",
},{
    id: 15,
    title: "Sushi Flowers",
    category: "lunch",
    price: 100.99,
    img:"./img/item-15-lunch.jpg",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis beatae eum sunt. Labore velit minus adipisci laboriosam consectetur assumenda?",
},{
    id: 16,
    title: "Taco Pink",
    category: "lunch",
    price: 89.99,
    img:"./img/item-16-lunch.jpg",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis beatae eum sunt. Labore velit minus adipisci laboriosam consectetur assumenda?",
},{
    id: 17,
    title: "Ravioli Rosatta",
    category:"lunch",
    price: 90.55,
    img:"./img/item-17-lunch.jpg",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis beatae eum sunt. Labore velit minus adipisci laboriosam consectetur assumenda?",
},{
    id: 18,
    title:"Petal Nacho",
    category:"lunch",
    price:31.99,
    img:"./img/item-18-lunch.jpg",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis beatae eum sunt. Labore velit minus adipisci laboriosam consectetur assumenda?",
},{
    id: 19,
    title: "Pasta Pinky",
    category: "lunch",
    price:23.99,
    img:"./img/item-19-lunch.jpg",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus perferendis beatae eum sunt. Labore velit minus adipisci laboriosam consectetur assumenda?",
},
]


const main = document.getElementById('menu-items');
const btnContainer = document.getElementById('buttons-container');
//load items
window.addEventListener("DOMContentLoaded", function(){ 
    displayMenuItems(menu);
    displayButtons();
    

    });

    //function to display items
    function displayMenuItems(menuItems){

        let items = menuItems.map(function(item){

            return `<article class="menu-products">
            <div class="img-item">
                <img src=${item.img} alt=${item.title} class="imgs">
            </div>
            <div class="item-name-price">
                <h2>${item.title}</h2>
                <h2>${item.price}</h2>
            </div>
            <p class="prod-description">${item.desc}</p>
        </article>`
        })
        
        main.innerHTML= items.join("")  
}

//function to display buttons
function displayButtons(){
    //find unique categories
    const categories= menu.reduce(function(allCategories, eachItem){
        if (!allCategories.includes(eachItem.category)){
            allCategories.push(eachItem.category);
        }
        return allCategories
    }, ["all"]
    );
    //returns buttons for each category
    const btnsCategories= categories.map(function(eachCategory){
        return `<button class="filter-btns" type="button" data-category=${eachCategory}>${eachCategory}</button>`
    }).join("");
    //display buttons
    btnContainer.innerHTML= btnsCategories;

    const filterBtns = document.querySelectorAll('.filter-btns');


    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e){
            const itemCategory= e.currentTarget.dataset.category;
            //filter items according to their category
            const itemsFiltered = menu.filter(function(product){
                if(product.category === itemCategory){
                    return product
                }
            });
            
            // display all categories
            if(itemCategory === "all"){
                displayMenuItems(menu);
            }
            //display elements that matches to category
            else{
                displayMenuItems(itemsFiltered);
            }
        });   
    });

}