//const { argv } = require("yargs");
const yargs = require("yargs");
const { addNotes, removeNotes, listNotes, readNotes } = require("./notes");
// const add = require("./utilis");
// const sum = add(3, 2);
// console.log(sum);
//console.log(process.argv[2]);
//console.log(yargs.argv);

//creating an adding command
yargs.command({
  command: "add",
  describe: "Add a new Note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "This the body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    addNotes(argv.title, argv.body);
  },
});

//creating a remove command
yargs.command({
  command: "remove",
  describe: "Remove a new Note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    removeNotes(argv.title);
  },
});

//creating a list command
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: () => {
    listNotes();
  },
});

//creating a read command
yargs
  .command({
    command: "read",
    describe: "read a notes",
    builder: {
      title: {
        describe: "read note",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      readNotes(argv.title);
    },
  })
  .parse();
//console.log(yargs.argv);
