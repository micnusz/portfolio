"use server";
import HomePageClient from "@/components/HomePageClient";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Home - Michał Nuszkiewicz",
    description: "Home page",
  };
}

export default async function HomePageServer() {
  return <HomePageClient />;
}
