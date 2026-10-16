const form = document.forms.signup

console.log(form === document.getElementById("signup"))
console.log(form.elements.length)
console.log(form.elements.username)
console.log(form.elements[1].name)
console.log(form.elements.plan)
console.log(form.elements.plan.value);
console.log(form.elements.email.form === form);
