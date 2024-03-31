import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list"; // Importa o plugin de lista
import styled from 'styled-components';

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
          events={[
            {
                title: 'Meeting',
                start: '2024-03-31T14:30:00',
                extendedProps: {
                  status: 'done'
                }
              },
              {
                title: 'Birthday Party',
                start: '2024-04-01T07:00:00',
                backgroundColor: 'green',
                borderColor: 'green'
              }
          ]}
          
        />
      </div>
    </StyledCalendar>
  );
}

export default Calendar;
