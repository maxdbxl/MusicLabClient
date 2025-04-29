export interface EventModel {
    id: string;
    name: string;
    description: string;
    location: string;
    startDate: string;
    endDate: string;
    isConfirmed: boolean;
    type: 'Répétition' | 'Représentation' | 'Réunion orga' | 'Réunion logistique' | 'Temps perso' | 'Autres'
}