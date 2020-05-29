var minimumLengthEncoding = function(words) {
    let set = new Set(words);
    for(let item of set) {
        for(let i=1; i< item.length;i++){
            let last = item.slice(i);
            set.has(last) && set.delete(last);
        }
    }
    let count = 0;
    set.forEach(item => count += item.length + 1);
    return count
};
console.log(minimumLengthEncoding(["time", "me", "bell"]));