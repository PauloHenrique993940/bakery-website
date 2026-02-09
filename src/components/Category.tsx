import { useState } from 'react';
import '../styles/Category.css';
import type { Category } from '../types';

import Prato1 from '../assets/bolos/bolo1.png';
import Prato2 from '../assets/bolos/bolo2.png';
import Prato3 from '../assets/bolos/bolo3.png';
import Prato4 from '../assets/bolos/bolo4.png';
import Prato5 from '../assets/bolos/bolo5.png';
import Prato6 from '../assets/bolos/bolo6.png';

const CATEGORY_DATA: Record<Category, string[]> = {
  // Todos agora com 6 imagens para preencher 2 linhas de 3
  Cake: [Prato1, Prato2, Prato3, Prato4, Prato5, Prato6],
  Muffins: [Prato2, Prato4, Prato6, Prato1, Prato3, Prato5],
  Croissant: [Prato3, Prato1, Prato5, Prato2, Prato4, Prato6],
  Bread: [Prato4, Prato6, Prato2, Prato5, Prato1, Prato3],
  Tart: [Prato5, Prato2, Prato1, Prato6, Prato3, Prato4],
  Favorite: [Prato6, Prato5, Prato4, Prato3, Prato2, Prato1],
};

const categories: Category[] = [
  'Cake',
  'Muffins',
  'Croissant',
  'Bread',
  'Tart',
  'Favorite',
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<Category>('Cake');
  const currentImages = CATEGORY_DATA[activeTab] || [];

  return (
    <section className="explore-container">
      <h2 className="explore-title">Explore More</h2>

      <nav className="filter-nav">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeTab === cat ? 'active' : ''}`}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </button>
        ))}
      </nav>

      <div className="grid-container">
        {currentImages.map((imgSrc, index) => (
          <div key={`${activeTab}-${index}`} className="grid-item">
            <img src={imgSrc} alt={`${activeTab} item ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
