// Write your solution in this file
const employee = {
    name: "",
    streetAddress: ""
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee }
    newEmployee[key] = value;
    return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, streetAddress) {
    employee[key] = streetAddress;
    return employee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const newemployee = { ...employee };
    delete newemployee[key];
    return newemployee;
}
