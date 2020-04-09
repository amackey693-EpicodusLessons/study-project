function Ticket (movieTitle, movieTime, userAge) {
  this.movieTitle = movieTitle; 
  this.movieTime = movieTime;
  this.userAge = userAge; 
  this.moviePrice = 0;
}

Ticket.prototype.ticketCost = function () {
  // for Senior & Child Tickets "NEW MOVIE" & "NIGHT"
  if ((this.movieTitle === "new" && this.movieTime === "night" && this.userAge === "senior") || (this.movieTitle === "new" && this.movieTime === "night" && this.userAge === "child")) {
    this.moviePrice = 10;

  } else if ((this.movieTitle === "new" && this.movieTime === "day" && this.userAge === "senior") || (this.movieTitle === "new" && this.movieTime === "day" && this.userAge === "child")) {
    this.moviePrice = 5;

  // for Senior & Child Tickets "OLD MOVIE" & "DAY"
  } else if ((this.movieTitle === "old" && this.movieTime === "night" && this.userAge === "senior") || (this.movieTitle === "old" && this.movieTime === "night" && this.userAge === "child")) {
    this.moviePrice = 7.50;
    
  } else if((this.movieTitle === "old" && this.movieTime === "day" && this.userAge === "senior") || (this.movieTitle === "old" && this.movieTime === "day" && this.userAge === "child")) {
    this.moviePrice = 3.50;
  
  // for Adult Movie Tickets "OLD MOVIE" 
  } else if(this.movieTitle === "old" && this.movieTime === "night" && this.userAge === "adult") {
    this.moviePrice = 10;
    
  } else if (this.movieTitle === "old" && this.movieTime === "day" && this.userAge === "adult") {
    this.moviePrice = 8;

  // for Adult Movie Tickets "NEW MOVIE"
  } else if (this.movieTitle === "new" && this.movieTime === "day" && this.userAge === "adult") {
  this.moviePrice = 12;
  } else if (this.movieTitle === "new" && this.movieTime === "night" && this.userAge === "adult") {
    this.moviePrice = 15;
  }  
  return this.moviePrice  
}

var ticket = new Ticket ("new", "night", "adult")
var price = ticket.ticketCost();
console.log ("ticket", ticket);
console.log ("price", price);







