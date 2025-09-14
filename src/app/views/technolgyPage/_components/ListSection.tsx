import { useTheme } from "../../../providers/ThemeProvider";

interface ListSectionProps {
  title: string;
  items: string[];
}

export default function ListSection({ title, items }: ListSectionProps) {
  const { isDark } = useTheme();
  const pillClass = isDark
    ? "px-2 py-1 text-xs rounded-md border border-white/10 bg-white/5 text-center"
    : "px-2 py-1 text-xs rounded-md border border-black/10 bg-black/5 text-center";
  return (
    <section>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <ul className="grid grid-cols-4 gap-3">
        {items.map((item) => (
          <li key={item} className={pillClass}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
