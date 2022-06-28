const fs = require("fs");
const getNotes = () => "Your Notes...";
// thins
const addNotes = (title, body) => {
  const notes = loadNotes();
  //const duplicate = notes.filter((n) => n.title === title);
  const duplicate = notes.find((n) => n.title === title);
  if (!duplicate) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("new notes");
  } else {
    console.log("title already taken");
  }
};

const removeNotes = (title) => {
  const notes = loadNotes();
  const duplicate = notes.filter((n) => n.title !== title);
  // console.log(duplicate);

  if (notes.length > duplicate.length) {
    console.log("your notes was removed");
    saveNotes(duplicate);
  } else {
    console.log("no notes where found");
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(`Your notse:`);
  notes.forEach((n) => {
    console.log(n.title);
  });
};

const readNotes = (title) => {
  const notes = loadNotes();
  const data = notes.find((n) => n.title === title);

  if (data) {
    console.log(`the title: ${data.title}; the body: ${data.body}`);
  } else {
    console.log(`Their is no note found with the title ${title}`);
  }
};

const saveNotes = (notes) => {
  const noteJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", noteJson);
};
const loadNotes = () => {
  try {
    const databuffer = fs.readFileSync("notes.json");
    const dataJson = databuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};
module.exports = {
  getNotes,
  addNotes,
  removeNotes,
  listNotes,
  readNotes,
};
