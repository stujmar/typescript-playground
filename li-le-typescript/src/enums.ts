enum ContactStatus {
    Active,
    Inactive,
    New
}

interface Entry {
    id: number;
    name: string;
    birthDate?: Date;
    status: ContactStatus;
}

let primaryUser: Entry = { id: 1, name: "John", status: ContactStatus.Active };