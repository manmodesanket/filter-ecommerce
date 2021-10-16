import { Card } from "..";

export default function Result({ data }) {
  return (
    <section className="grid grid-cols-4 gap-2 p-2 w-10/12">
      {data.map((item) => (
        <Card key={item.id} item={item}></Card>
      ))}
    </section>
  );
}
