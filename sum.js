let argv = process.argv, // 定义process.argv
    num1 = parseInt(argv[2]), // 取process.argv的第三项值
    num2 = parseInt(argv[3]), // 取process.argv的第四项值
    sum = 0; // 记录总数的质
// 循环num1到num2每一项的整数 并且求和
for (var i = num1; i <= num2; i++) {
    // 记录每一次相加的总数
    sum += i
}

console.log('结果是' + sum)