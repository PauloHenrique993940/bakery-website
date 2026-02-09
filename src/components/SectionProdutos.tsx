import '../styles/SectionProdutos.css';

import biscoito1 from '../assets/produtos/biscoito1.png';
import biscoito2 from '../assets/produtos/biscoito2.png';
import biscoito3 from '../assets/produtos/biscoito3.png';
import biscoito4 from '../assets/produtos/biscoito4.png';
import biscoito5 from '../assets/produtos/biscoito5.png';
import biscoito6 from '../assets/produtos/biscoito6.png';

const SectionProdutos = () => {
  const products = [
    { id: 1, name: 'Whole Grain Bread', price: '$40', image: biscoito1 },
    { id: 2, name: 'Whole Grain Bread', price: '$40', image: biscoito2 },
    { id: 3, name: 'Whole Grain Bread', price: '$40', image: biscoito3 },
    { id: 4, name: 'Whole Grain Bread', price: '$40', image: biscoito4 },
    { id: 5, name: 'Whole Grain Bread', price: '$40', image: biscoito5 },
    { id: 6, name: 'Whole Grain Bread', price: '$40', image: biscoito6 },
  ];

  return (
    <section className="section-products">
      <h1 className="title">Top Products</h1>

      <div className="grid-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <span className="price">{product.price}</span>

            <div className="product-info">
              <p>{product.name}</p>
              <button className="add-btn">Add</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionProdutos;
