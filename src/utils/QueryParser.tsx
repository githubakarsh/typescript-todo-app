
const QueryParser = (path : string) => {
    console.log(path);
    let newPath = path.split("?")
    console.log(newPath);
    return newPath;
}

export default QueryParser;
