import Image from 'next/image';
import { Button } from '@/components/ui/button';
export default function Home() {
  return (
    <div>
      <Button className="mx-3" variant="outline">
        Привет
      </Button>
    </div>
  );
}
