let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let card3 = document.getElementById('card3');
let contentDiv = document.getElementById('content');

let uniPhotos = [
    'images/u1.png'
    'https://picsum.photos/id/10/200/150',
    'https://picsum.photos/id/20/200/150',
    'https://picsum.photos/id/30/200/150',
    'https://picsum.photos/id/40/200/150'
];

let chinaPhotos = [
    'https://picsum.photos/id/100/200/150',
    'https://picsum.photos/id/101/200/150',
    'https://picsum.photos/id/102/200/150',
    'https://picsum.photos/id/103/200/150',
    'https://picsum.photos/id/104/200/150'
];

let blockImages = [
    'https://picsum.photos/id/200/400/300',
    'https://picsum.photos/id/201/400/300',
    'https://picsum.photos/id/202/400/300',
    'https://picsum.photos/id/203/400/300',
    'https://picsum.photos/id/204/400/300'
];

function showPhotos(photos) {
    let html = '';
    for (let i = 0; i < photos.length; i++) {
        html = html + '<img src="' + photos[i] + '" onclick="window.open(\'' + photos[i] + '\')">';
    }
    contentDiv.innerHTML = html;
}

function showAnimation(images) {
    let current = 0;
    let html = '';
    html = html + '<div id="animArea" style="max-width:500px; margin:0 auto;">';
    html = html + '<img id="animImg" src="' + images[0] + '" style="width:100%; cursor:pointer;">';
    html = html + '<p style="color:#888;">鼠标左右移动查看动画</p>';
    html = html + '</div>';
    contentDiv.innerHTML = html;
    
    let animImg = document.getElementById('animImg');
    let animArea = document.getElementById('animArea');
    
    animImg.onclick = function() {
        window.open(images[0]);
    };
    
    animArea.onmousemove = function(e) {
        let rect = animArea.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let width = rect.width;
        let index = Math.floor((x / width) * images.length);
        if (index < 0) index = 0;
        if (index >= images.length) index = images.length - 1;
        
        animImg.src = images[index];
        animImg.onclick = function() {
            window.open(images[index]);
        };
    };
    
    animArea.onmouseleave = function() {
        animImg.src = images[0];
        animImg.onclick = function() {
            window.open(images[0]);
        };
    };
}

card1.onclick = function() {
    showPhotos(uniPhotos);
};

card2.onclick = function() {
    showPhotos(chinaPhotos);
};

card3.onclick = function() {
    showAnimation(blockImages);
}