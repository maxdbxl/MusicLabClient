import { Member } from './member.model';
export interface InvitationModel {
    id: number,
    meetingId: number,
    meetingName: string,
    memberId: number,
    Member: Member,
    availability: 'Available' | 'Unavailable' | 'Pending',

}