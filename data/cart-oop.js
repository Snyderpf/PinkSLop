function Cart(localStorageKey){
    const  cart = {

        cartItems: undefined,
        loadFromStorage()
        {
            this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
        
            if (!this.cartItems) {
        
            this.cartItems = [{
        
                productId :"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                quantity : 2,
                deliveryOptionsId: '1'
        
            },
            {
                productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d", 
                quantity:  3,
                deliveryOptionsId: '2'
            }];
        
        }
        },
        
        
        saveToStorage()
        {
            localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
        },
        
        addToCart(productId)
        {
            let matchingItem;
                this.cartItems.forEach((cartItem ) =>{
                    if(productId === cartItem.productId){
                        matchingItem = cartItem;
                    }
                });
        
                if(matchingItem){
                    matchingItem.quantity += 1;
                }
                else{
                    this.cartItems.push({
                        productId: productId,
                        quantity: 1,
                        deliveryOptionsId: '1'
                    });
                }
                
                this.saveToStorage();
        },
        
        
        removeFromCart(productId){
            const newCart = [];
        
            this.cartItems.forEach((cartItem) => 
            {
                if(cartItem.productId !== productId)
                {
                    newCart.push(cartItem);
                }
            });
            
           this.cartItems = newCart;
            
            this.saveToStorage();
        },
        
        
        updateDeliveryOption(productId, deliveryOptionId)
        {
            
            let matchingItem;
            
            this.cartItems.forEach((cartItem) => {
                if(productId === cartItem.productId)
                    
                {
                    matchingItem = cartItem;
                    
                }
            });
        
            matchingItem.deliveryOptionsId = deliveryOptionId;
            this.saveToStorage();
        }   
    };
    return cart;
}


const cart1 = Cart('cart-oop');
const businessCart = Cart('cart-business');

cart1.loadFromStorage();
// cart.addToCart('58b4fc92-e98c-42aa-8c55-b6b79996769a');
console.log(cart1);
console.log(businessCart);

