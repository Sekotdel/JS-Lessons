//ES5
function Product(name, price) {
  this.name = name;
  this.price = price;

  this._basePrice = price;

  console.log(arguments);
}


Product.prototype.discount = function(percent) {
  if (percent > 100) {
    throw 'Нельзя делать скидку больше 100%';
  }

  if (percent < 1) {
    throw 'Процент должен быть целым числом от 1 до 100';
  }

  this.price = this._basePrice * (100 - percent) / 100;

  return this;
}

Product.prototype.make25PercentDiscount = function() {
  return this.discount(25);
}

Product.prototype.getPrice = function() {
  return this.price;
}

/*const ppc = new Product('Yeye', 50);

ppc.make25PercentDiscount().getPrice();*/

function ProductChild(name, price, childProperty) {
  const rnd = ((min, max) => Math.floor(min + Math.random() * (max + 1 - min)))(0, 2);

  // Просто прикол ~~^_^~~
  switch (rnd) {
    case 0:
      Product.apply(this, [name, price]);
      break;
    case 1:
      Product.call(this, name, price); 
      break;
    default:
      Product.bind(this)(name, price);
      break;
  }

  this.childProperty = childProperty;
}

ProductChild.prototype = Object.create(Product.prototype);


ProductChild.prototype.make50PercentDiscount = function() {
  return this.discount(50);
}

ProductChild.prototype.make75PercentDiscount = function() {
  return this.discount(75);
}

ProductChild.prototype.getDiscountedPrice = function(discountPercent) {
  return this.discount(discountPercent).getPrice();
}

const ppcChild = new ProductChild('Yoyo', 75, 87);
//ppcChild.make25PercentDiscount().getPrice();
//ppcChild.make50PercentDiscount().getPrice();
//ppcChild.make75PercentDiscount().getPrice();
ppcChild.getDiscountedPrice(101);

//ES6

class ProductES {
  constructor(name, price) {
    this.name = name;
    this.price = price;

    this._basePrice = price;

    console.log(arguments);
  }

  discount(percent) {
    if (percent > 100) {
      throw 'Нельзя делать скидку больше 100%';
    }

    if (percent < 1) {
      throw 'Процент должен быть целым числом от 1 до 100';
    }

    this.price = this._basePrice * (100 - percent) / 100;

    return this;
  }

  make25PercentDiscount() {
    return this.discount(25);
  }

  getPrice() {
    return this.price;
  }
}

class ProductESChild extends ProductES {
  constructor(name, price, childProperty) {
    super(name, price);

    this.childProperty = childProperty;
  }

  make50PercentDiscount() {
    return this.discount(50);
  }

  make75PercentDiscount() {
    return this.discount(75);
  }

  getDiscountedPrice(discountPercent) {
    return this.discount(discountPercent).getPrice();
  }
}

const esProd = new ProductES('yoyo', 10);
const esProdChild = new ProductES('yoyoChild', 105, 99);


