export class Links {
    name: string;
    link: string;
}

export class ErrorMessage {
    title: string;
    body: string;
}

export class UserData {
    ok: boolean;
    body: {
        avatar_url?: string;
        name?: string;
    }
}

export class Notification {
    level: number;
    text: {
        line1: string;
        line2?: string;
    }
}
