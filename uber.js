// I Assumed 7 rupees per kilometer for riding.



class Uber{
    constructor(kilometer,price){
        this.kilometer = kilometer;
        this.price = price || 7;
        
    }

    getRate(){
return `Ride Amount is : ${this.kilometer  * this.price} Rs.`;
    }
    getRide(km){
        return `Price For ${km} Kilometer Riding : ${km* this.price} Rs.`
    }

}










const ride1 = new Uber (10,7);
const ride2 = new Uber (25)

console.log(ride1.getRate());
console.log(ride1.getRide(5));

console.log(ride2.getRate());
console.log(ride2.getRide(50));







