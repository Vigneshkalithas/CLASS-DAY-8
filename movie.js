
class Movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating || "PG";
    }
    getTitle(){
        return  `The movie name is : "${this.title}"`;
    }
getStudio(){
    return `This movie is produced by : "${this.studio}"`;
    }
    getPG(){
       return `"${this.rating}"`;
    }
} 
    
const casinoRoyale = new Movie("Casino Royale","Eon Productions","PG13");
const avatar = new Movie("Avatar","20th Century Fox Lightstorm Entertainment","PG-13");
const hangover = new Movie("Hangover","Legendary Pictures Productions","R");
const evildead = new Movie("Evil dead","TriStar Pictures",);


console.log(casinoRoyale);
console.log(avatar);
console.log(hangover);
console.log(evildead);

console.log(casinoRoyale.getTitle());
console.log(casinoRoyale.getStudio());
console.log(casinoRoyale.getPG());

console.log(avatar.getTitle());
console.log(avatar.getStudio());
console.log(avatar.getPG());

console.log(hangover.getTitle());
console.log(hangover.getStudio());
console.log(hangover.getPG());

console.log(evildead.getTitle());
console.log(evildead.getStudio());
console.log(evildead.getPG())



