// 模擬後端API獲取的HTML字符串時，通常這些字符串會包含產品描述、市場營銷文案或者其他HTML格式的資訊。
// 下面是一個範例：
// 在這個範例中，productDescription是模擬的從後端API獲取的HTML字符串，它被用來展示產品的詳細特點。
// Product組件接收這個HTML字符串並通過dangerouslySetInnerHTML將其渲染到頁面上。
// 請注意在實際應用中，您應該確保從API獲取的HTML是可信任的，以防止XSS攻擊。

import React from "react";

// 假設這是從後端API返回的HTML字符串
const productDescription = `
  <div class="product-description">
    <h2>產品特點</h2>
    <ul>
      <li>由自然材料製成，安全無害</li>
      <li>手工製作，每一件都獨一無二</li>
      <li>含有維他命E，長期使用可改善皮膚狀況</li>
    </ul>
    <p>這款手工皂選用最純淨的橄欖油，給您最溫和的洗感。</p>
  </div>
`;

// 產品的其他資訊
const productInfo = {
    title: '天然橄欖油手工皂',
    price: '39.99'
};

// 客製化組件(結合商品的資訊)
function Product({desp, info}) {
    const createHtml = (despHtml) => {
        // 這個函式用來將HTML字符串轉換為React元素
        // __html 是 React 要求的一個特殊屬性名稱
        return {__html: despHtml};
    };

    return (
        <div>
            <h1>{info.title}</h1>
            <div dangerouslySetInnerHTML={createHtml(desp)} />
            價格：${info.price}
        </div>
    );
}

function JSXDangerousDemo() {
    return (
        <div>
            <Product desp={productDescription} info={productInfo} />
        </div>
    );
}

export default JSXDangerousDemo;
