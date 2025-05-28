type Product = {
	id: string;
	name: string;
	price: number;
};
// 겹치는 필드에 대해서 정의한 후 확장하면 타입확장성이 좋아진다.

type DiscountedProduct = Product & {
	discountRatio: number;
};

interface IProduct {
	id: string;
	name: string;
	price: number;
}
interface DiscountProduct extends IProduct {
	discountRatio: number;
}

// 겹치는거 없어도 교차타입은 사용가능
type Popularity = {
	rate: number;
};
interface Review {
	rate: string;
}

// rate 필트가 겹치고 다른 타입으로 정의했을 경우, 교차타입 만들어지긴하지만 never타입이 된다

type Filter = Popularity & Review;

let filter: Filter = {
	rate: 4,
};

// interface로 확장할때는 겹치는 필드가 있으면 확장할때부터 에러가 난다.

interface IFilter extends Popularity, Review {}

interface Products {
	img: string;
	name: string;
	description: string;
}
interface SalesProducts extends Products {
	discountPercent: number;
}
type ApiResponse = {
	products: Products[];
	salesProducts: SalesProducts[];
};
