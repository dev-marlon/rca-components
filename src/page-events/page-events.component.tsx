import React from 'react';
import { ThemeProvider } from '@material-ui/core';

import { Event } from './models/event.model';
import { EventsService } from './services/events.service';
import { rcaMuiTheme } from '../ui-shared/rca-mui.theme';

import { Loader } from '../ui-shared/components/loader.component';
import { PageEventsEvents } from './components/events/events.component';

import './page-events.component.css';

interface State {
    isLoading: boolean;
    events: Event[] | null;
}

export class PageEvents extends React.Component<{}, State> {
    eventsService: any;

    constructor(props: any) {
        super(props);
        this.eventsService = new EventsService();
        this.state = {
            isLoading: true,
            events: null,
        };
    }

    async componentDidMount() {
        const events = await this.eventsService.getAll();
        this.setState({
            ...this.state,
            ...{
                isLoading: false,
                events: events
            }
        });

    }

    render() {
        const { isLoading, events } = this.state;

        return (
            <ThemeProvider theme={rcaMuiTheme}>
                <div className="page-events">
                    {isLoading && <Loader />}
                    {events !== null && <PageEventsEvents events={events} />}
                </div>
            </ThemeProvider>
        );
    }
}
