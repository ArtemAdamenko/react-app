import { Htag } from "@/components/Htag/Htag";
import { Button } from "@/components";

export default function Home() {
  return (
    <main>
      <div>
        <Htag tag='h1'>Text</Htag>
        <Button appearance="primary">My Button</Button>
        <Button appearance="ghost">My Button</Button>
      </div>
    </main>
  );
}
