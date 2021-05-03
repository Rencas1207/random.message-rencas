const messages = [
    "Renzo",
    "Leslie",
    "Andrés",
    "Fiorella",
    "Diego",
    "Vanessa",
    "Alexander",
    "Estefany"
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };