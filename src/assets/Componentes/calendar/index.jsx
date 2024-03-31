import React, { useContext } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list"; // Importa o plugin de lista
import styled from 'styled-components';
import { MyContext } from "../../context";

const StyledCalendar = styled.div`
height: 100vh;
  .containerFull {
    position: absolute;
    top: 15%;
    left: 20%;
    width: 50vw;
    height: 90vh;

    @media (max-width: 600px) {
        top: 15%;
        left: 2%;
        width: 96vw;

    }
  }
`;

function Calendar() {

    const {listaVeiculos} = useContext(MyContext);

  return (
    <StyledCalendar>
      <div className="containerFull">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
          initialView='listWeek'
          
          headerToolbar={{
            start: "prev,next",
            center: "title",
            end: "dayGridMonth,listWeek",
          }}
          
          events={listaVeiculos}
          
        />
      </div>
    </StyledCalendar>
  );
}

export default Calendar;
