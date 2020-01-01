import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@material-ui/core';

import { Event } from './models/event.model';
import { EventsService } from './services/events.service';
import { rcaMuiTheme } from '../ui-shared/rca-mui.theme';

import { Loader } from '../ui-shared/components/loader.component';
import { PageEventsEvents } from './components/events/events.component';

import './page-events.component.css';

export const PageEvents: React.FunctionComponent = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [events, setEvents] = useState<Event[] | null>(null);

    useEffect(() => {
        const eventsService = new EventsService();

        const loadEvents = async () => {
            const events = await eventsService.getAll();
            setEvents(events);
        };

        loadEvents().then(() => setIsLoading(false));

        // Run effect only once on component mount
    }, []);

    return (
        <ThemeProvider theme={rcaMuiTheme}>
            <div className="page-events">
                {isLoading && <Loader />}
                {events !== null && <PageEventsEvents events={events} />}
            </div>
        </ThemeProvider>
    );
};
