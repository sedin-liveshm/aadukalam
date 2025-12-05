const fs = require("fs");
const path = require("path");

async function pcopy(allData, fileName) {
    return new Promise((resolve, reject) => {
        const filePath = path.join(__dirname, `${fileName}.py`);
        fs.writeFile(filePath, allData.code, "utf-8", (err) => {
            if (err) {
                console.error("File write error:", err);
                return resolve(-1);
            }
            resolve(0);
         });
    });
}

module.exports = { pcopy };
