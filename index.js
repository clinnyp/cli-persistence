import inquirer from "inquirer";
import clear from "clear";

clear();

const log = console.log;

inquirer.prompt([
  {
    type: "list",
    name: "orm",
    message: "Which ORM would you like to use",
    choices: ["TypeORM", "Prisma"],
  },
  {
    type: "list",
    name: "action",
    message: "What would you like to do?",
    choices: ["Make a note", "List all notes"],
  },
  {
    type: "input",
    name: "note",
    message: "Enter your note:",
    when: (answers) => answers.action.toLowerCase() === "make a note",
  },
]).then((answers) => {
  log(answers)
});
