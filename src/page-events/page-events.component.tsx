import React from 'react';
import './page-events.component.css';

import { PageEventsEvents } from './components/events/events.component';

import { EventsService } from './services/events.service';

export class PageEvents extends React.Component {
    eventsService: any;
    events: [] = [];

    constructor(props: any) {
        super(props);

        this.eventsService = new EventsService();
    }

    componentWillMount(): void {
        this.events = this.eventsService.getAll();
    }

    render() {
        return (
            <div className="page-events">
                <PageEventsEvents events={this.events} />
            </div>
        );
    }
}
