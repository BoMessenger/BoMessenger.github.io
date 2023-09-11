import {row, col} from "./utils"
function title(block){
    return row(col(`<h1>${block.value}</h1>`))
}
function editTitle(text){
    return row(col(`<h1>${text}</h1>`))
}
function text(block){
    return row(col(`<p>${block.value}</p>`))
}
function editText(text){
    return row(col(`<p>${text}</p>`))
}
function columns(block){
    const html = block.value.map(col).join('')
    return row(html)
}
function image(block){
    return row(`<img src="${block.value}"/>`)
}
export const templates = {
    title,
    text,
    image,
    columns,
    editText,
    editTitle
}