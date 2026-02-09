import '../styles/Featured.css';
import item1 from '../assets/treats/treat1.png';
import item2 from '../assets/treats/treat2.png';
import item3 from '../assets/treats/treat3.png';

const Featured = () => {
  const products = [
    {
      id: 1,
      name: 'Puff Pastry',
      price: 8,
      image: item1,
    },
    {
      id: 2,
      name: 'Doughnuts',
      price: 8,
      image: item2,
    },
    {
      id: 3,
      name: 'Brownies',
      price: 8,
      image: item3,
    },
  ];

  return (
    <section className="featured">
      <h1>Featured Treats</h1>

      <div className="featured-grid">
        {products.map((item) => (
          <div className="featured-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <span>${item.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
