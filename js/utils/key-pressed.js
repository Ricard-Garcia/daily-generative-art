function keyPressed() {
  if (key == "s") {
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();

    console.log(year, month, day);
    save(`${year}-${month}-${day}.png`);
  }
}
