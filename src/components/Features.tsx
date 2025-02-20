import { TruckIcon, CubeIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Vast Product Range',
    description: 'From cement to plumbing materials, we offer a comprehensive selection of construction supplies.',
    icon: CubeIcon,
  },
  {
    title: 'Reliable Delivery',
    description: 'Our efficient logistics ensure your materials arrive on time, every time.',
    icon: TruckIcon,
  },
  {
    title: 'Expert Consultation',
    description: 'Get professional guidance from our experienced team for your construction needs.',
    icon: UserGroupIcon,
  },
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-[#29235C] mb-4" />
              <h3 className="text-xl font-semibold text-[#29235C] mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
