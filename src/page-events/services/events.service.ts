import { Event } from '../models/event.model';

export class EventsService {
    getAll(): Event[] {
        return [
            {
                id: 1,
                name: 'foo',
                date: new Date(),
            },
            {
                id: 2,
                name: 'bar',
                date: new Date(),
            }
        ];
    }
}
