import LandingPage from "@/components/landing/LandingPage";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <>
      <LandingPage />
    </>
  );
}
