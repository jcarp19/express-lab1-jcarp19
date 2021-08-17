interface CartItems {
    id: number,
    product: string;
    price: number;
    quantity: number;
}

let cart: CartItems[] = [
    {
        id: 1001,
        product: "Mustang GT",
        price: 50000,
        quantity: 5
    },
    {
        id: 1002,
        product: "Mustang EcoBoost",
        price: 40000,
        quantity: 3
    },
    {
        id: 1003,
        product: "Mustang GT350",
        price: 70000,
        quantity: 2
    },
    {
        id: 1004,
        product: "Mustang GT500",
        price: 100000,
        quantity: 1
    },
    {
        id: 1005,
        product: "eMustang",
        price: 55000,
        quantity: 4
    }
];

export default cart;
export {CartItems}; 