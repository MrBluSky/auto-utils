简洁，高效，实用的前端开发小工具！

## 安装
```
npm install auto-utils -s
```
## 使用
```
import { mock_data } from 'auto-utils';

mock_data(5, ()=> 'auto')
// ["auto", "auto", "auto", "auto", "auto"]

mock_data(5, (i)=> i)
// [0, 1, 2, 3, 4]

mock_data(5, (i)=> {
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
