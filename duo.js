


var Idrunner = 0;
var products=[];

function freeShop(type,brand,image,price,size,color){
	var instance ={};
	// proprieties*****

	instance.type = type;
	instance.brand = brand;
	instance.Id = Idrunner;
	instance.image = image;
	instance.price= price;
	instance.size= size;
	instance.color= color;
	Idrunner++;
	// methodes*****
	instance.addToCard= addToCard;
	instance.removeFromCard= removeFromCard;
	instance.totalPrice= totalPrice;
	return instance;

}

function displayCard() {
			$('#cardtotal').show();
			$('#table').html('');
			var $div = $('#table');
        	var $elem =('<tr><th>Products</th><th>Quantity</th><th>subtotal </th></tr>'); 
        	$div.append($elem);
	        var index = card.length - 1;
        while(index >= 0){
        	var $element = ('<tr><td><div class="cart-info"><img src="'+ card[index]["image"] +'"><div><p>'+ card[index]["brand"] +' '+card[index]["type"]  +'</p><small>Price: $'+ card[index]["price"] +'.00 </small><a type="button" id="'+index +'" onclick="removeFromCard(this.id)" >Remove</a></div></div></td><td><input type="number" value="1"></td><td>$'+ card[index]["price"]+'.00</td></tr>')
        		$div.append($element);
			index -= 1;
		}
		var subtotal =totalPrice();
		var total = Number.parseFloat(subtotal + ((subtotal*35)/100)).toFixed(2);
		var $total = $('<div class="total-price"><table><tr><td>subtotal</td><td>$'+ subtotal +'.00</td></tr><tr><td>Tax</td><td>35%</td></tr><tr><td>Total</td><td>$'+total+'</td></tr></table></div>');
		$div.append($total);
}
	function functionsearch(brand) {

		var array = [];
		for (var i = 0; i < products.length; i++) {
			if(products[i]["brand"] == brand){
				array.push(products[i]);
			}
		}
		return array;
	}


function search(brand) {
	var array = functionsearch($('.searchinput').val());
		console.log(array);
	console.log($('.searchinput').val());
	$('.searchbox').show();
	$('.displaybox').hide();
	$('#search').html('');


	var $div = $('#search');
        var index = array.length - 1;
    while(index >= 0){

    	var $element = ('<div class="col-md-4"><div style="height: 518px;" class="card mb-4 shadow-sm"><img src='+array[index]["image"]+' class="ImgGrid"> <div class="card-body"><p class="card-text">'+array[index]["brand"] +'</p><div class="d-flex justify-content-between align-items-center"><div class="btn-group"><button type="button" id="'+ array[index]["Id"]+ '" onclick="addToCard(this.id)"class="btn btn-primary btn-sm"><i class="fas fa-cart-plus"></i> Add to Cart</button></div><small class="text-muted">'+array[index]["price"]+'</small></div></div></div></div>')
    		$div.append($element);
		index -= 1;
	}
}



	var card = [];
function addToCard(Id){
	function dis(Id) {
		for (var i = 0; i < products.length; i++) {
			for(var key in products[i]){
				if(products[i]["Id"]==Id){
					return card.push(products[i]);
				}
			}
		}
	}
	dis(Id);

	displayCard();
}

function removeFromCard(Id){
   card.splice(Id,1);

	 displayCard();
}
// **************************local storgre*************************

function cost(products){
	var cartCost=localStorge.getItem('cost');
	if(cartCost != null){
		cartCost=paresInt(cartCost);
		localStorge.setItem("cost", cartCost+products.price)
	}else {
		localStorge.setItem("cost",products.price)
	}
}

function totalPrice(){
	var total = 0;
	for (var i = 0; i < card.length; i++) {
		total += card[i]["price"];
	}
	return total;
}
// *******************************************************************
var shoes = [];
for (var i = 0; i < products.length; i++) {
	if(products[i]["type"] === "shoes"){
		shoes.push(products[i]);
	}

}
var tshirt = [];
for (var i = 0; i < products.length; i++) {
	if(products[i]["type"] === "tshirt"){
		tshirt.push(products[i]);
	}

}
var jacket = [];
for (var i = 0; i < products.length; i++) {
	if(products[i]["type"] === "jacket"){
		jacket.push(products[i]);
	}

}
var jeans = [];
for (var i = 0; i < products.length; i++) {
	if(products[i]["type"] === "jeans"){
		jeans.push(products[i]);
	}

}

       var shoes = []; 
       var tshirt = []; 
       var jacket = [];
	   var jeans = [];      
