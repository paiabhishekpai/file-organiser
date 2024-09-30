import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = "C:\\Users\\abhishek pai\\OneDrive\\Desktop\\projects\\file organiser"

let files = await fs.readdir(basepath)

for (const item of files) {
    //getting the extensions
    let ext=item.split(".")[item.split(".").length-1];
    
    //checking if directory exists or making directorires for each extension
    if(fsn.existsSync(ext)){
        //move files here
    }
    else{
        //make a directory
        fs.mkdir(ext);
    }

}

