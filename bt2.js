var a = [1, 2, 9, 4, 5];
var sum = 0;
for (var i = 0; i < 5; i++) {
    var x = a.pop();
    sum += x;
}
console.log("Tong cac chu so trong mang la: ", sum);
console.log("Trung binh cong cac chu so trong mang la: ", sum / 5);