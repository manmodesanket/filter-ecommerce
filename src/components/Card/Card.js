export default function Card({ item }) {
  return (
    <article className="flex flex-col cursor-pointer hover:shadow-lg p-2">
      <img src={item.img} className="h-80" />
      <div>{item.name}</div>
      <div>Rs.{item.price}</div>
      <div>
        Size:{" "}
        {item.size.map((s, i) => (
          <span key={i}>{i < item.size.length - 1 ? `${s},` : `${s}`}</span>
        ))}
      </div>
    </article>
  );
}
