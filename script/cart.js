 let arr3 = JSON.parse(localStorage.getItem("cartMeal")) || [];  
        let sum = 0;
        for(let i=0;i<arr3.length;i++){
            sum+=arr3[i].price;
        }
        console.log(sum);
        document.querySelector(".totalCount").textContent = `Total Items:- ${arr3.length}`;
        arr3.forEach(function(ele,index){
            
            let div1 = document.createElement("div");
             let thumb = document.createElement("img");
            thumb.src = ele.strCategoryThumb;

            let p = document.createElement("p")
            p.innerText = `Price:- ${ele.price}`;

            let btn = document.createElement("button");
            btn.textContent = "Remove";
            btn.addEventListener("click",function(){
                JSON.parse(localStorage.getItem("cartMeal"));
                removeItem(index);
                
            })
             
            div1.append(thumb,p,btn);

            document.querySelector(".context").append(div1);
        })
        function removeItem(index){
            arr3.splice(index,1);
            localStorage.setItem("cartMeal",JSON.stringify(arr3));
        }
            let p1 = document.createElement("p");
            p1.innerText = `Total Price:- ${sum} `;
            document.querySelector(".totalPrice").append(p1);