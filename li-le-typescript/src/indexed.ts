// Indexed access type

type myStatus = "active" | "inactive" | "pending";

interface myAddress {
    street: string;
    city: string;
    postalCode: string;
}

interface myContact {
    id: number;
    name: string;
    status: myStatus;
    address: myAddress;
}

type  Awsome = myContact["id"] // set type to number

interface myEvent {
    id: number;
}
