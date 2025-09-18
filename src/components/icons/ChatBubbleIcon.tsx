import React from 'react';

interface ChatBubbleIconProps {
  className?: string;
}

export const ChatBubbleIcon: React.FC<ChatBubbleIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M2 12c0 4.418 4.03 8 9 8 1.464 0 2.84-.29 4.02-.8L22 21l-1.2-5.24A9.964 9.964 0 0 0 22 12c0-4.418-4.03-8-9-8S4 7.582 4 12z" />
    </svg>
  );
};

export default ChatBubbleIcon;
