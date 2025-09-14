interface ListSectionProps {
  title: string;
  items: string[];
}

export default function ListSection({ title, items }: ListSectionProps) {
  return (
    <section>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <ul className="grid grid-cols-2 gap-3">
        {items.map((item) => (
          <li
            key={item}
            className="surface rounded-lg px-4 py-2 text-sm text-center hover:shadow-md transition-shadow"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
