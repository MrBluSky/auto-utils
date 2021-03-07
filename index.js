/**
 * 
 * 创建指定大小的数组，并使用回调来“自定义”填充内容
 */
export const mock_data = (size, fn) => {
	return Array(size).fill().map((item, i) => fn.call(null, i))
}










