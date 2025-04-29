export interface EventModel {
    id: string;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    type: 'Répétition' | 'Représentation' | 'Réunion orga' | 'Réunion logistique' | 'Temps perso' | 'Autres'
}