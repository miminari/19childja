//const fetch = require('node-fetch');
const fs = require('fs');
const ejs = require('ejs');

//テンプレ作成
let template = "$theme-colors: (<%- editor_colors -%>);";

//color_config.jsonを読み込み
const colors_json = JSON.parse(fs.readFileSync('./color_config.json', 'utf8'));
const colors_obj = Object.keys(colors_json);//objectに変換
let editor_colors_txt = "";
console.log(colors_obj.length);
colors_obj.forEach((key) => {
    const color =  key + ' : ' + colors_json[key] + ',';
    console.log(color);
    editor_colors_txt += color;
});

let scss = ejs.render(template,{editor_colors: editor_colors_txt});
fs.writeFileSync('_color_config.scss',scss);

console.log(colors_json);
console.log(colors_obj);
console.log(editor_colors_txt);
console.log(scss);

// //functions.phpを読み込み
// let viewfile = fs.readFileSync('../functions.php', 'utf8');
// //editor-color-paletteを解析
// const is_colors = viewfile.includes('editor-color-palette');
// if(is_colors){ //エディターカラーの設定がある場合
//     // "add_theme_support( 'editor-color-palette', array("で分割
//     const regex1 = /add_theme_support\s*\(\s*\'editor-color-palette\'\s*\,\s*array\s*\(\s*\n*/gi;
//     const sp1 = viewfile.split(regex1);
//     // "));"で分割
//     const regex2 = /\s*\)\s*\)\s*\;/gi;
//     const sp2 = sp1[1].split(regex2);
//     // "array("で分割
//     const regex3 = /\s*array\s*\(\s*/gi;
//     const colors = sp2[0].split(regex3);
//     //色とslugを配列に入れる
//     const editor_colors = '';
//     for(const color of colors){
//         //slugを取得
//         const reg_slug = /\s*slug\s*\'\s*=>.*\,/gi;
//         const part_slug = color.match(reg_slug);
//         const reg_slug2 = />\s*/;
//         console.log(part_slug);
//         //const slug_name = part_slug.split(reg_slug2);
        
//         //console.log(slug_name);
//         //colorを取得
//         const reg_color = /\s*color\s*\'\s*=>.*\,/gi;
//         const part_color = color.match(reg_color);
//         console.log(part_color);
//     };
//     //_color_config.scssを生成して保存

// } else { //エディターカラーの設定がない場合
//     console.error('エディターカラーの設定がないようです');
// }
