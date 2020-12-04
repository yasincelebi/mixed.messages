//use the math.random to random messages
randomNumber = (number) => {
  return Math.floor(Math.random() * number);
};

// listed messages
const messages = {
  deneme: ["can i help you?", "you are handsome", "you are amazing!"],
  yanilma: ["bro", "sir?", "kleopatra"],
  duzeltme: [
    "Dont give up",
    "Please read documentation",
    "First. Learn English",
  ],
};
let showedMessage = [];
for (let i in messages) {
  let option = randomNumber(messages[i].length);
  switch (i) {
    case "deneme":
      showedMessage.push(`Hey bro ${messages[i][option]}`);
      break;
    case "yanilma":
      showedMessage.push(`Can i help you ${messages[i][option]}`);
      break;
    case "duzeltme":
      showedMessage.push(
        `You can be software engineer. ${messages[i][option]}`
      );
      break;
  }
}

print = (msg) => {
  console.log(showedMessage);
};
print(showedMessage);
