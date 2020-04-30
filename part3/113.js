Date.prototype.yyyymmdd = function() {
  const yyyy = this.getFullYear();
  const mm =
    this.getMonth() < 9 ? `0${this.getMonth() + 1}` : this.getMonth() + 1; // getMonth()는 0부터 시작한다.

  const dd = this.getDate() < 10 ? `0${this.getDate()}` : this.getDate();
  return "" + yyyy + "년" + mm + "월" + dd + "일";
};

const date = new Date();
console.log(date.yyyymmdd());
