import {
  BoltIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon,
  BanknotesIcon,
} from '@heroicons/react/24/outline';

const ICONS = {
  BoltIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon,
  BanknotesIcon,
};

type Pillar = {
  title: string;
  description: string;
  icon: keyof typeof ICONS;
};

export function Pillars({ items }: { items: Pillar[] }) {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <div key={item.title} className="rounded-lg border border-gray-200 p-6 bg-white">
              <Icon className="h-7 w-7 text-brand-primary" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}


