const path = require("path");
const fs = require("fs");
const EventEmitter = require("events");

class fileEmitter extends EventEmitter {
  constructor() {
    super();
    this.filePath = "./new/";
    this.theContents = [];
    this.newData = this.theContents.join("");
  }

  read() {
    // Read the folder
    fs.readdir(this.filePath, (_, files) => {
      // Get the files
      files.forEach((file) => {
        // Get the content of the files and push to global array
        fs.readFile(`${this.filePath}/${file}`, "utf8", (_, contents) => {
          this.theContents.push(contents);
        });
      });
      this.emit("write folder");
    });
  }
  write() {
    // Write contents from global array to new file
    console.log(this.newData);
    setTimeout(() => {
      fs.writeFile(
        path.join(__dirname, "fresh", "created.js"),
        this.theContents.join(""),
        (err) => {
          if (err) console.log(err);
          console.log("file written...");
        }
      );
    }, 10);
  }
}
const logger = new fileEmitter();
logger.read();

logger.on("write folder", () => {
  logger.write();
});
