class ScrabBag {
  constructor() {
    this.tiles = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'b', 'b', 'c',
     'c', 'd', 'd', 'd', 'd', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e',
     'e', 'e', 'f', 'f', 'g', 'g', 'g', 'h', 'h', 'i', 'i', 'i', 'i', 'i', 'i',
     'i', 'i', 'i', 'j', 'k', 'l', 'l', 'l', 'l', 'm', 'm', 'n', 'n', 'n', 'n',
     'n', 'n', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'p', ' q', 'r', 'r', 'r',
     'r', 'r', 'r', 's', 's', 's', 's', 't', 't', 't', 't', 't', 't', 'u', 'u',
     'u', 'u', 'v', 'v', 'w', 'w', 'x', 'y', 'y', 'z', '_', '_']
  }

  chooseTiles(count, tilesChosen=[]) {
    if(count >= 8) {
      return tilesChosen
    } else if (count < 8) {
        let index = Math.floor(Math.random() * this.tiles.length - 1)
        let randomLetter = this.tiles[index]
        this.tiles.splice(index, 1)
        tilesChosen.push(randomLetter)
        this.chooseTiles(count + 1, tilesChosen)
    }
    return tilesChosen
  }

  getTilesChosen() {
    let tilesPicked = 'AERETOXMYCNS_B'
    this.tilesChosen = tilesPicked.split('')
    return this.tilesChosen
  }

  countLetters(str) {
   const hashMap = {};
   let count = 0;
   for(let i = 0; i < str.length; i++) {
     if(str.charCodeAt(i) === 65) {
       hashMap['A'] = count
     }
     if(str.charCodeAt(i) === 66) {
       hashMap['B'] = count
     }
     if(str.charCodeAt(i) === 67) {
       hashMap['C'] = count
     }
    count++
   }
   return hashMap
  }

  tileCount() {
    return this.getTilesChosen()
  }

}

export default ScrabBag

