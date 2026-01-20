# DSU RAG Chatbot - Complete Setup & Usage Guide

## Overview

The DSU RAG (Retrieval-Augmented Generation) Chatbot is a production-ready AI-powered assistant that helps students and prospective students with questions about:

- ✅ Academic programs and courses
- ✅ Admissions process and eligibility criteria
- ✅ Fee structures and costs
- ✅ Campus facilities and infrastructure
- ✅ Research opportunities and innovation
- ✅ Campus life and student activities
- ✅ Placements and career support
- ✅ International admissions
- ✅ Scholarships and financial aid

## Architecture

### Components

1. **RAG Chat API** (`server/routes/rag-chat.ts`)

   - Handles chat requests from the frontend
   - Retrieves relevant context from the knowledge base
   - Calls OpenAI API with contextual information
   - Returns AI-generated responses

2. **RagChatWidget** (`client/components/RagChatWidget.tsx`)

   - Modern, responsive chat interface
   - Floating chat button in bottom-right corner
   - Conversation history management
   - Quick reply suggestions
   - Dark/Light theme support

3. **Knowledge Base** (`knowledge-base/dsu-knowledge-base.txt`)
   - Comprehensive DSU information
   - 100+ programs with fees and eligibility
   - Contact information and resources
   - Campus facilities and services

## Setup Instructions

### Prerequisites

- Node.js 16+ installed
- OpenAI API key
- The knowledge base file at `knowledge-base/dsu-knowledge-base.txt`

### Step 1: Get OpenAI API Key

1. Go to https://platform.openai.com/api-keys
2. Create a new API key or copy an existing one
3. Keep it secure - never commit it to version control

### Step 2: Set Environment Variables

Create or update your `.env` file with:

```bash
# OpenAI Configuration
OPENAI_API_KEY=sk_test_xxxxxxxxxxxx  # Your OpenAI API key
VITE_API_URL=http://localhost:5173   # Frontend URL (for development)
```

### Step 3: Install Dependencies

```bash
npm install
```

All required dependencies are already in `package.json`:

- `openai` - OpenAI API client
- `express` - Backend server
- `framer-motion` - Animations

### Step 4: Run the Application

**Development mode:**

```bash
npm run dev
```

**Build and run:**

```bash
npm run build
npm start
```

### Step 5: Test the Chatbot

1. Navigate to http://localhost:5173 in your browser
2. Click the chat button in the bottom-right corner
3. Ask a question like:
   - "What programs do you offer?"
   - "What's the fee for B.Tech CSE?"
   - "How do I apply?"

## How It Works

### RAG (Retrieval-Augmented Generation) Process

```
User Message
    ↓
[1] Semantic Search - Find relevant knowledge base chunks
    ↓
[2] Context Retrieval - Get top 5 relevant document sections
    ↓
[3] Prompt Engineering - Build context-aware system prompt
    ↓
[4] OpenAI API Call - Generate response with context
    ↓
AI Response with Sources
```

### Key Features

1. **Context-Aware Responses**

   - System finds the 5 most relevant knowledge base chunks
   - Context is included in the OpenAI prompt
   - Responses are grounded in actual DSU information

2. **Conversation Memory**

   - Last 10 messages are kept for context
   - Enables follow-up questions
   - Multi-turn conversation support

3. **Semantic Search**

   - Keyword-based retrieval from knowledge base
   - Relevant chunks are scored and ranked
   - Only high-relevance results are used

4. **Error Handling**
   - Graceful fallback if knowledge base is unavailable
   - Clear error messages to users
   - Rate limit handling for API calls

## API Endpoints

### POST `/api/rag-chat`

Send a chat message and get a response.

**Request:**

```json
{
  "message": "What programs does DSU offer?",
  "conversationHistory": [
    { "role": "user", "content": "Hello" },
    { "role": "assistant", "content": "Hi there!" }
  ],
  "sessionId": "session_1234567890"
}
```

**Response:**

```json
{
  "success": true,
  "message": "DSU offers 100+ programs across 9 schools...",
  "contextCount": 5,
  "sources": [
    { "id": 1, "relevanceScore": 15 },
    { "id": 2, "relevanceScore": 12 }
  ],
  "timestamp": "2024-01-15T10:30:00Z"
}
```

### GET `/api/rag-chat/health`

Check RAG chat service health.

**Response:**

```json
{
  "status": "ok",
  "service": "DSU RAG Chat API",
  "knowledgeBaseAvailable": true,
  "knowledgeBaseChunks": 150,
  "openaiConfigured": true
}
```

## Customization

### Changing the System Prompt

Edit the `SYSTEM_PROMPT` constant in `server/routes/rag-chat.ts`:

```typescript
const SYSTEM_PROMPT = `You are an AI assistant for Dayananda Sagar University...`;
```

### Adjusting RAG Parameters

In `server/routes/rag-chat.ts`:

```typescript
// Number of context chunks to retrieve
const contextChunks = retrieveContext(message, 5); // Change 5 to desired number

// OpenAI model selection
model: "gpt-4o-mini", // Can change to "gpt-4" or "gpt-3.5-turbo"

// Response temperature (creativity level)
temperature: 0.7, // Lower = more deterministic, Higher = more creative

// Maximum response length
max_tokens: 1024, // Adjust as needed
```

### Customizing the Chat UI

Edit `client/components/RagChatWidget.tsx`:

```typescript
// Quick reply suggestions
const QUICK_REPLIES = [
  "What programs do you offer?",
  "What's the admission process?",
  // Add your custom suggestions
];

// Colors and styling (uses Tailwind CSS)
className={cn(
  "fixed bottom-6 right-6 z-[100] rounded-full p-4 shadow-lg",
  theme === "light"
    ? "bg-orange-500 hover:bg-orange-600"
    : "bg-orange-600 hover:bg-orange-700"
)}
```

