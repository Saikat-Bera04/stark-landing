import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollText } from "lucide-react";

const mockMemories = [
  {
    id: 1,
    content: "User enjoys listening to jazz music, particularly artists like Miles Davis and John Coltrane.",
    timestamp: "2 days ago",
  },
  {
    id: 2,
    content: "User expressed a preference for city life over country life, citing the energy and diversity of urban environments.",
    timestamp: "5 days ago",
  },
  {
    id: 3,
    content: "User mentioned learning to cook Italian food and is proud of their homemade pasta.",
    timestamp: "1 week ago",
  },
    {
    id: 4,
    content: "User has a pet dog, a golden retriever named 'Sunny'.",
    timestamp: "2 weeks ago",
  },
];

export function MemoryList() {
  return (
    <div className="space-y-4">
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="font-headline">Avatar Memories</CardTitle>
          <CardDescription>
            This is the knowledge base of your avatar, formed from your training inputs.
          </CardDescription>
        </CardHeader>
      </Card>
      <div className="grid gap-4 md:grid-cols-2">
        {mockMemories.map((memory) => (
          <Card key={memory.id} className="card-glass">
            <CardHeader>
              <div className="flex items-start gap-4">
                  <ScrollText className="h-6 w-6 text-accent mt-1" />
                  <div className="grid gap-1.5">
                    <CardDescription>{memory.content}</CardDescription>
                    <p className="text-xs text-muted-foreground">{memory.timestamp}</p>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
