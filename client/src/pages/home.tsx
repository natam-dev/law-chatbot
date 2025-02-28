import { useQuery, useMutation } from "@tanstack/react-query";
import { ChatMessage } from "@/components/chat-message";
import { ChatInput } from "@/components/chat-input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { apiRequest } from "@/lib/queryClient";
import { queryClient } from "@/lib/queryClient";
import type { Message } from "@shared/schema";
import { Scale } from "lucide-react";

export default function Home() {
  const { data: messages, isLoading } = useQuery<Message[]>({
    queryKey: ["/api/messages"],
  });

  const mutation = useMutation({
    mutationFn: async (content: string) => {
      const res = await apiRequest("POST", "/api/messages", { content });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/messages"] });
    },
  });

  return (
    <div className="flex flex-col h-screen">
      <header className="border-b p-4 bg-card">
        <div className="container flex items-center gap-2">
          <Scale className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">Indian Legal Assistant</h1>
        </div>
      </header>

      <main className="flex-1 container py-4 flex flex-col">
        <div className="flex-1 relative">
          <ScrollArea className="absolute inset-0">
            <div className="space-y-4 p-4">
              {isLoading ? (
                <div className="text-center text-muted-foreground">
                  Loading conversations...
                </div>
              ) : messages?.length === 0 ? (
                <div className="text-center text-muted-foreground">
                  Start a conversation by asking a legal question
                </div>
              ) : (
                messages?.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))
              )}
            </div>
          </ScrollArea>
        </div>

        <div className="mt-4 border-t pt-4">
          <ChatInput
            onSend={(content) => mutation.mutate(content)}
            disabled={mutation.isPending}
          />
        </div>
      </main>
    </div>
  );
}
