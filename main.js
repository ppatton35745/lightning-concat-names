const concatNames = (firstName, lastName) => {
    const fullName = lastName + ", " + firstName;
    return fullName;
}

myName = concatNames("Philip", "Patton");
console.log(myName);