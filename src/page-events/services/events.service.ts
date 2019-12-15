import { Event } from '../models/event.model';

const events: Event[] = [
    {
        id: 1,
        name: 'Essen der Jubilare',
        date: new Date('2020-02-07T18:00:00'),
    },
    {
        id: 2,
        name: 'Hauptversammlung',
        description: 'Nettes Zusammensein bei Bier und Keksen.',
        date: new Date('2020-02-25T06:00:00'),
    },
    {
        id: 3,
        name: 'Anrudern',
        date: new Date('2020-03-29T06:00:00'),
    },
    {
        id: 4,
        name: 'Kirschblütenfest',
        date: new Date('2020-05-22T06:00:00'),
    },
    {
        id: 5,
        name: 'Sommerfest',
        date: new Date('2020-09-19T06:00:00'),
    },
];

export class EventsService {
    getAll(): Promise<Event[]> {
        return new Promise(resolve => {
            // Fake request delay
            setTimeout(() => resolve(events), 1000);
        });
    }
}
