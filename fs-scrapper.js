const path = require("path");
const fs = require("fs");
const EventEmitter = require("events");

const args = process.argv.slice(2);
const directory = args[0];
const createdDirectory = args[1];
const fileName = args[2];

class Scrapper extends EventEmitter {
  constructor(directory) {
    super();
    this.folderPath = `${directory}`;
    this.theContents = [];
  }

  read() {
    // Read the folder
    fs.readdir(this.folderPath, (_, files) => {
      // Get the files
      files.forEach((file) => {
        // Get the content of the files and push to global array
        fs.readFile(`${this.folderPath}/${file}`, "utf8", (_, contents) => {
          this.theContents.push(contents);
        });
      });
      this.emit("write to file");
    });
  }
  write(newDir, fileName) {
    // Write contents from global array to new file
    setTimeout(() => {
      fs.writeFile(
        path.join(__dirname, `${newDir}`, `${fileName}`),
        this.theContents.join(""),
        (err) => {
          if (err) console.log(err);
          console.log("file written to...");
        }
      );
    }, 50);
  }
}
const logger = new Scrapper(directory);
logger.read();

logger.on("write to file", () => {
  logger.write(createdDirectory, fileName);
});
