const fs = require('fs');

const read = file => {
    return fs.readFileSync(`${__dirname}/textos/${file}`, { encoding: 'utf8' });
};

const write = (file, content) => {
    const dirname = `${__dirname}/modificados`;
    if(!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname);
    }

    fs.writeFileSync(`${dirname}/${file}`, content, { encoding: 'utf8' });
};

module.exports = {read, write};