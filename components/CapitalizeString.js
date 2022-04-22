// everything from API comes in lowercase
// this function changes first letter of the string to uppercase
const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default capitalizeString;