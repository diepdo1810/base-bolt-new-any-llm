// new-project-folder/app/routes/api.chat.ts

import { json } from '@remix-run/cloudflare';
import type { ActionFunction } from '@remix-run/cloudflare';
import { getChatResponse } from '~/lib/chat';
import { getApiKeys } from '~/lib/apiKeys';

export const action: ActionFunction = async ({ request }) => {
  try {
    const { messages, apiKeys } = await request.json();
    const keys = getApiKeys(apiKeys);

    const response = await getChatResponse(messages, keys);

    return json(response);
  } catch (error) {
    console.error('Error in chat API:', error);
    return json({ error: 'Failed to process chat request' }, { status: 500 });
  }
};
