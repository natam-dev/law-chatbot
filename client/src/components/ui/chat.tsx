import * as React from "react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";

const Chat = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-full flex-col-reverse overflow-hidden rounded-md border",
      className
    )}
    {...props}
  />
));
Chat.displayName = "Chat";

const ChatHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-14 items-center justify-between border-b px-4 bg-card",
      className
    )}
    {...props}
  />
));
ChatHeader.displayName = "ChatHeader";

const ChatViewport = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <ScrollArea
    ref={ref}
    className={cn("h-full flex-1 p-4", className)}
    {...props}
  />
));
ChatViewport.displayName = "ChatViewport";

const ChatList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col-reverse gap-4", className)}
    {...props}
  />
));
ChatList.displayName = "ChatList";

const ChatMessage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    isUser?: boolean;
  }
>(({ className, isUser = false, children, ...props }, ref) => (
  <Card
    ref={ref}
    className={cn(
      "flex w-max max-w-[80%] flex-col gap-2 rounded-lg px-4 py-3",
      isUser
        ? "ml-auto bg-primary text-primary-foreground"
        : "mr-auto bg-muted",
      className
    )}
    {...props}
  >
    {children}
  </Card>
));
ChatMessage.displayName = "ChatMessage";

const ChatInput = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center gap-2 border-t bg-background px-4 py-3",
      className
    )}
    {...props}
  />
));
ChatInput.displayName = "ChatInput";

const ChatMessageAvatar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex h-6 w-6 shrink-0 select-none items-center justify-center rounded-full border bg-muted text-muted-foreground", className)}
    {...props}
  />
));
ChatMessageAvatar.displayName = "ChatMessageAvatar";

const ChatMessageContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm leading-relaxed", className)}
    {...props}
  />
));
ChatMessageContent.displayName = "ChatMessageContent";

const ChatMessageFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center text-xs opacity-70", className)}
    {...props}
  />
));
ChatMessageFooter.displayName = "ChatMessageFooter";

export {
  Chat,
  ChatHeader,
  ChatViewport,
  ChatList,
  ChatMessage,
  ChatInput,
  ChatMessageAvatar,
  ChatMessageContent,
  ChatMessageFooter,
};
