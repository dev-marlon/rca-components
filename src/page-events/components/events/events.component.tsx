import React, { FunctionComponent } from 'react';
import { PageEventsEvent } from './../event/event.component';
import { Event } from './../../models/event.model';

interface Props {
    events: Event[];
}

export const PageEventsEvents: FunctionComponent<Props> = props => {
    const eventItems = props.events.map(event => <PageEventsEvent event={event} key={event.id} />);

    return (
      <div className="events">
          {eventItems}
      </div>
    );
};