var $div = $('.shoes');
var $div1 = $('.tshirt');
var $div2 = $('.jacket');
var $div3 = $('.jeans');
    	$(document).ready(function(){
    		
    		
			for (var i = 0; i < products.length; i++) {
				if(products[i]["type"] === "shoes"){
					shoes.push(products[i]);
				}

			}
        var index = shoes.length - 1;
        while(index >= 0){

        	var $element = ('<div class="col-md-4"><div style="height: 518px;" class="card mb-4 shadow-sm"><img src='+shoes[index]["image"]+' class="ImgGrid"> <div class="card-body"><p class="card-text">'+shoes[index]["brand"] +'</p><div class="d-flex justify-content-between align-items-center"><div class="btn-group"><button type="button" id="'+ shoes[index]["Id"]+ '" onclick="addToCard(this.id)"class="btn btn-primary btn-sm"><i class="fas fa-cart-plus"></i> Add to Cart</button></div><small class="text-muted">'+shoes[index]["price"]+'</small></div></div></div></div>')
        		$div.append($element);
			index -= 1;
		}
           // *************tshirt**************  
    	    		
			for (var i = 0; i < products.length; i++) {
				if(products[i]["type"] === "tshirt"){
					tshirt.push(products[i]);
				}

			}
        var index1 = tshirt.length - 1;
        while(index1 >= 0){
        	
        	var $element2 = ('<div class="col-md-4"><div style="height: 518px;" class="card mb-4 shadow-sm"><img src='+tshirt[index1]["image"]+' class="ImgGrid"> <div class="card-body"><p class="card-text">'+tshirt[index1]["brand"] +'</p><div class="d-flex justify-content-between align-items-center"><div class="btn-group"><button type="button" id="'+ tshirt[index1]["Id"]+ '" onclick="addToCard(this.id)"class="btn btn-primary btn-sm"><i class="fas fa-cart-plus"></i> Add to Cart</button></div><small class="text-muted">'+tshirt[index1]["price"]+'</small></div></div></div></div>')
        		$div1.append($element2);
			index1 -= 1;
		}
			for (var i = 0; i < products.length; i++) {
				if(products[i]["type"] === "jacket"){
					jacket.push(products[i]);
				}

			}

        var index2 = jacket.length - 1;
        while(index2 >= 0){
        	
        	var $element3 = ('<div class="col-md-4"><div style="height: 518px;" class="card mb-4 shadow-sm"><img src='+jacket[index2]["image"]+' class="ImgGrid"> <div class="card-body"><p class="card-text">'+jacket[index2]["brand"] +'</p><div class="d-flex justify-content-between align-items-center"><div class="btn-group"><button type="button" id="'+ jacket[index2]["Id"]+ '" onclick="addToCard(this.id)"class="btn btn-primary btn-sm"><i class="fas fa-cart-plus"></i> Add to Cart</button></div><small class="text-muted">'+jacket[index2]["price"]+'</small></div></div></div></div>')
        		$div2.append($element3);
			index2 -= 1;
		}
			for (var i = 0; i < products.length; i++) {
				if(products[i]["type"] === "jeans"){
					jeans.push(products[i]);
				}

			}
        var index3 = jeans.length - 1;
        while(index3 >= 0){
        	var $element4 = ('<div class="col-md-4"><div style="height: 518px;" class="card mb-4 shadow-sm"><img src='+jeans[index3]["image"]+' class="ImgGrid"> <div class="card-body"><p class="card-text">'+jeans[index3]["brand"] +'</p><div class="d-flex justify-content-between align-items-center"><div class="btn-group"><button type="button" id="'+ jeans[index3]["Id"]+ '" onclick="addToCard(this.id)"class="btn btn-primary btn-sm"><i class="fas fa-cart-plus"></i> Add to Cart</button></div><small class="text-muted">'+jeans[index3]["price"]+'</small></div></div></div></div>')
        		$div3.append($element4);
			index3 -= 1;
		}		
      });



     




