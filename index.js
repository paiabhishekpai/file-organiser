import fs from "fs/promises"

let files = await fs.readdir("C:\\Users\\abhishek pai\\OneDrive\\Desktop\\projects\\file organiser")
console.log(files);