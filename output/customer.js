class Customer {
    constructor(tableNumber,id, name, email, phoneNumber) {
        this.tableNumber = tableNumber;
        this.id = id;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber
    }

    printInfo() {
        console.log(`Table Number: ${this.tableNumber}:: Id: ${this.id} :: Name: ${this.name} :: Email: ${this.email} :: Phone number: ${this.phoneNumber}`)
    }
    getTableNumber() {return this.tableNumber};
    getId() {return this.id};
    getName() {return this.name};
    getEmail() {return this.email};
    getPhoneNumber() {return this.phoneNumber}
}

module.exports = Customer;