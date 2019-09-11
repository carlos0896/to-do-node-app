
const fs = require('fs');

let toDoList = [];

const saveDB = () => {

    let data = JSON.stringify(toDoList);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('Could not save');
    });

};

const loadDB = () => {

    try {

        toDoList = require('../db/data.json');

    } catch (error) {

        toDoList = [];

    }

};

const create = (description) => {

    loadDB();

    let toDo = {
        description,
        completed: false
    };

    toDoList.push(toDo);

    saveDB();

    return toDo;

};

const getList = () => {

    try {

        return require('../db/data.json');

    } catch (error) {

        return [];

    }

};

const update = (description, completed = true) => {

    loadDB();

    let index = toDoList.findIndex(task => task.description === description);

    if (index >= 0) {
        toDoList[index].completed = completed;
        saveDB();
        return true;
    } else {
        return false;
    }

};

const deleteTask = (description) => {

    loadDB();

    let newToDoList = toDoList.filter(task => task.description !== description);

    if(toDoList.length === newToDoList.length) {
        return false;
    } else {
        toDoList = newToDoList;
        saveDB();
        return true;
    }

}

module.exports = {
    create,
    getList,
    update,
    deleteTask
};