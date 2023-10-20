import Stepper from '@/components/Stepper/Stepper';
import Card from '@/components/ui/Card/Card';
import { Fragment } from 'react';

export default function Home() {
  return (
    <main className="md:container flex min-h-screen flex-col items-center justify-between md:p-6 lg:p-24">
      <div className="hidden md:block">
        <Card>
          <Stepper />
        </Card>
      </div>
      <div className="w-full block md:hidden">
        <Stepper />
      </div>
    </main>
  );
}
