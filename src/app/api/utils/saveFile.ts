import {writeFile} from "fs/promises";
import { join } from 'path';

export const saveFile = async(file: File, type: "img" | "video") => {
    if(!file) return "";
    const fileExt = file.name.split(".").pop();
    if(type === "img" && fileExt !== "jpg" && fileExt !== "png" && fileExt !== "jpeg") {
        return "";
    }
    if(type === "video" && fileExt !== "mp4") {
        return "";
    }
    const fileName = new Date().toISOString() + "-" + file.name;
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    console.log(__dirname);
    const path = join("public", "uploads", fileName);
    await writeFile(path, buffer);
    return fileName;
}