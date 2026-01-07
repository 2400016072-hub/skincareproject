import { useParams } from 'react-router-dom';
import { productsData } from '../../data/products'; 

const AdminEdit = () => {
    const { id } = useParams();
    const product = productsData.find((p) => p.id == id); 

    if (!product) {
        return <div>Produk tidak ditemukan!</div>; 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const updatedProduct = Object.fromEntries(data.entries());
        console.log("Edit produk:", id, updatedProduct);
    };

    return (
        <div className="admin-edit-container">
            <h2>Edit Produk: {product.name}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nama Produk:</label>
                    <input type="text" id="name" name="name" defaultValue={product.name} required />
                </div>
                <div>
                    <label htmlFor="category">Kategori:</label>
                    <input type="text" id="category" name="category" defaultValue={product.category} required />
                </div>
                <div>
                    <label htmlFor="price">Harga:</label>
                    <input type="number" id="price" name="price" defaultValue={product.price} required />
                </div>
                <button type="submit">Simpan</button>
            </form>
        </div>
    );
};

export default AdminEdit;
