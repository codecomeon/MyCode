# CSS

## table
- border-collapse:collapse

## 居中
### 水平居中
```css
{
    /* 文本水平居中 */
    text-align: center;
    
    /* 块居中 */
    margin: 0;
}
```

### 垂直居中
```css
{
    /* 文本垂直居中：表格 */
    display:table-cell;
    vertical-align:middle;
    
    /* 块级垂直居中：绝对定位+transform补足 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* 注意：由于全百分比，可能会出现元素模糊，此时加一个hack */
    transform-style: preserve-3d;
    
    /* 视口居中vw、vh：仅适用于视口居中场景 */
    
    /* 最佳实践：flex */
    .parent{ display: flex; }
    .child{ margin:auto; }
}
```