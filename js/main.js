// Danh sách kính
let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

// Import các lớp đối tượng
import { Glasses as ClassGlasses } from "./glasses.js";
import { GlassesList } from "./glassesList.js";

let glassesList = new GlassesList();

// hàm rút gọn lấy ID
const getEle = (id) => document.getElementById(id);

/**
 * B1: Hiển thị Danh sách kính
 * _Glasses
 * _GlassesList
 * B2: Xây dựng chức năng thử kính
 * B3: Xây dựng chức năng gỡ kính
 */

const showGlassesList = () => {
    let divGlass = getEle('vglassesList');

    // Duyệt qua mảng dữ liệu Data
    dataGlasses.map((item, index) => {
        // tạo lớp đối tượng kính và thêm vào danh sách kính
        let gl = new ClassGlasses(
            item.id,
            item.src,
            item.virtualImg,
            item.brand,
            item.name,
            item.color,
            item.price,
            item.description,
            item.status);
        // gọi phương thức addGlass, đưa đối tượng vào mảng
        glassesList.addGlasses(gl);
    });
    // hiển thị dữ liệu ra giao diện
    // gọi tới phương thức renderGlasses
    divGlass.innerHTML = glassesList.renderGlasses();
};
showGlassesList();

// Tạo hàm thử kính
const tryGlass = (e) => {
    // console.log("event:", e);
    let glassID = e.target.getAttribute("data-id");
    // console.log("glassID:", glassID);
    let glassObject = {};
    for (let item of glassesList.listGlass) {
        if (item.id == glassID) {
            glassObject = item;
        }
    }
    console.log("status", glassObject.status);
    //hiển thị thông tin của kính đó
    showInfoGlass(glassObject);
}

window.tryGlass = tryGlass;

//hàm hiển thị các thông tin của Kính
const showInfoGlass = (glassObject) => {
    let divAvatar = getEle('avatar');
    let divInfo = getEle('glassesInfo');

    divAvatar.innerHTML = `
    <img id="glass-id" src="${glassObject.virtualImg}"/>
    `;

    // kiểm tra còn hàng hay hết (sử dụng toán tử 3 ngôi)
    let status = "";
    status = (glassObject.status) ? "Stocking" : "Sold Out";

    divInfo.innerHTML = `
    <h5>${glassObject.name} - ${glassObject.brand} ${glassObject.color}</h5>
    <p class="card-text">
            <span class="btn btn-danger btn-sm mr-2">$${glassObject.price}</span>
            <span class="text-success">${status}</span>
        </p>
        <p class="card-text">
            ${glassObject.desc};
        </p>
    `;
    divInfo.style.display = "block";
}

// Gỡ kính
const removeGlasses = (isDisplay) => {
    let idGlass = getEle("glass-id");
    // console.log("id", idGlass);
    if (idGlass == null) {
        return;
    } else {
        if (isDisplay) {
            idGlass.style.opacity = 0.8;
        } else {
            idGlass.style.opacity = 0;
        }
    }
}

window.removeGlasses = removeGlasses;