products.push(freeShop('shoes','nike','./img/shoes/1.jpg',150,[37,38,39,40,41,42,43,44,45,46],["red","black","white"]));
products.push(freeShop('shoes','nike','./img/shoes/2.jpg',170,[37,38,39,40,41,42,43,44,45,46],["red","black","white"]));
products.push(freeShop('shoes','underarmour','./img/shoes/3.jpg',120,[37,38,39,40,41,42,43,44,45,46],["red","black","white"]));
products.push(freeShop('shoes','underarmour','./img/shoes/4.jpg',140,[37,38,39,40,41,42,43,44,45,46],["red","black","white"]));
products.push(freeShop('shoes','adidas','./img/shoes/5.jpg',110,[37,38,39,40,41,42,43,44,45,46],["red","black","white"]));
products.push(freeShop('shoes','adidas','./img/shoes/6.jpg',130,[37,38,39,40,41,42,43,44,45,46],["red","black","white"]));
products.push(freeShop('tshirt','polo','./img/tshirt/1.jpg',60,[37,38,39,40,41,42,43,44,45,46],["red","black","white"]));
products.push(freeShop('tshirt','polo','./img/tshirt/2.jpg',65,[37,38,39,40,41,42,43,44,45,46],["red","black","white"]));
products.push(freeShop('tshirt','polo','./img/tshirt/3.jpg',70,[37,38,39,40,41,42,43,44,45,46],["red","black","white"]));
products.push(freeShop('tshirt','lacoste','./img/tshirt/4.jpg',80,[37,38,39,40,41,42,43,44,45,46],["red","black","white"]));
products.push(freeShop('tshirt','lacoste','./img/tshirt/5.jpg',80,[37,38,39,40,41,42,43,44,45,46],["red","black","white"]));
products.push(freeShop('tshirt','lacoste','./img/tshirt/6.jpg',80,[37,38,39,40,41,42,43,44,45,46],["red","black","white"]));
products.push(freeShop('jeans','diesel','./img/jeans/1.jpg',95,[37,38,39,40,41,42,43,44,45,46],["red","black","white"]));
products.push(freeShop('jeans','diesel','./img/jeans/2.jpg',100,[37,38,39,40,41,42,43,44,45,46],["red","black","white"]));
products.push(freeShop('jeans','diesel','./img/jeans/3.jpg',85,[37,38,39,40,41,42,43,44,45,46],["red","black","white"]));
products.push(freeShop('jeans','gas','./img/jeans/4.jpg',65,[37,38,39,40,41,42,43,44,45,46],["red","black","white"]));
products.push(freeShop('jeans','gas','./img/jeans/5.jpg',65,[37,38,39,40,41,42,43,44,45,46],["red","black","white"]));
products.push(freeShop('jeans','gas','./img/jeans/6.jpg',65,[37,38,39,40,41,42,43,44,45,46],["red","black","white"]));
products.push(freeShop('jacket','polo','./img/jacket/1.jpg',125,[37,38,39,40,41,42,43,44,45,46],["red","black","white"]));
products.push(freeShop('jacket','polo','./img/jacket/2.jpg',120,[37,38,39,40,41,42,43,44,45,46],["red","black","white"]));
products.push(freeShop('jacket','lacoste','./img/jacket/3.jpg',180,[37,38,39,40,41,42,43,44,45,46],["red","black","white"]));
products.push(freeShop('jacket','lacoste','./img/jacket/4.jpg',175,[37,38,39,40,41,42,43,44,45,46],["red","black","white"]));
products.push(freeShop('jacket','nike','./img/jacket/5.jpg',160,[37,38,39,40,41,42,43,44,45,46],["red","black","white"]));
products.push(freeShop('jacket','nike','./img/jacket/6.jpg',190,[37,38,39,40,41,42,43,44,45,46],["red","black","white"]));