const person = {
    name: "John",
    skills: ["JavaScript", "React"]
};

const deepCopy = JSON.parse(JSON.stringify(person));
deepCopy.skills.push("Node js");

// structuredClone
const clonePerson = structuredClone(person);
clonePerson.skills.push("Python");



