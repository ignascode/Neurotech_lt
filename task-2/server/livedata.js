const faker = require("faker");
let id = 0;

function generateNewPrice() {
	var upd_price = faker.commerce.price();
	const newPrice = {
		id: id++,
		price: upd_price,
	};
	return newPrice;
}

const dbPrices = [];
for (let x = 0; x < 10; x++) {
	dbPrices.push(generateNewPrice());
}

function pricesData() {
	return {
		get prices() {
			dbPrices.push(generateNewPrice());
			return dbPrices;
		},
	};
}

module.exports = pricesData;
