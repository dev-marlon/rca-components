import { Event } from '../models/event.model';

export class EventsService {
    getAll(): Event[] {
        return [
            {
                id: 1,
                name: 'Anrudern',
                date: new Date(),
            },
            {
                id: 2,
                name: 'Nette Veranstaltung',
                description: 'Nettes Zusammensein bei Bier und Keksen.',
                date: new Date(),
            },
            {
                id: 3,
                name: 'Abrudern',
                date: new Date(),
            },
            {
                id: 4,
                name: 'Siegesfeier',
                date: new Date(),
            },
            {
                id: 5,
                name: 'Weihnachtsfeier',
                date: new Date(),
            },
        ];
    }
}
