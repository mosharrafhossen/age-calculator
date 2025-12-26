function calculateAge() {
    const dob = document.getElementById("dob").value;
    const result = document.getElementById("result");

    if (dob === "") {
        result.innerHTML = "Please select your date of birth ❌";
        return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    let nextBirthday = new Date(
        today.getFullYear(),
        birthDate.getMonth(),
        birthDate.getDate()
    );

    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const diffTime = nextBirthday - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    result.innerHTML = `
        🎂 <strong>Your Age</strong><br>
        ${years} Years ${months} Months ${days} Days <br><br>
        <strong>Birthday Countdown</strong><br>
        ${diffDays} days remaining until your birthday 🎁
    `;
}

function clearHistory() {
    document.getElementById("dob").value = "";
    document.getElementById("result").innerHTML = "";
}
