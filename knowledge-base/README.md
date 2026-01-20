# Dayananda Sagar University - Knowledge Base for RAG Chatbot

This folder contains comprehensive knowledge base exports for training and powering RAG (Retrieval-Augmented Generation) chatbots about Dayananda Sagar University.

## 📁 Files Included

### 1. **dsu-knowledge-base.html** (HTML Format)
- **Purpose**: Human-readable, styled HTML version
- **Best For**: Preview, documentation, browser viewing
- **Features**:
  - Beautiful styling and formatting
  - Clickable hyperlinks
  - Organized sections with visual hierarchy
  - Color-coded content areas
  - Responsive design

**Usage**: Open in any web browser to preview the complete knowledge base.

---

### 2. **dsu-knowledge-base.txt** (Plain Text Format)
- **Purpose**: RAG system ingestion, vector embeddings
- **Best For**: LangChain, LlamaIndex, OpenAI embeddings, semantic search
- **Features**:
  - Clean, structured plain text
  - ASCII section dividers
  - Easy to parse programmatically
  - No formatting overhead
  - Perfect for chunking and embedding

**Usage**: 
```python
# Example with LangChain
from langchain.document_loaders import TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter

loader = TextLoader('knowledge-base/dsu-knowledge-base.txt')
documents = loader.load()

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200
)
chunks = text_splitter.split_documents(documents)
```

---

### 3. **all-links.txt** (Links Reference)
- **Purpose**: Quick reference of all URLs
- **Best For**: Manual lookup, documentation, URL validation
- **Features**:
  - Complete list of all website URLs
  - Organized by category
  - All programs with their school URLs
  - Contact information
  - External resources

**Usage**: Reference guide for all DSU website links.

---

### 4. **all-links.json** (JSON Format)
- **Purpose**: Programmatic access to structured data
- **Best For**: API integrations, web applications, automated systems
- **Features**:
  - Structured JSON format
  - Nested categorization
  - Easy to parse and query
  - Machine-readable
  - Schema-based access

**Usage**:
```javascript
// Node.js example
const fs = require('fs');
const dsuData = JSON.parse(fs.readFileSync('knowledge-base/all-links.json'));

console.log(dsuData.university.name);
console.log(dsuData.admissions.portal);
console.log(dsuData.academics.schools.engineering.programs);
```

```python
# Python example
import json

with open('knowledge-base/all-links.json', 'r') as f:
    dsu_data = json.load(f)

print(dsu_data['university']['name'])
print(dsu_data['admissions']['portal'])
print(dsu_data['academics']['schools']['engineering']['programs'])
```

---

## 📊 Content Coverage

The knowledge base includes comprehensive information about:

### ✅ University Information
- Name, tagline, location, accreditation
- History and legacy
- Vision & mission
- Leadership

### ✅ Academic Programs (9 Schools)
- **School of Engineering** (8 programs)
- **School of Law** (5 programs)
- **School of Health Sciences** (6 programs)
- **School of Computer Applications** (4 programs)
- **School of Basic and Applied Science**
- **School of Commerce and Management**
- **School of Arts, Design, and Humanities**
- **School of Design and Digital Trans-media**
- **School of Journalism and Mass Communication**

### ✅ Research & Innovation
- Hackathons and innovation sprints
- NASA Space Apps participation
- Student-led research labs
- DERBI Foundation (est. 2009)
- AIC-DSU Innovation Foundation
- Startup ecosystem (25+ startups, ₹50Cr+ funding)

### ✅ Campus Life
- Four pillars of excellence
- 100+ clubs and organizations
- World-class facilities
- Sports and wellness programs

### ✅ Admissions
- General admissions process
- International admissions
- Study in India initiative
- Eligibility criteria
- Application portals

### ✅ Infrastructure
- Library (2M+ books)
- AI labs and maker spaces
- Hostel facilities
- Sports complexes
- Research centers

### ✅ Contact Information
- Email addresses
- WhatsApp numbers
- Portal URLs
- Department-specific contacts

### ✅ External Resources
- Virtual campus tour
- Hostel booking
- Innovation foundations
- Government portals
- Industry partnerships

---

## 🤖 RAG Integration Guide

### Recommended Approach

1. **Text Chunking**
   - Chunk size: 1000-1500 characters
   - Overlap: 200-300 characters
   - Preserve section headers in chunks

2. **Embedding Model**
   - OpenAI `text-embedding-ada-002`
   - Cohere Embed v3
   - Sentence Transformers

3. **Vector Store**
   - Pinecone
   - Weaviate
   - Qdrant
   - ChromaDB

4. **Retrieval Strategy**
   - Semantic similarity search
   - Hybrid search (keyword + semantic)
   - Metadata filtering by category

### Example RAG Implementation

```python
from langchain.document_loaders import TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Pinecone
from langchain.chains import RetrievalQA
from langchain.llms import OpenAI

# 1. Load knowledge base
loader = TextLoader('knowledge-base/dsu-knowledge-base.txt')
documents = loader.load()

# 2. Split into chunks
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200,
    separators=["\n\n", "\n", " ", ""]
)
texts = text_splitter.split_documents(documents)

# 3. Create embeddings
embeddings = OpenAIEmbeddings()

# 4. Store in vector database
vectorstore = Pinecone.from_documents(
    texts,
    embeddings,
    index_name="dsu-knowledge-base"
)

# 5. Create QA chain
qa_chain = RetrievalQA.from_chain_type(
    llm=OpenAI(temperature=0),
    chain_type="stuff",
    retriever=vectorstore.as_retriever(search_kwargs={"k": 3})
)

# 6. Query
response = qa_chain.run("What programs does the School of Engineering offer?")
print(response)
```

---

## 🔍 Query Examples

Your RAG chatbot can answer questions like:

- "What is Dayananda Sagar University?"
- "What programs are offered in the School of Engineering?"
- "How do I apply for international admissions?"
- "What is the Study in India initiative?"
- "Tell me about research opportunities at DSU"
- "What facilities are available on campus?"
- "How can I contact the international admissions office?"
- "What is AIC-DSU?"
- "Show me the engineering programs with AI specialization"
- "What is DSU's accreditation status?"

---

## 📋 Best Practices

### For Training/Embedding
1. Use `dsu-knowledge-base.txt` for embeddings
2. Chunk at natural section boundaries
3. Preserve context with overlap
4. Include metadata (section, category)

### For Application Logic
1. Use `all-links.json` for dynamic URL generation
2. Validate URLs before sending to users
3. Track which links are most requested
4. Cache frequently accessed data

### For Human Review
1. Use `dsu-knowledge-base.html` for verification
2. Share with stakeholders for accuracy
3. Update based on feedback
4. Version control for changes

---

## 🔄 Updates

This knowledge base was generated on: **${new Date().toLocaleDateString()}**

To regenerate with updated information:
```bash
node scripts/export-knowledge-base.mjs
```

---

## 📞 Support

For questions about the knowledge base content:
- Email: international-admissions@dsu.edu.in
- Website: https://dsu.edu.in

For technical questions about RAG implementation:
- Consult the documentation of your chosen RAG framework
- Refer to LangChain/LlamaIndex documentation

---

## 📄 License

This knowledge base is provided for use with Dayananda Sagar University chatbot systems.
All content © Dayananda Sagar University.

---

**Generated by**: DSU Knowledge Base Export Script  
**Version**: 1.0  
**Last Updated**: ${new Date().toLocaleString()}
