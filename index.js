class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, z) => a - z);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < 0 || pos >= this.length){
      throw new Error("OutoFBounds");
    } return this.items[pos];
  }

  max() {
    if( this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[this.length -1];
  }

  min() {
    if (this.length === 0) {
      throw new Error("Empty SortedList")
    }
    return this.items[0];
  }

  sum() {
    if (this.length === 0){
      return 0;
    }
    return this.items.reduce((add, item) => add + item, 0)
  }

  avg() {
    if (this.length === 0) {
      return 0;
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
