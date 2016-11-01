function Ticket(movieTitle, movieValue, time, ticket){
  this.movieTitle = movieTitle;
  this.movieValue = movieValue;
  this.time = time;
  this.ticket = ticket;
  this.price = 0;
}

Ticket.prototype.isMatinee = function(time){
    if(time <= 16){
        return true
    }
    else{
      return false
    }
}

Ticket.prototype.calculatePrice = function(movieValue, time, ticketType){
  var price = 0;

  if(movieValue === 0){
    price += 5;
  }
  else {
    price += 10;
  }
  if(time){
    price += 1;
  }
  else{
    price += 3;
  }
  if(ticketType === 0){
    price -= 1;
  }
  else if(ticketType === 1){
    price += 2;
  }
  else{
    price -= 3;
  }
  return price;
}

$(document).ready(function(){
  $("form#ticket-price").submit(function(event){

    var inputTitle = $(".movie-type option:selected").text();
    var inputValue = parseInt($(".movie-type").val());
    var inputTime = parseInt($("#movie-time").val());
    var inputTicket = parseInt($(".ticket-type").val());

    var newTicket = new Ticket(inputTitle, inputValue, inputTime, inputTicket)
    console.log(newTicket);

    newTicket.time = newTicket.isMatinee(inputTime);

    newTicket.price = newTicket.calculatePrice(newTicket.movieValue, newTicket.time, newTicket.ticket);

    console.log(newTicket);
    $(".price").text(newTicket.price);
    $(".output").show();

    event.preventDefault();
  });
});
