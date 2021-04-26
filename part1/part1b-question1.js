
function discountPrices(prices, discount){
    const discounted=[];
    const length=prices.length;

    for(let i=0;i<length;i++){
        const discountedPrice=prices[i]*(1-discount);
        //finalPrice=Math.round(discountedPrice*100)/100;
        discounted.push(discountedPrice);
    }

    /*console.log(i);
    //console.log(discountedPrice);
    //console.log(finalPrice);*/

    //console.log(i);
    //console.log(length);




    return discounted;
}
x=discountPrices([100,200,300], 0.5);
console.log(x);