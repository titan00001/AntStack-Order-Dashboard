const titlePipe = (title) => {

    title += ' ';

    let wrd = "", newTitle = ""
    for(let ch of title) {
        if(ch === ch.toUpperCase()) {
            newTitle += wrd + " ";
            wrd = ch;
        } else {
            wrd += ch;
        }
    }

    newTitle = newTitle[0].toUpperCase() + newTitle.substr(1);

    // console.log(newTitle)
    return newTitle;

}

export default titlePipe;