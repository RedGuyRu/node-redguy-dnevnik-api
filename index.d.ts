export class ApiClient {
    constructor(token: String, options?: {});

    Messages(): Messages;

    Links(): Links;

    Users(): Users;

    Marks(): Marks;
}

export class Messages {
    get(social: string): Promise<Message>;

    delivered(id: number): Promise<void>;
}

export class Links {

}

export class Users {

}

export class Marks {
    getTotalMarks(id: number): Promise<{
        three: [{ name: string, needs: number }],
        four: [{ name: string, needs: number }],
        five: [{ name: string, needs: number }]
    }>;

    getDayMarks(id: number, date: string): Promise<[{
        comment: string | null,
        is_exam: boolean,
        is_point: boolean,
        value: string,
        weight: number,
        lesson: string
    }]>;
}

export class Message {

}