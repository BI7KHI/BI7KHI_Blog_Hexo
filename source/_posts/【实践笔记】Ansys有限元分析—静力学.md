---
title: 【实践笔记】Ansys有限元分析—静力学
tags: [Ansys,有限元分析,静力学,材料力学]
mathjax: true
date: 2025-12-06 17:16:21
categories: 技术
cover: /images/Ansys/cover.jpg
---

> 软件版本：Ansys Workbench 2025 R2

以铝型材受压模拟进行的有限元分析示例，用于静力学有限元分析的基本操作

## 工程数据

进入Ansys Workbench，选择“Static Structural静态结构”模块，拖入项目框架中。
![Workbench](/images/Ansys/WB.png)
双击进入“工程数据”模块，右键空白处进入工程数据源，点击加号➕添加合适的材料
![工程数据](/images/Ansys/gcsjy.png)
![工程数据](/images/Ansys/gcsjy2.png)

### 新建材料
在工程数据源添加一个新的库，点击进入编辑模式，然后进入工程数据，点击新建材料命名，左侧双击添加相应的材料数据
![新建材料](/images/Ansys/xjcl.png)

编辑完成推出需要先保存数据然后退出编辑模式
![保存材料](/images/Ansys/bccl.png)

## 几何结构
回到Workbench，双击几何结构模块，进入Discovery界面

> Ansys Discovery是一个集成的3D建模和仿真环境，适用于快速设计迭代和概念验证。
> 同时Workbench支持SpaceClaim,DesignModeler等编辑器，需要提前导入相应的模型
> 这里以Discovery为例

![几何结构](/images/Ansys/jhjg.png)
![插入几何体](/images/Ansys/chjht.png)

建模以及模型后处理和大部分参数化三维CAD类似，这是配置好的夹具模型

![夹具模型](/images/Ansys/夹具模型.png)

保存并回到Workbench，进入工作树的下一个"模型"的工作流程

## 模型
进入静态结构的Mechanical界面
![Mechanical界面](/images/Ansys/Mechanical.png)
首先应该处理的是每个几何体的材料属性赋值
![材料赋值](/images/Ansys/材料属性.png)
然后处理几何接触
将三个接触对均设置为摩擦，摩擦系数0.1
![接触设置](/images/Ansys/接触.png)
进行网格划分
![网格划分](/images/Ansys/网格.png)
进入静态结构设置
![静态结构设置](/images/Ansys/静态结构.png)
可以在界面顶部菜单选择环境，也可以鼠标右键添加
添加了两个固定支撑，一个主位移载荷，位移1e-4m竖直向下，无重力场
![环境条件](/images/Ansys/环境条件.png)
解决方案添加相应的结果输出
![结果输出](/images/Ansys/结果输出.png)
然后进行结果运算，结果图形动画可以在下方进行预览和导出
![云图](/images/Ansys/云图.png)

## 用于材料力学课堂展示的PPT
> 作业来着

![1](/images/Ansys/PPT/1.png)
![2](/images/Ansys/PPT/2.png)
![3](/images/Ansys/PPT/3.png)
![4](/images/Ansys/PPT/4.png)
![5](/images/Ansys/PPT/5.png)
![6](/images/Ansys/PPT/6.png)
![7](/images/Ansys/PPT/7.png)
![8](/images/Ansys/PPT/8.png)
![9](/images/Ansys/PPT/9.png)
![10](/images/Ansys/PPT/10.png)
