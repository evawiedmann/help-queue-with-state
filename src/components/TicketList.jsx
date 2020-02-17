import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';


function TicketList(props){
  return (
    <div className="ticketClas">
      <hr/>
      {props.ticketList.map((ticket) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={ticket.id}/>
      )}
      <style jsx>{`
      .ticketClas {
        background-color: yellow;
        border-radius: 25px;
      }
      `}</style>
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};
export default TicketList;
