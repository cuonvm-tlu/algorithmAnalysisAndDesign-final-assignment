function borderSize(h = 0, w = 0, border = []) {
    let size = h;
    if (border?.length === 0) return 0
    
    if(border?.length > 1) {
        for (let i = 0; i < border.length - 1; i++) {
            let aSize = border[i].indexOf("B");
            let bSize = border[i + 1].indexOf("B");
            if (aSize === -1) aSize = w;
            if (bSize === -1) bSize = w;
            size += Math.abs(aSize - bSize);
        }
        return size;
    }

    return 1
}

console.log(borderSize(6, 5, ["AAABB", "ABBBB", "AAABB", "AAAAB", "AAAAB", "AABBB"]))