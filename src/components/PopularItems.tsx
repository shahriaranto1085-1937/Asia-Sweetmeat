import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import y1 from '@/assets/y1.jpg';
import y2 from '@/assets/y2.jpg';
import y3 from '@/assets/y3.jpg';
import y4 from '@/assets/y4.jpg';

const popularItems = [
  { id: 1, name: 'Special Yogurt', description: 'Traditional Yogurt of Bogura', price: '৳320', image: y1 },
  { id: 2, name: 'Rose Barfi', description: 'Delicate milk fudge with rose essence', price: '৳120', image: y2 },
  { id: 3, name: 'Besan Ladoo', description: 'Golden gram flour balls with ghee', price: '৳100', image: y3 },
  { id: 4, name: 'Rasgulla', description: 'Spongy cottage cheese in light syrup', price: '৳90', image: y4 },
];

const PopularItems = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 text-primary font-medium text-sm uppercase tracking-wider">
              <Sparkles className="w-4 h-4" /> Customer Favorites
            </span>
            <h2 className="section-title mt-2">Popular Items</h2>
          </div>
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-medium shadow-[var(--shadow-warm)] hover:brightness-110 transition-all duration-300"
          >
            Browse All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularItems.map((item, index) => (
            <div key={item.id} className="card-sweet group" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="relative aspect-square overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-foreground">{item.name}</h3>
                  <span className="text-primary font-bold whitespace-nowrap">{item.price}</span>
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularItems;
