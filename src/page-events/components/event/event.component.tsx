import React, { FunctionComponent } from 'react';
import { Event } from '../../models/event.model';

interface Props {
    event: Event;
}

export const PageEventsEvent: FunctionComponent<Props> = props => {
    return (
        <div className="event">
            {props.event.name}
        </div>
    );
};
