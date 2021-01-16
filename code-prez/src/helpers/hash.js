const hash  = (content) => {
    let hashed = 0;
    if (content.length == 0) {
        return hashed;
    }
    for (let i = 0; i < content.length; i++) {
        let char = content.charCodeAt(i);
        hashed = ((hashed<<5)-hashed)+char;
        hashed = hashed & hashed; // Convert to 32bit integer
    }
    return hashed;
}

export default hash