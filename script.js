

var productItem = `<tr class="tableheader">
        <th width="20%" align="center">Image</td>
        <th width="40%" align="center">Name of Product</td>
        <th width="20%" align="center">Price</td>
        <th width="20%" align="center">Status</td>
    </tr>
    `;

for (let i in grocery.products) {
    productItem += `
    <tr>
        <td><img width=300em src="${grocery.products[i].img}"></td>
        <td><h3>${grocery.products[i].name}</h3></td>
        <td><p>${grocery.products[i].price}</p></td>
        <td><p>${grocery.products[i].status}</p></td>
    </tr>
    `;
}

$("table").append(productItem);