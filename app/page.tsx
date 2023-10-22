'use client';

import Stepper from '@/components/Stepper/Stepper';
import Card from '@/components/ui/Card/Card';
import useIsMobile from '@/hooks/useIsMobile';

export default function Home() {
  const isMobile = useIsMobile();
  return (
    <main className="md:container flex min-h-screen flex-col items-center justify-between md:p-6 lg:py-24">
      {!isMobile ? (
        <div className="w-full hidden md:block">
          <Card>
            <Stepper isMobile={isMobile} />
          </Card>
        </div>
      ) : (
        <div className="w-full block md:hidden">
          <Stepper isMobile={isMobile} />
        </div>
      )}
    </main>
  );
}
