type StatProps = {
  value: string;
  label: string;
};

export function Stats({ items, title }: { items: StatProps[]; title?: string }) {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        {title && <h3 className="text-xl font-semibold mb-6">{title}</h3>}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((s) => (
            <div key={s.label} className="rounded-md border border-gray-200 p-6 text-center bg-white">
              <div className="text-2xl font-semibold text-gray-900">{s.value}</div>
              <div className="mt-1 text-gray-600">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


