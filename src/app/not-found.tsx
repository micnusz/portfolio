"use server";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="flex justify-center items-center text-fluid-section flex-col text-center h-[40rem] text-muted-foreground bg-background">
      <div>
        <h2>404 | Page not found</h2>
      </div>
      <div>
        <p>Nothing to see here.</p>
        <Button variant="link" className="text-chart-1">
          <Link href="/">Go Back</Link>
        </Button>
      </div>
    </div>
  );
}
