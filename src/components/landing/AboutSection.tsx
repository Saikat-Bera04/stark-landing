import { CheckCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import SecurityStatus from '../dashboard/SecurityStatus';
import type { SecurityStatus as SecurityStatusType } from '@/types/dashboard';


const statuses: SecurityStatusType[] = [
    {
      title: "Core System",
      value: "Online",
      status: "Operational",
      variant: "success",
    },
    {
      title: "Memory DB",
      value: "Syncing",
      status: "Indexing new data",
      variant: "warning",
    },
    {
      title: "Firewall",
      value: "Active",
      status: "No threats detected",
      variant: "success",
    },
];

export function AboutSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid items-stretch justify-center gap-8 md:grid-cols-2 lg:gap-12">
          
         <div className="w-full h-full flex items-center justify-center">
            <SecurityStatus statuses={statuses} />
         </div>
          
          <Card className="card-glass flex flex-col">
            <CardHeader>
                <div className="inline-block rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm mb-2 w-fit">Our Solution</div>
                <CardTitle className="text-2xl font-bold tracking-tighter sm:text-4xl font-headline">One-to-One Connection</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="grid gap-4 text-muted-foreground md:text-lg">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                        <span>Strict one-to-one training ensures only you and one approved person shape your avatar.</span>
                    </li>
                     <li className="flex items-start gap-3">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                        <span>Continuously evolves through memory-based learning, not model retraining.</span>
                    </li>
                     <li className="flex items-start gap-3">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                        <span>Your data remains private, building a digital personality that is truly yours.</span>
                    </li>
                </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
