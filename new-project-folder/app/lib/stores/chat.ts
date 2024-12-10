// new-project-folder/app/lib/stores/chat.ts

import { atom } from 'nanostores';

// Define the chat store with initial values
export const chatStore = atom({
  started: false,
  aborted: false,
  showChat: true,
});

// Function to reset the chat store to its initial state
export function resetChatStore() {
  chatStore.set({
    started: false,
    aborted: false,
    showChat: true,
  });
}
