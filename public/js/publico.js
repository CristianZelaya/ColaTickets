// Referencias HTML
const lblTicket1     = document.querySelector('#lblTicket1'),
      lblEscritorio1 = document.querySelector('#lblEscritorio1'),
      lblTicket2     = document.querySelector('#lblTicket2'),
      lblEscritorio2 = document.querySelector('#lblEscritorio2'),
      lblTicket3     = document.querySelector('#lblTicket3'),
      lblEscritorio3 = document.querySelector('#lblEscritorio3'),
      lblTicket4     = document.querySelector('#lblTicket4'),
      lblEscritorio4 = document.querySelector('#lblEscritorio4');

const socket = io();

socket.on('estado-actual', ( payload ) => {

    const [ ticket1, ticket2, ticket3, ticket4 ] = payload;

    lblTicket1.innerText = 'Ticket ' + ticket1.numero
    lblEscritorio1.innerText = ticket1.escritorio
    lblTicket2.innerText = 'Ticket ' + ticket2.numero
    lblEscritorio2.innerText = ticket2.escritorio
    lblTicket3.innerText = 'Ticket ' + ticket3.numero
    lblEscritorio3.innerText = ticket3.escritorio
    lblTicket4.innerText = 'Ticket ' + ticket4.numero
    lblEscritorio4.innerText = ticket4.escritorio

});