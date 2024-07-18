var string = "abcddba";
var flag = false;
for (var i = 0; i < string.length / 2; i++) {
    if (string.charAt(i) != string.charAt(string.length - i - 1)) {
        console.log("Khong phai chuoi Palindrome");
        flag = true;
        break;
    }
}
if (!flag) console.log("La chuoi Palindrome");