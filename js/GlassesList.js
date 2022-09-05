export class GlassesList {
    constructor() {
        this.listGlass = [];
    }
    addGlasses(itemGlass) {
        this.listGlass.push(itemGlass);
    }

    renderGlasses() {
        //Các thẻ html chứa nội dung của các đối tượng kính
        let html = '';
        html = this.listGlass.reduce((contentGlass, item, index) => {
            contentGlass += `
            <div class="col-4">
                <img class="img-fluid vglasses__items" onclick="tryGlass(event)" data-id="${item.id}" src="${item.src}" alt="Glasses ${index + 1}">
            </div>
            `;
            return contentGlass;
        }, "");
        return html;
    }
}