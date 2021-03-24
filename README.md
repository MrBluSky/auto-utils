简洁，高效，实用的前端开发小工具！

## 安装
```
npm install auto-utils -s
```
## 使用(详情可以查看源码，很简洁)
```
import { mock_data } from 'auto-utils';

mock_data(5, ()=> 'auto')
// ["auto", "auto", "auto", "auto", "auto"]

mock_data(5, (i)=> i)
// [0, 1, 2, 3, 4]

mock_data(2, (i)=> {
	return {
		name: `auto-${i}`,
		version: i
	}
})
/**
 [
		{
			"name": "auto-0",
			"version": 0
		},
		{
			"name": "auto-1",
			"version": 1
		}
	]
 */

```
### 有关 excel_to_web 的使用
![](https://blusky.oss-cn-beijing.aliyuncs.com/excel.png)

```
import { excel_to_web } from 'auto-utils';

excel_to_web(dom.value)
==>
/*
[
  [""1", "", "", "33"]
  ["2", "22", "33", ""]
  ["3", "33", "", ""]
  ["4", "44", "55", "66"]
  ["5", "55", "66", "77"]
  ["6", "66", "77", "88"]
]
*/
```
![](https://blusky.oss-cn-beijing.aliyuncs.com/excel-test.png)

## 有关 get_baidu_doc 的测试
![](https://blusky.oss-cn-beijing.aliyuncs.com/doc-test.png)

