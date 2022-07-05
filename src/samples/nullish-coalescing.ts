let points = 0;
points || 10; // 10 (bad)
points ??= 10; // 0 (good)

let money; // undefined
money ??= 5; // 5
money || 5; // 5
