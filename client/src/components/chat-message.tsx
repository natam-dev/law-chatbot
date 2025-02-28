import { Message } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div className={cn(
      "flex gap-3 mb-4",
      message.isUser ? "flex-row-reverse" : "flex-row"
    )}>
      <Avatar className="h-8 w-8">
        {message.isUser ? (
          <>
            <AvatarFallback>U</AvatarFallback>
            <AvatarImage src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f" />
          </>
        ) : (
          <>
            <AvatarFallback>AI</AvatarFallback>
            <AvatarImage src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9" />
          </>
        )}
      </Avatar>
      <Card className={cn(
        "max-w-[80%]",
        message.isUser ? "bg-primary text-primary-foreground" : "bg-muted"
      )}>
        <CardContent className="p-3">
          <div className="prose prose-sm">
            {message.content}
          </div>
          <div className="text-xs mt-2 opacity-70">
            {format(new Date(message.timestamp), 'HH:mm')}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
