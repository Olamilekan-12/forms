const form = document.forms.signup

const {
    username,
    age,
    volume,
    birthday,
    colour,
    source
} = form.elements

age.value = "30"
birthday.value = "1990-05-17"

console.log(typeof age.value, age.value)
console.log(typeof age.valueAsNumber, age.valueAsNumber)
console.log(typeof volume.value, volume.value)
console.log(volume.valueAsNumber + 1);
console.log(birthday.value);
console.log(birthday.valueAsDate);
console.log(birthday.valueAsDate.getUTCFullYear());
console.log(colour.value);
console.log(source.value);

username.value = "Grace";
console.log(username.value, username.defaultValue);
