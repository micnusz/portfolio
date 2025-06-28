"use server";
import HomePageClient from "@/components/HomePageClient";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Michał Nuszkiewicz",
    description: "Portfolio app created by Michał Nuszkiewicz",
  };
}

export default async function HomePageServer() {
  return <HomePageClient />;
}
