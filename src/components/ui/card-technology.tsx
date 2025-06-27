"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type CardTechnologyProps = {
  id?: string;
  cardNumber: string;
  title: string;
  description: string;
  listItems: {
    title: string;
    id: string;
  }[];
};

const CardTechnology = ({
  id,
  cardNumber,
  title,
  description,
  listItems,
}: CardTechnologyProps) => {
  return (
    <Card
      id={id}
      className="w-[35rem] h-[40rem] border-4 bg-transparent text-foreground"
    >
      <CardHeader>
        <span className="text-muted-foreground">{cardNumber}</span>
        <CardTitle className="scroll-m-20 text-4xl sm:text-5xl md:text-6xl leading-none font-semibold text-chart-1">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="min-h-32">
          <ul className="ml-6 list-disc [&>li]:mt-2 text-2xl">
            {listItems.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
        <div className=" mt-4">
          <p className="leading-7 text-lg">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardTechnology;
