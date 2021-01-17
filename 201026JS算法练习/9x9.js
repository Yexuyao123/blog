// 打印一个九九乘法表，要求乘号和等号都是对齐
// 例子
// 1 * 1 = 1
// 1 * 2 = 2  2 * 2 = 4

//第一稿（死的）
for (let i = 1; i < 10; i++) {
	// console.log(i)
	let j = 1
	ARR1 = Array()
	for (let j = 1; j <= i; j++) {
		if (i * j < 10) {
			ARR1.push(i + ' * ' + j + ' =  ' + i * j);
		}
		else {
			ARR1.push(i + ' * ' + j + ' = ' + i * j);
		}

		// ARR1.join('  ')
		// console.log(i + ' * ' + j + ' = ' + i * j);
	}
	console.log(ARR1.join('  '))
	// ARR1.join('  ')
}

//第二稿（任意n阶）
function 我想要n阶乘法表(imax) {
	let jmax = Number(imax)
	let ijmax = imax * imax
	let arr1 = Array()
	for (let i = 1; i < jmax + 1; i++) {
		arr1 = new String(i.toString());
		juli1 = jmax.toString().length - arr1.length;
		if (juli1 = 0) {
		} else {
			for (let a1 = 0; a1 < juli1 + 1; a1++) {
				arr1.push(' ');
			};
		}
		let j = 1;
		ARR = Array();
		arr2 = Array();
		for (let j = 1; j <= i; j++) {
			arr2 = new String(j.toString());
			juli2 = jmax.toString().length - arr2.length;
			if (juli2 = 0) {
			} else {
				for (let a2 = 0; a2 < juli2 + 1; a2++) {
					arr2.push(' ');
				};
			}
			arr3 = Array();
			let ij = i * j;
			arr3 = new String(ij.toString());
			juli3 = ijmax.toString().length - arr3.length;
			if (juli3 = 0) {
			} else {
				for (let a3 = 0; a3 < juli3 + 1; a3++) {
					arr3.push(' ');
				};
			}
			ARR.push(arr1);
			ARR.push('*');
			ARR.push(arr2);
			ARR.push('=');
			ARR.push(arr3);
		};
		console.log(ARR.join('  '));
	}
	return undefined
}


//第三稿（调整好右对齐完稿）
function 我想要n阶乘法表(imax) {
	let jmax = Number(imax)
	let ijmax = imax * imax
	arr1 = Array()
	for (let i = 1; i < jmax + 1; i++) {
		arr1 = Array.from(i.toString()).reverse();
		juli1 = jmax.toString().length - arr1.length;
		if (juli1 == 0) {
		} else {
			for (let a1 = 0; a1 < juli1; a1++) {
				arr1.push(' ');
			};
		}
		let j = 1;
		ARR = Array();
		arr2 = Array();
		for (let j = 1; j <= i; j++) {
			arr11 = arr1.concat([])
			arr2 = Array.from(j.toString()).reverse();
			juli2 = jmax.toString().length - arr2.length;
			if (juli2 == 0) {
			} else {
				for (let a2 = 0; a2 < juli2; a2++) {
					arr2.push(' ');
				};
			}
			arr3 = Array();
			let ij = i * j;
			arr3 = Array.from(ij.toString()).reverse();
			juli3 = ijmax.toString().length - arr3.length;
			if (juli3 == 0) {
			} else {
				for (let a3 = 0; a3 < juli3; a3++) {
					arr3.push(' ');
				};
			}
			ARR.push(arr11.reverse().join(''));
			ARR.push('*');
			ARR.push(arr2.reverse().join(''));
			ARR.push('=');
			ARR.push(arr3.reverse().join(''));
			ARR.push(' ');
		};
		// console.log(ARR);
		console.log(ARR.join(''));
	}
	return undefined
}
我想要n阶乘法表(imax)
//j.toString()不建议用，可以用j+''转为字符串



//第四稿（大神林的示例）
function fixed(str, n) {
	str = str + "";
	while (str.length < n) {
		str = " " + str;
	}
	return str;
}

function fn(num) {
	let max = {
		i: (num + '').length,
		ij: (num ** 2 + '').length
	}
	for (let i = 1; i <= num; i++) {
		let log = "";
		for (let j = 1; j <= i; j++) {
			log += j === 1 ? "" : " ";
			log += fixed(i, max.i) + "*" + fixed(j, max.i) + "=" + fixed(i * j, max.ij);
		}
		console.log(log);
	}
}
fn(16);


//第五稿（优化第三稿）
function helper(数字, 最长的时候) {
	let 目标 = Array.from(数字 + '')
	let 长度差 = 最长的时候.toString().length - 目标.length;
	if (长度差 !== 0) {
		for (let i = 0; i < 长度差; i++) {
			目标.unshift(' ');
		};
	}
	return 目标.join('')
}
function 我想要n阶乘法表(imax) {
	let jmax = +imax || 0
	for (let i = 1; i < jmax + 1; i++) {
		let target = []; //target result log
		for (let j = 1; j <= i; j++) {
			target.push(helper(i, jmax) + '*' + helper(j, jmax) + '=' + helper(i * j, jmax * jmax));
		};
		// console.log(ARR);
		console.log(target.join(''));
	}
	return undefined
}



//第六稿（1026复习）
function beaStr(getNum, maxLenth) {
	var aim = Array.from(getNum + '')
	let far = maxLenth.toString().length - aim.length
	if (far !== 0) {
		for (let i = 1; i < far + 1; i++) {
			aim.unshift(' ')
		}
	}
	return aim.join('')
}
function aaa(n) {
	for (i = 1; i < n + 1; i++) {
		let putOut = [];
		for (j = 1; j < i + 1; j++) {
			putOut.push(beaStr(i, n) + '*' + beaStr(j, n) + '=' + beaStr(i * j, n * n));
		}
		console.log(putOut.join('  '))
	}
}
aaa(12)