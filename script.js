
const form = document.getElementById("testDriveForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (name === "" || email === "") {
        message.textContent = "Please fill in all fields.";
        return;
    }

    message.textContent =
        `Thank you, ${name}! Your interest has been registered.`;

    form.reset();
});

const colorButtons = document.querySelectorAll(".color-option");
const carImage = document.getElementById("carImage");

const carFinishes = {
    white: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1800&q=90",
    black: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1800&q=90",
    silver: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&w=1800&q=90"
};

colorButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedColor = button.dataset.color;

        carImage.src = carFinishes[selectedColor];

        colorButtons.forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");
    });
});
