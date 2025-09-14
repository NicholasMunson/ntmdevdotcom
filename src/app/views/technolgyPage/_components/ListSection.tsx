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
            className="px-2 py-1 text-xs rounded-md border border-white/10 bg-white/5 text-center"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
