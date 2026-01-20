# 🤖 RAG Chatbot - Quick Start Guide

## 30-Second Setup

### 1. Add Your OpenAI API Key

Edit `.env` (create if it doesn't exist):

```bash
OPENAI_API_KEY=sk_your_api_key_here
```

Get your key from: https://platform.openai.com/api-keys

### 2. Start the App

```bash
npm run dev
```

### 3. Test the Chatbot

- Open http://localhost:5173
- Click the chat button (bottom-right corner)
- Ask something like: "What programs do you offer?"

**Done! 🎉**

---

## 📋 What You Can Ask

**Programs & Academics**

- "What engineering programs do you have?"
- "Tell me about B.Tech CSE AI & ML"
- "What's the fee for MBA?"

**Admissions**

- "How do I apply?"
- "What's the eligibility for law programs?"
- "Do you accept international students?"

**Campus Life**

- "What facilities are available?"
- "Tell me about student clubs"
- "What sports programs exist?"

**General Info**

- "What is DSU?"
- "Where are you located?"
- "How can I contact you?"

---

## 🔧 Troubleshooting

### Chat button not showing?

1. Check browser console for errors
2. Ensure `npm run dev` is running
3. Hard refresh the page (Ctrl+Shift+R)

### Getting errors?

1. **"OPENAI_API_KEY is not configured"** → Add API key to `.env`
2. **"Knowledge base not found"** → Run `node scripts/export-knowledge-base.mjs`
3. **Slow responses** → Check OpenAI service status

### Need help?

See full guide: `RAG_CHATBOT_GUIDE.md`

---

## 💡 Pro Tips

1. **First message is a greeting** - The bot introduces itself with suggestions
2. **Multi-turn conversations** - Ask follow-ups; the bot remembers context
3. **Clear history** - Click refresh icon in chat header to start fresh
4. **Mobile friendly** - Works great on phones and tablets

---

## 📊 How It Works (Simple)

```
Your Question
       ↓
Search Knowledge Base
       ↓
Get Relevant Information
       ↓
Send to OpenAI with Context
       ↓
Get Smart Answer
       ↓
Shows Sources Used
```

---

## 🚀 Deploy to Production

### Netlify

```bash
npm run build
# Push to git, Netlify auto-deploys
```

### Vercel

```bash
npm run build
# Connect repo to Vercel
```

### Environment Variables

Set these in your hosting platform's environment settings:

- `OPENAI_API_KEY` - Your OpenAI API key

---

## 💰 Cost

Using OpenAI's GPT-4o-mini model:

- **Cheap**: ~$0.001 per message average
- **10,000 messages/month**: ~$10/month
- **Budget friendly**: GPT-3.5-turbo would be ~$2/month

---

## 📞 Quick Links

- **OpenAI Dashboard**: https://platform.openai.com
- **Full Guide**: See `RAG_CHATBOT_GUIDE.md`
- **Knowledge Base**: `knowledge-base/dsu-knowledge-base.txt`
- **Chatbot Code**: `client/components/RagChatWidget.tsx`
- **API Code**: `server/routes/rag-chat.ts`

---

## ✨ Features at a Glance

✅ Uses real DSU knowledge base  
✅ Handles follow-up questions  
✅ Shows source information  
✅ Works offline (after initial load)  
✅ Dark/Light theme support  
✅ Mobile responsive  
✅ Production ready  
✅ Easy to customize

---

## 🎯 Next Steps

1. ✅ Set OpenAI API key
2. ✅ Test the chatbot
3. ✅ Read full guide if needed
4. ✅ Customize if desired
5. ✅ Deploy to production

---

**That's it! Your RAG chatbot is ready to use. 🚀**

For detailed documentation, see `RAG_CHATBOT_GUIDE.md`