## Monitoring & Debugging

### Enable Debug Logging

The server already logs important events. Check console output for:

```
[RAG] Knowledge base loaded successfully
[RAG] Processing query: "your question"
[RAG] Knowledge base split into XXX chunks
[RAG] Calling OpenAI API with X context chunks
[RAG] Response generated successfully
```

### Common Issues & Solutions

**Issue: "Knowledge base not available"**

- Solution: Ensure `knowledge-base/dsu-knowledge-base.txt` exists
- Regenerate it: `node scripts/export-knowledge-base.mjs`

**Issue: "OPENAI_API_KEY is not configured"**

- Solution: Add your API key to `.env` file
- Verify the key is valid on OpenAI dashboard

**Issue: Chatbot responds with generic information**

- Solution: The knowledge base might need updating
- Regenerate: `node scripts/export-knowledge-base.mjs`

**Issue: Slow responses**

- Solution: Check OpenAI API status
- May be rate-limited; reduce context chunks from 5 to 3

**Issue: Chat button not appearing**

- Solution: Ensure RagChatWidget is imported in App.tsx
- Check browser console for import errors

## Performance Optimization

### For Production

1. **Cache Knowledge Base Chunks**

   - Knowledge base is loaded and split once
   - Subsequent requests reuse cached chunks
   - Add cache invalidation for knowledge base updates

2. **Batch API Calls**

   - Use OpenAI batch API for high-volume usage
   - Reduces per-request cost

3. **Implement Response Caching**

   - Cache frequent questions and responses
   - Check cache before calling OpenAI API

4. **Use More Efficient Models**
   - `gpt-3.5-turbo` is faster and cheaper
   - `gpt-4o-mini` offers better quality at reasonable cost

### Code Example: Add Caching

```typescript
// Simple LRU cache for responses
const responseCache = new Map<string, string>();
const MAX_CACHE_SIZE = 100;

// Before calling OpenAI
if (responseCache.has(message)) {
  return responseCache.get(message);
}

// After getting response
if (responseCache.size >= MAX_CACHE_SIZE) {
  const firstKey = responseCache.keys().next().value;
  responseCache.delete(firstKey);
}
responseCache.set(message, assistantMessage);
```

## Cost Estimation

Based on typical usage:

- **Embeddings API**: ~$0.02 per 1M tokens
- **GPT-3.5 Turbo**: ~$0.0005 per 1K input tokens, $0.0015 per 1K output tokens
- **GPT-4o-mini**: ~$0.00015 per 1K input tokens, $0.0006 per 1K output tokens

**Estimated monthly cost** (10,000 chat requests):

- Using GPT-4o-mini: ~$5-10/month
- Using GPT-3.5-turbo: ~$1-3/month

## Troubleshooting

### Test the RAG API Directly

```bash
# Health check
curl http://localhost:5173/api/rag-chat/health

# Send a chat message
curl -X POST http://localhost:5173/api/rag-chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "What is DSU?",
    "conversationHistory": [],
    "sessionId": "test_session"
  }'
```

### View Server Logs

The server logs detailed information about each request. Look for:

- Knowledge base loading status
- Query processing details
- OpenAI API calls
- Error messages

### Check Knowledge Base Status

```bash
# Verify knowledge base file exists
ls -lh knowledge-base/dsu-knowledge-base.txt

# Count chunks
wc -l knowledge-base/dsu-knowledge-base.txt
```

## Advanced Features (Future Enhancements)

1. **Multi-language Support**

   - Translate queries to English for processing
   - Translate responses back to user's language
   - Use i18n infrastructure already in place

2. **User Analytics**

   - Track frequently asked questions
   - Identify knowledge base gaps
   - Improve system prompt based on user feedback

3. **Document Citations**

   - Return source document references
   - Link to specific pages on website
   - Build trust with citations

4. **Feedback Loop**

   - Let users rate responses
   - Use feedback to improve context retrieval
   - Train on commonly asked questions

5. **Integration with CRM**
   - Store lead information from chats
   - Qualify leads based on questions asked
   - Send follow-up emails automatically

## Security Considerations

1. **API Key Management**

   - Never commit `.env` to version control
   - Use environment variables for secrets
   - Rotate API keys regularly

2. **Rate Limiting**

   - Implement rate limiting in production
   - Prevent abuse and excessive API calls
   - Add CAPTCHA if needed

3. **Input Validation**

   - Sanitize user input
   - Prevent injection attacks
   - Validate API responses

4. **Content Moderation**
   - Monitor for inappropriate requests
   - Block harmful prompts
   - Log suspicious activity

## Support & Maintenance

### Regular Maintenance

1. **Update Knowledge Base Monthly**

   ```bash
   node scripts/export-knowledge-base.mjs
   ```

2. **Monitor API Usage**

   - Check OpenAI dashboard for usage trends
   - Optimize prompts if costs increase

3. **Review User Feedback**

   - Analyze chat logs
   - Identify areas needing improvement

4. **Update Dependencies**
   ```bash
   npm update
   npm audit fix
   ```

### Contact & Support

For issues or questions:

- Create an issue in the project repository
- Contact development team
- Check OpenAI API documentation

## Resources

- **OpenAI API Docs**: https://platform.openai.com/docs
- **Knowledge Base**: `knowledge-base/dsu-knowledge-base.txt`
- **Component Code**: `client/components/RagChatWidget.tsx`
- **API Code**: `server/routes/rag-chat.ts`

## License

This RAG chatbot is part of the DSU website project.

---

**Last Updated**: January 2024  
**Status**: Production Ready  
**Maintained By**: Development Team
