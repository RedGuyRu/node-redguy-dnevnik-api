export class ApiClient {
    constructor(token: String, options?: {});

    Messages(): Messages;

    Links(): Links;

    Users(): Users;

    Marks(): Marks;

    Homeworks(): Homeworks;

    Schedule(): Schedule;
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

    generateEditSession(id: number): Promise<string>;
}

export class Marks {
    getTotalMarks(id: number): Promise<{
        three: [{ name: string, needs: number }],
        four: [{ name: string, needs: number }],
        five: [{ name: string, needs: number }]
    }>;

    getDayMarks(id: number, date: DnevnikDate): Promise<[{
        comment: string | null,
        is_exam: boolean,
        is_point: boolean,
        value: string,
        weight: number,
        lesson: string
    }]>;
}

export class Homeworks {
    getDayHomework(id: number, date: DnevnikDate): Promise<[{
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

export class Schedule {
    getDaySchedule(id: number, date: DnevnikDate): Promise<{
        lessons: [{ name: string, time: string, replaced: boolean, position: number }],
        count: number,
        start_ordinal: number,
        end_ordinal: number
    }>;
}

export class DnevnikDate {
    static isISODate(s):boolean;

    constructor(s?);

    getDnevnikTypeOne():string;
    getDnevnikTypeTwo():string;
    getTime():string;
    getISO():string;
    getDiffFromNowInMinutes():number;
}
