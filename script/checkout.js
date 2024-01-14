function checkOut(){
         let name = document.querySelector("#name").value;
         let add  = document.querySelector("#address").value;
         setTimeout(function(){
             alert(`Your Order is Accepted ${name}`);
         },0);
         setTimeout(function(){
             alert(`Your Order is Being Cooked`);
         },3000);
         setTimeout(function(){
             alert("Your Order is Ready");
         },8000);
         setTimeout(function(){
             alert("Order is Out For Delivery");
         },10000);
         setTimeout(function(){
             alert("Order Delievered");
         },12000);
     }