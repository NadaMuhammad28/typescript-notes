const year = document.getElementById("year") as HTMLSpanElement;
let crntYear = new Date().getFullYear().toString();

year.textContent = crntYear;
