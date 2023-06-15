const emailInput = document.getElementById('email');
const submitBtn = document.getElementById('btn-submit');
const emailREGEX2 = '^[\w.+\-]+@gmail.com$';
const emailREGEX = /^[\w.+\-]+@gmail\.com$/;

submitBtn.disabled = true;

emailInput.addEventListener('input', () => {
    const text = e.target.value;

    if (emailREGEX.text(text) == true) {
        submitBtn.disabled = false;
    }
});

emailInput.addEventListener('input', (e) => {
    submitBtn.disabled = (emailREGEX.test(e.target.value)) ? false : true;
});
