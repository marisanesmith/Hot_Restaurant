const waitList = ({tableNumber, id, name, email, phoneNumber}) => {
    return `<div class="card-body">
    <ul id="tableList" class="list-group">
        <li class="list-group-item mt-4">
            <h2>Table ${tableNumber}</h2>
            <hr>
            <h2>ID: ${id}</h2>
            <h2>Name: ${name}</h2>
            <h2>Email: ${email}</h2>
            <h2>Phone: ${phoneNumber}</h2>
        </li></div>`
}

module.exports = waitList