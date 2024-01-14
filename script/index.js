function menuItems() {
            let contain = document.getElementById("contain");
            let arr2 = JSON.parse(localStorage.getItem("cartMeal")) || [];
            
            document.querySelector(".count").textContent = `Cart Items:- ${arr2.length}`;

            async function displayMeal() {
                try {
                    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);

                    let data = await res.json();

                    let meal = data.categories;

                    // console.log("meal:",meal); 
                    appendDishes(meal);

                }
                catch {
                    console.log("err");
                }
            }
            displayMeal();
            function appendDishes(arr) {
                arr.forEach(function (ele, index) {
                    //console.log(ele.strCategory);
                    let div1 = document.createElement("div");
                    div1.setAttribute("class","refresh");
                    let thumb = document.createElement("img");
                    thumb.src = ele.strCategoryThumb;
                    let price = ele.price = 100 + Math.floor(Math.random() * 500);
                    let p = document.createElement("p");
                    p.innerText = `Price:- ${price}`;


                    let btn = document.createElement("button");
                    btn.innerText = "Add To Cart";

                    btn.addEventListener("click", function () {
                        
                        addToCart(ele);
                    })
                    div1.append(thumb,p, btn);
                    contain.append(div1);
                })
            }
            function addToCart(ele) {
                arr2.push(ele);

                localStorage.setItem("cartMeal", JSON.stringify(arr2));

                document.querySelector(".count").textContent = `Cart Items:- ${arr2.length}`;

            }
        }