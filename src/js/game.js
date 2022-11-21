export default class Game {
    constructor(img, size) {
        this.size = size;
        this.img = img;
    }

    //создания контейнера
    createContainer() {
        const body = document.querySelector('body');
        const container = '<section class = "game"><div class = "field_container" id = "fieldContainer"></div></section>';
        body.insertAdjacentHTML('afterbegin', container);
    }

    //создание полей
    createField() {
        const fieldContainer = document.getElementById('fieldContainer');
        const fieldSize = this.size ** 2;

        for (let i = 0; i < fieldSize; i += 1) {
            const field = `<div class = "field" data-id = "${i}"></div>`;
            fieldContainer.insertAdjacentHTML('beforeend', field);
        }
    }

    //создание картинки
    createImage() {
        const image = document.createElement('img');
        image.src = this.img;
        image.className = "goblin";
        return image;
    }

    //появление картинки в поле
    imageInField(img) {
        const max = this.size ** 2;
        const id = Math.floor(Math.random() * max); 
        const dataId = document.querySelector(`div[data-id = '${id}']`);
        dataId.append(img);
    }

    //запуск игры
    start() {
        this.createContainer();
        this.createField();
        const image = this.createImage();

        setInterval(() => {
            this.imageInField(image);
        }, 1000);
    }
}