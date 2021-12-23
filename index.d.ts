export class ApiClient {
    constructor(token: String, options?: {});

    Messages(): Messages;

    Links(): Links;

    Users(): Users;

    Marks(): Marks;

    Homeworks(): Homeworks;

    Schedule(): Schedule;

    Menu(): Menu;

    Answers(): Answers;
}

export class Answers {
    getMeshAnswers(variant: number, type?: "homework" | "spec"): Promise<[
        {
            question: string,
            question_attachments: [string],
            answer: {
                type: "number" | "text" | "texts" | "map" | "free",
                number?: number,
                text?: string,
                texts?: [string],
                map?: Object
            }
        }
    ]>;

    planMeshAnswers(user: number, variant: number, type?: "homework" | "spec"): Promise<number>;
}

export class Messages {
    get(social: string): Promise<Message>;

    delivered(id: number): Promise<void>;
}

export class Links {
    getDayLinks(id: number, date: DnevnikDate): Promise<{
        links: [{ lesson: { name: string, time: string, replaced: boolean, position: number }, link: string }],
        count: number
    }>;
}

export class Menu {
    getDayMenu(id: number, date: DnevnikDate): Promise<{
        dinner: [{
            title: string,
            description: string,
            summary: number,
            meals: [{
                name: string,
                ingredients: string,
                price: number,
                nutrition: {
                    calories: number,
                    protein: number,
                    fat: number,
                    carbs: number,
                    vitamins: []
                },
                full_name: string
            }],
            is_discount_complex: false,
            used_subscription_feeding: false,
            used_special_menu: false,
            used_variable_feeding: false
        }],
        breakfast: [{
            title: string,
            description: string,
            summary: number,
            meals: [{
                name: string,
                ingredients: string,
                price: number,
                nutrition: {
                    calories: number,
                    protein: number,
                    fat: number,
                    carbs: number,
                    vitamins: []
                },
                full_name: string
            }],
            is_discount_complex: false,
            used_subscription_feeding: false,
            used_special_menu: false,
            used_variable_feeding: false
        }],
        snack: [{
            title: string,
            description: string,
            summary: number,
            meals: [{
                name: string,
                ingredients: string,
                price: number,
                nutrition: {
                    calories: number,
                    protein: number,
                    fat: number,
                    carbs: number,
                    vitamins: []
                },
                full_name: string
            }],
            is_discount_complex: false,
            used_subscription_feeding: false,
            used_special_menu: false,
            used_variable_feeding: false
        }]
    }>;
}

export class Users {
    resolveUserIdBySocialId(social: string, id: number): Promise<number>;

    generateEditSession(id: number): Promise<string>;

    getUserInfo(id: number): Promise<{
        profile_id: number,
        name: string,
        birthDate: string,
        age: number,
        sex: string,
        ispp: number
    }>;
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
        lessons: [{
            name: string,
            time: string,
            replaced: boolean,
            position: number,
            teacher: {
                name: {
                    first_name: string,
                    last_name: string,
                    middle_name: string
                }
            }
        }],
        count: number,
        start_ordinal: number,
        end_ordinal: number
    }>;
}

export class DnevnikDate {
    static isISODate(s): boolean;

    constructor(s?, zone?: string);

    minus(minus: { minutes?: number }): DnevnikDate;

    getDnevnikTypeOne(): string;

    getDnevnikTypeTwo(): string;

    getTime(): string;

    getISO(): string;

    getDiffFromNowInMinutes(): number;
}
