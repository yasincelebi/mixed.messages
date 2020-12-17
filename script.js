//use the math.random to random messages
randomNumber = (number) => {
  return Math.floor(Math.random() * number);
};

// listed messages
const messages = {
  x: ["can i help you?", "you are handsome", "you are amazing!"],
  y: ["bro", "sir?", "kleopatra"],
  z: ["Dont give up", "Please read documentation", "First. Learn English"],
};
let showedMessage = [];
for (let i in messages) {
  let option = randomNumber(messages[i].length);
  switch (i) {
    case "x":
      showedMessage.push(`Hey bro ${messages[i][option]}`);
      break;
    case "y":
      showedMessage.push(`Can i help you ${messages[i][option]}`);
      break;
    case "z":
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
