import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import sweetJalebi from '@/assets/sweet-jalebi.jpg';
import sweetBarfi from '@/assets/sweet-barfi.jpg';
import sweetLadoo from '@/assets/sweet-ladoo.jpg';
import sweetRasgulla from '@/assets/sweet-rasgulla.jpg';
import sweetGulabjamun from '@/assets/sweet-gulabjamun.jpg';
import sweetRasmalai from '@/assets/sweet-rasmalai.jpg';

const menuItems = [
  {
    id: 1,
    name: 'Jalebi',
    category: 'Fried Sweets',
    price: '৳80/250g',
    image: sweetJalebi,
  },
  {
    id: 2,
    name: 'Rose Barfi',
    category: 'Milk Sweets',
    price: '৳120/250g',
    image: sweetBarfi,
  },
  {
    id: 3,
    name: 'Besan Ladoo',
    category: 'Traditional',
    price: '৳100/250g',
    image: sweetLadoo,
  },
  {
    id: 4,
    name: 'Rasgulla',
    category: 'Bengali Sweets',
    price: '৳90/6pcs',
    image: sweetRasgulla,
  },
  {
    id: 5,
    name: 'Gulab Jamun',
    category: 'Syrup Sweets',
    price: '৳110/6pcs',
    image: sweetGulabjamun,
  },
  {
    id: 6,
    name: 'Rasmalai',
    category: 'Bengali Sweets',
    price: '৳150/4pcs',
    image: sweetRasmalai,
  },
];

const MenuPreview = () => {
  return (
    <section id="products" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Collection
          </span>
          <h2 className="section-title mt-2">Sweet Menu</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Discover our handcrafted selection of traditional Asian sweets, 
            made fresh daily with authentic recipes passed down through generations.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              className="card-sweet group flex flex-col sm:flex-row"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative w-full sm:w-32 h-48 sm:h-auto flex-shrink-0 overflow-hidden rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col justify-center">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground mt-1">
                  {item.name}
                </h3>
                <span className="text-lg text-golden-dark font-bold mt-2">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/products" className="btn-primary inline-flex items-center gap-2">
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
