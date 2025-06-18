import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-y-4">
        <div>
          <Button variant="evelated">
            i am a Button
          </Button>

          <Input placeholder="I am an input"/>
          <Progress value={50} />
          <Textarea placeholder="l am a text area"/>
        </div>
        
      </div>
    </div>
  );
}
