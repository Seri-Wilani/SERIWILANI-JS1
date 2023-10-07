let budget = 1000;
let destination = "Bali";
let duration = 7;
let packingList = [];

// Untuk penggunaan if, else if, dan else
if (budget >= 1500) {
  console.log("Saya memiliki anggaran yang cukup untuk liburan mewah.");
} else if (budget >= 1000) {
  console.log("Saya memiliki anggaran yang cukup untuk liburan standar.");
} else {
  console.log("Saya ingin merencanakan liburan dengan anggaran lebih besar.");
}

// Untuk penggunaan switch case
switch (destination) {
  case "Bali":
    console.log("Saya akan pergi ke Bali, pulau surga di Indonesia.");
    break;
  case "Paris":
    console.log("Saya akan pergi ke Paris, kota cinta di Prancis.");
    break;
  default:
    console.log("Saya akan pergi ke tujuan yang tidak teridentifikasi.");
}

// Untuk penggunaan for statement
console.log("Barang yang saya bawa:");

let items = ["pakaian", "sunblock", "kamera", "paspor", "uang"];
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
  packingList.push(items[i]);
}

// Untuk penggunaan while
let day = 1;
console.log("Hari-hari perjalanan Saya:");
while (day <= duration) {
  console.log("Hari ke-" + day);
  day++;
}

// Untuk penggunaan do while
let activities = ["berenang", "jalan-jalan", "makan enak", "belanja"];
let activityIndex = 0;
console.log("Kegiatan Saya:");

do {
  console.log(activities[activityIndex]);
  activityIndex++;
} while (activityIndex < activities.length);

// Untuk penggunaan function
function calculateDailyExpense(budget, duration) {
  return budget / duration;
}

let dailyExpense = calculateDailyExpense(budget, duration);
console.log("Pengeluaran harian yang saya gunakan: $" + dailyExpense.toFixed(2));
