最近出来实习，公司用的是react-imvc框架，[react-imvc](https://github.com/Lucifier129/react-imvc)是isomorphic mvc的react实现。我想通过做些小demo页面来学习学习这个框架。

#### 创建项目文件夹

进入要放置项目的目录输入命令`mkdir project-name`来创建项目文件夹，其中，`project-name`是你项目的名字。
然后执行`cd project-name`，进入该项目文件夹。

#### 创建package.json文件

```
npm init
```

执行上述命令创建一个package.json文件，然后输入关于项目的相关信息完成创建过程。

#### 安装react-imvc

```
npm install --save react-imvc
```

#### 配置

在package.json里添加`npm scripts`任务。

```
{
    "scripts": {
    "start": "react-imvc start",
    "build": "react-imvc build",
    "test": "react-imvc test"
  }
}
```

在package.json平级目录下添加`.babelrc`文件。

```
{
    "presets": [
        "env",
        "stage-0",
        "react"
    ]
}
```

#### 创建入口文件src/index.js

在当前项目文件夹下，添加源代码目录`src`，并在`src`目录下添加入口文件`index.js`。

```
// 入口文件index.js
export default [
    {
        path: ['/', '/home'],
        controller: require('./home/controller')
    }
]
```

#### 创建一个页面

在`src`目录下，添加页面，每个页面必须是包含一个`controller.js`文件的文件夹，其中，controller.js是每个页面的入口文件。

```
// src/home/controller.js
import React from 'react';
import Controller from 'react-imvc/controller';

export default class Home extends Controller {
    View = View;
}

function View() {
    return (
        <h1>Hello React-IMVC</h1>
    );
}
```

一个页面文件夹下包含三个文件：controller.js、view.js和model.js。其中，controller.js是必须的。如果组件很多，可以在页面目录下创建一个components文件夹用来存放相关组件。

- controller.js：控制器，包含生命周期方法、事件处理器、同构工具方法等。
- view.js：视图，react组件。
- model.js：模型，包含状态（state）和状态变化函数（action）。

#### 启动

`npm start`启动应用，然后打开`http://localhost:3000`就可以看到页面效果了。

#### 页面结构

- home：实现`Hello React-IMVC`。
- counter：实现一个简单的计数器。
