// new-project-folder/app/lib/persistence/ChatDescription.client.tsx

import { useStore } from '@nanostores/react';
import { description } from '~/lib/persistence/useChatHistory';

export function ChatDescription() {
  const chatDescription = useStore(description);

  return (
    <div className="text-bolt-elements-textPrimary">
      {chatDescription || 'Untitled Chat'}
    </div>
  );
}
