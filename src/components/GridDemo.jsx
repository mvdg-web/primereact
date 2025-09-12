import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

export const GridDemo = () => {
	const products = [
		{
			id: '1000',
			code: 'f230fh0g3',
			name: 'Bamboo Watch',
			description: 'Product Description',
			image: 'bamboo-watch.jpg',
			price: 65,
			category: 'Accessories',
			quantity: 24,
			inventoryStatus: 'INSTOCK',
			rating: 5
		},
		{
			id: '2000',
			code: 'f230fh0g3',
			name: 'Bamboo Watch',
			description: 'Product Description',
			image: 'bamboo-watch.jpg',
			price: 65,
			category: 'Accessories',
			quantity: 24,
			inventoryStatus: 'INSTOCK',
			rating: 5
		}, {
			id: '3000',
			code: 'f230fh0g3',
			name: 'Bamboo Watch',
			description: 'Product Description',
			image: 'bamboo-watch.jpg',
			price: 65,
			category: 'Accessories',
			quantity: 24,
			inventoryStatus: 'INSTOCK',
			rating: 5
		},
		{
			id: '4000',
			code: 'f230fh0g3',
			name: 'Bamboo Watch',
			description: 'Product Description',
			image: 'bamboo-watch.jpg',
			price: 65,
			category: 'Accessories',
			quantity: 24,
			inventoryStatus: 'INSTOCK',
			rating: 5
		},
		{
			id: '1000',
			code: 'f230fh0g3',
			name: 'Bamboo Watch',
			description: 'Product Description',
			image: 'bamboo-watch.jpg',
			price: 65,
			category: 'Accessories',
			quantity: 24,
			inventoryStatus: 'INSTOCK',
			rating: 5
		}
	];


	return (
		<DataTable value={products} tableStyle={{minWidth: '50rem'}} >
			<Column field="code" header="Code" ></Column >
			<Column field="name" header="Name" ></Column >
			<Column field="category" header="Category" ></Column >
			<Column field="quantity" header="Quantity" ></Column >
		</DataTable >
	);
}
