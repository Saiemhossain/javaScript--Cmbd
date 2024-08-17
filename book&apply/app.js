/*
* Javascript book and call method 
*/
const greenLine = {
  bus: 'GreenLine Paribahan',
  bCode: 'GL',
  ticket: [],
  book(name, seatNumber) {
    console.log(`${name} booked a ticket on ${this.bus} ticket ${this.bCode}-${seatNumber}`);
    this.ticket.push({ ticketInfo: `${this.bCode}-${seatNumber}, name` });
  }

}


greenLine.book('Saim Hossin', 'A1')
greenLine.book('Ali Hossin', 'A2')
console.log(greenLine)

const Shohag = {
  bus: 'Shohag',
  bCode: 'SH',
  ticket : []
}

const book = greenLine.book;
book.call(Shohag, 'Saim Hossain', 'C2');


const Hanif = {
  bus: 'Hanif',
  bCode: 'HN',
  ticket: [],
};


//Apply

const ticketData = ['Saim Hossain', 'C2'];
book.apply(Hanif, ticketData);







  








