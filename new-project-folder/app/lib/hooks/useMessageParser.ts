// new-project-folder/app/lib/hooks/useMessageParser.ts

import { useEffect, useState } from 'react';
import type { Message } from 'ai';
import { parseMarkdown } from '~/utils/markdownParser';

export function useMessageParser() {
  const [parsedMessages, setParsedMessages] = useState<string[]>([]);

  const parseMessages = (messages: Message[], isLoading: boolean) => {
    if (!isLoading) {
      const parsed = messages.map((message) => parseMarkdown(message.content));
      setParsedMessages(parsed);
    }
  };

  return { parsedMessages, parseMessages };
}
