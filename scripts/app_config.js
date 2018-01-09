
module.exports = {
    actions: [
        { name: "user" },
        { name: "product" },
        { name: "invoice" },
        { name: "customer" },
        { name: "quote" },
        { name: "expense" },
        { name: "product" },
    ],
    store_state: [
        { name: "user", type: "obj" },
        { name: "users", type: "col" },
        { name: "account", type: "obj" },
        { name: "invoices", type: "col" },
        { name: "invoice", type: "obj" },
        { name: "quote", type: "obj" },
        { name: "quotes", type: "col" },
        { name: "expense", type: "obj" },
        { name: "expenses", type: "col" },
        { name: "customer", type: "obj" },
        { name: "customers", type: "col" },
        { name: "product", type: "obj" },
        { name: "products", type: "col" },
        { name: "is_authenticating", type: "obj" }
    ],
    action_types: [
        "SET_USERS",
        "ADD_USERS_ITEM",
        "SET_USER",
        "UPDATE_USER",
        "DELETE_USER",

        "SET_ACCOUNT",

        "SET_INVOICE",
        "SET_INVOICES",
        "ADD_INVOICES_ITEM",
        "UPDATE_INVOICE",
        "DELETE_INVOICE",

        "SET_PRODUCT",
        "SET_PRODUCTS",
        "ADD_PRODUCTS_ITEM",
        "UPDATE_PRODUCT",
        "DELETE_PRODUCT",

        "SET_CUSTOMER",
        "SET_CUSTOMERS",
        "ADD_CUSTOMERS_ITEM",
        "UPDATE_CUSTOMER",
        "DELETE_CUSTOMER",

        "SET_EXPENSE",
        "SET_EXPENSES",
        "ADD_EXPENSES_ITEM",
        "UPDATE_EXPENSE",
        "DELETE_EXPENSE",

        "SET_QUOTE",
        "SET_QUOTES",
        "ADD_QUOTES_ITEM",
        "UPDATE_QUOTE",
        "DELETE_QUOTE",

        "AUTHENTICATING"
    ]
}
