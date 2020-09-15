var keys = {
	0: { 0: ' 1 ', 1: ' 2 ', 2: ' 3 ', 3: ' 4 ', 4: ' 5 ', 5: ' 6 ', 6: ' 7 ', 7: ' 8 ', 8: ' 9 ', 9: ' 0 ', 'length': 10 },
	1: { 0: ' q ', 1: ' w ', 2: ' e ', 3: ' r ', 4: ' t ', 5: ' y ', 6: ' u ', 7: ' i ', 8: ' o ', 9: ' p ', 'length': 10 },
	2: { 0: ' a ', 1: ' s ', 2: ' d ', 3: ' f ', 4: ' g ', 5: ' h ', 6: ' j ', 7: ' k ', 8: ' l ', 'length': 9 },
	3: { 0: ' z ', 1: ' x ', 2: ' c ', 3: ' v ', 4: ' b ', 5: ' n ', 6: ' m ', 'length': 7 },
	'length': 4
}
// 数组里面有数组
// var keys = {
//     '0': {' 1 ',' 2 ',' 3 ',' 4 ',' 5 ',' 6 ',' 7 ',' 8 ',' 9 ',' 0 ','length':10},
//     '1': {' q ',' w ',' e ',' r ',' t ',' y ',' u ',' i ',' o ',' p ','length':10},
//     '2': {' a ',' s ',' d ',' f ',' g ',' h ',' j ',' k ',' l ','length':9},
//     '3': {' z ',' x ',' c ',' v ',' b ',' n ',' m ','length':7},
//     'length': 4
// }
//数组keys的长度为4，每个数里面还包裹这数组
var hash = {
	'q': 'qq.com',
	'w': 'weibo.com',
	'e': 'lee.me',
	'r': 'renren.com',
	't': 'tianya.com',
	'y': 'youtube.com',
	'u': 'uc.com',
	'i': 'iqiyi.com',
	'o': 'opere.com',
	'p': undefined,
	'a': 'acfun.tv',
	's': 'sohu.com',
	'z': 'zhihu.com',
	'm': 'www.mcdonalds.com.cn'
}
index = 0
while (index < keys['length']) {//0123
	hang = document.createElement('div')
	keyboard1.appendChild(hang)
	row = keys[index]//第一个数组0 第二个数组1 第三个数组2 第四个数组3
	console.log(row)
	index2 = 0
	while (index2 < row['length']) {//index=0时row的length=10，index=1时row的length=10，index=2时row的length=9，index=3时row的length=7
		//index2的取值：index=0时0-9，index=1时0-9，index=2时0-7，index=3时0-6
		jian = document.createElement('kbd')
		jian.textContent = row[index2]
		hang.appendChild(jian)
		index2 = index2 + 1
	}
	index = index + 1
}
