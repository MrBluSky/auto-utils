/**
 * 
 * 创建指定大小的数组，并使用回调来“自定义”填充内容
 */
export const mock_data = (size, fn) => {
	return Array(size).fill().map((item, i) => fn.call(null, i))
}

/**
 * 
 * 复制Excel单元格内容至Web，数据转换
 */
export const excel_to_web = (content) =>{
	return JSON.stringify(content).split("\\n").map((item) => item.split("\\t"));
}

/**
 * 
 * 复制“百度文库”文档内容（需要自行分段）
 * 说明：先手动滚动，使得文档内容内容全部加载完毕，即可使用该方法复制文档
 */

export const get_baidu_doc = () =>{
	return $$('.ie-fix p').map((item) => item.innerText).join('');
} 

