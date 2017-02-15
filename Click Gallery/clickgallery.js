function renderImages(images) {
  for(var i=0; i<images.length; i++) {
    var img = images[i];
    var $wrapper = document.createElement('div');

    var $img = document.createElement('img');
    $img.setAttribute('src', img.src);
    $img.setAttribute('class', img.class);
    $img.setAttribute('alt', img.caption);

    var $caption = document.createElement('p');
    $caption.innerText = img.caption;

    $wrapper.appendChild($caption);
    $wrapper.appendChild($img);

    document.body.appendChild($wrapper);
  }
}

var images = [
  {
    src: 'http://placekitten.com/201/201',
    caption: 'this cat',
    class: 'cat2'
  },
  {
    src: 'http://placekitten.com/201/202',
    caption: 'no, THIS cat'
  },
  {
    src: 'https://img1.wsimg.com/fos/sales/cwh/8/images/cats-with-hats-shop-06.jpg',
    caption: 'look at me now'},
  {
    src:
    'https://img1.wsimg.com/fos/sales/cwh/8/images/cats-with-hats-shop-04.jpg',
    caption: 'cant touch this!'
  },
  {
    src:
    'https://img1.wsimg.com/fos/sales/cwh/8/images/cats-with-hats-shop-06.jpg',
    caption: 'new cat'},
 {
   src: 'https://img1.wsimg.com/fos/sales/cwh/8/images/cats-with-hats-shop-05.jpg',
   caption:  'nice hat'},

];
function clickMe(){
  renderImages(images);
};


function renderImagesTwo(imagesTwo) {
  for(var i=0; i<imagesTwo.length; i++) {
    var img = imagesTwo[i];
    var $wrapper = document.createElement('div');

    var $img = document.createElement('img');
    $img.setAttribute('src', img.src);
    $img.setAttribute('class', img.class);
    $img.setAttribute('alt', img.caption);

    var $caption = document.createElement('p');
    $caption.innerText = img.caption;

    $wrapper.appendChild($caption);
    $wrapper.appendChild($img);

    document.body.appendChild($wrapper);
  }
}

var imagesTwo = [
  {
    src: 'https://static.pexels.com/photos/59523/pexels-photo-59523.jpeg',
    caption: 'this dog',
  },
  {
    src: 'http://brucker-kishlerfuneralhome.com/wp-content/uploads/2015/07/pets.jpg',
    caption: 'no, THIS dog'
  },
  {
    src: 'http://cdn.akc.org/FatDogs.jpg',
    caption: 'look at me now'}

];
function pushMe(){
  renderImagesTwo(imagesTwo);
};
