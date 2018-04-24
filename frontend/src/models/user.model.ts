export default class UserModel {
  
    id: string;
    due_day: number;
    status: string;
    cards: Array<any> = [];
    precise_credit_limit: string;

    constructor (data: Object = {}) {

        if (data.hasOwnProperty('id')) {
            this.id = data['id'];
        }

        if (data.hasOwnProperty('due_day')) {
            this.due_day = data['due_day'];
        }

        if (data.hasOwnProperty('status')) {
            this.status = data['status'];
        }

        if (data.hasOwnProperty('cards')) {
            this.cards = data['cards'];
        }

        if (data.hasOwnProperty('precise_credit_limit')) {
            this.precise_credit_limit = data['precise_credit_limit'];
        }

    }
}