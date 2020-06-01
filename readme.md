- JS/CSS 面试基础  蔡刚宝典， 自己看最重要。
- 面向顶级就业  阿里/腾讯/头条
    tree  DOM树/CSS 渲染树  VNODE  虚拟节点  Virtual  DOM
    JS 原生   基础能力   内功  

    = Virtual DOM    babel  AST 抽象语法树 ？

问题
<template>
    <div id="root">
        <span class="demo">
            this is a span
        </span> 
        <p>DOM</p>
    </div>
</template>
JSON 表达    JS 原生能力 
html -> js (tree, json )
描述性  抽象
别无其他   JSON  表达对一个节点的抽象
DOM 文本节点nodeType  
tree 的定义  treeNode 结构都一样
屏蔽了最底层文本节点的差异
递归算法，
{
    tag: 'div'，     // 标签
    attrs: {         // 标签上的所有属性   封装
        id: 'root'
    }，
    children: [
        {
            tag: 'span',
            attrs: {
                className: 'demo'
            },
            children: [
                {
                    tag: undefined,
                    text: 'DOM'
                }
            ]
        },
        {
            tag: 'p',
            children: [
                {
                    tag: undefined,
                    text: 'DOM'
                }
            ]
        }
    ]
}

只要更强  就一定可以就业更强