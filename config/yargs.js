
const description = {
    demand: true,
    alias: 'd',
    desc: 'Description of the to-do task.'
};

const completed = {
    alias: 'c',
    default: true,
    desc: 'Check like completed or pending the task.'
};

const argv = require('yargs')
    .command('create', 'Create a to-do element.', {
        description
    })
    .command('update', 'Update the completed state of a task.', {
        description,
        completed
    })
    .command('delete', 'Delete a to-do task', {
        description
    })
    .help()
    .argv;

module.exports = {
    argv
}