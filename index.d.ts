export class ApiClient {
    constructor(token: String, options?: {});

    Messages(): Messages;

    Links(): Links;

    Users(): Users;

    Marks(): Marks;

    Homeworks(): Homeworks;

    Schedules(): Schedules;
}

export class Messages {
    get(social: string): Promise<Message>;

    delivered(id: number): Promise<void>;
}

export class Links {
    //Dont have support now
}

export class Users {
    resolveUserIdBySocialId(social: string, id: number): Promise<number>;
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

export class Homeworks {
    getDayHomework(id: number, date: string): Promise<[{
        lesson: string,
        value: string | null,
        deadline: string,
        comment: string | null,
        attachments: [{ url: string }],
        tests: [{ player: string, view: string, player_view: string }],
        lessons: [{ url: string }]
    }]>;
}

export class Message {
    get id(): number;

    get social(): string;

    get text(): string;

    get receiver(): string;

    get state(): number;
}

export class Schedules {
    getDaySchedules(id: number, date: string): Promise<{
        "1": { lesson: string, time: string, replaced: boolean }|undefined,
        "2": { lesson: string, time: string, replaced: boolean }|undefined,
        "3": { lesson: string, time: string, replaced: boolean }|undefined,
        "4": { lesson: string, time: string, replaced: boolean }|undefined,
        "5": { lesson: string, time: string, replaced: boolean }|undefined,
        "6": { lesson: string, time: string, replaced: boolean }|undefined,
        "7": { lesson: string, time: string, replaced: boolean }|undefined,
        "8": { lesson: string, time: string, replaced: boolean }|undefined,
        "9": { lesson: string, time: string, replaced: boolean }|undefined
    }>;
}