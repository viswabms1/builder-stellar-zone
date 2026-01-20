# Dayananda Sagar University - Knowledge Base for RAG Chatbot

This folder contains comprehensive knowledge base exports for training and powering RAG (Retrieval-Augmented Generation) chatbots about Dayananda Sagar University.

## 📁 Files Included

### 1. **dsu-knowledge-base.txt** (Plain Text Format) ⭐ PRIMARY FILE
- **Purpose**: RAG system ingestion, vector embeddings, comprehensive university data
- **Best For**: LangChain, LlamaIndex, OpenAI embeddings, semantic search
- **Features**:
  - ✅ **Complete program listings** for all schools and departments
  - ✅ **Detailed fee structures** (Academic Year 2026-27)
  - ✅ **Full eligibility criteria** for every program
  - ✅ **Department-wise organization** of programs
  - ✅ **Program duration and level** (UG/PG/Professional)
  - ✅ **Admission pathways** (CET, CLAT, JEE, Direct)
  - ✅ **Scholarship information** where applicable
  - ✅ **Special program notes** (job guarantees, certifications, etc.)
  - Clean, structured plain text
  - ASCII section dividers
  - Easy to parse programmatically
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

### 2. **all-links.txt** (Links Reference)
- **Purpose**: Quick reference of all URLs
- **Best For**: Manual lookup, documentation, URL validation
- **Features**:
  - Complete list of all website URLs
  - All absolute URLs (https://dsu.edu.in format)
  - Organized by category
  - Contact information
  - External resources

**Usage**: Reference guide for all DSU website links.

---

### 3. **all-links.json** (JSON Format)
- **Purpose**: Programmatic access to structured navigation
- **Best For**: API integrations, web applications, automated systems
- **Features**:
  - Structured JSON format with titles and URLs
  - Nested categorization
  - Easy to parse and query
  - Machine-readable
  - Schema-based access

**Usage**:
```javascript
// Node.js example
const fs = require('fs');
const routes = JSON.parse(fs.readFileSync('knowledge-base/all-links.json'));

routes.forEach(route => {
  console.log(`${route.title}: ${route.url}`);
});
```

```python
# Python example
import json

with open('knowledge-base/all-links.json', 'r') as f:
    routes = json.load(f)

for route in routes:
    print(f"{route['title']}: {route['url']}")
```

---

## 📊 Content Coverage

The knowledge base includes comprehensive information about:

### ✅ University Information
- Name, tagline, location, accreditation
- History and legacy (since 1979)
- NAAC A+ Accreditation
- Vision & mission
- 25,000+ active students

### ✅ Complete Academic Programs with Fees & Eligibility

#### **School of Engineering**
**Departments:**
- Computer Science & Engineering Department (14 programs including B.Tech & M.Tech)
- Electronics & Communication Department
- Mechanical Engineering Department
- Aerospace Engineering Department

**Key Programs:**
- B.Tech CSE (AI & ML) - ₹4,35,000 to ₹5,25,000
- B.Tech CSE (Data Science) - ₹4,12,000 to ₹4,92,000
- B.Tech CSE (Cyber Security) - ₹4,12,000 to ₹4,92,000
- M.Tech CSE with Job Guarantee (₹65,000/month starting salary)
- B.Tech Mechanical Engineering - ₹3,22,000 to ₹4,12,000
- B.Tech Aerospace Engineering - ₹3,22,000 to ₹4,12,000

#### **School of Computer Applications**
- BCA & BCA (AI & Data Sciences) - ₹2,07,000
- B.Sc Data Science - ₹1,62,000
- B.Sc Cyber Security - ₹1,62,000
- MCA - ₹3,42,000
- M.Sc Data Science - ₹1,52,000
- M.Sc Cyber Security - ₹1,52,000

#### **School of Law**
- B.A. LL.B (Hons) - ₹2,52,000 (with scholarships)
- B.B.A. LL.B (Hons) - ₹2,52,000 (with scholarships)
- LL.B (3 Year) - ₹1,77,000
- LL.M - ₹1,45,000 (Corporate Law, IPR, Human Rights)

#### **School of Basic & Applied Sciences**
- B.Sc Life Science (Multiple specializations) - ₹1,82,000
- M.Sc Biochemistry - ₹1,92,000
- M.Sc Biotechnology - ₹1,92,000
- M.Sc Microbiology - ₹1,92,000
- M.Sc Molecular Biology and Genetics - ₹1,92,000

#### **School of Commerce & Management**
- B.Com Regular - ₹1,57,000
- B.Com ACCA Integrated - ₹1,87,000 (with ACCA coaching)
- B.Com CMA Integrated - ₹1,87,000 (with CMA coaching)
- B.Com with CA Coaching - ₹1,87,000
- BBA - ₹2,12,000
- MBA - ₹6,02,000 (dual specialization)

#### **School of Health Sciences**
**Colleges:**
- Allied Health Sciences (5+ programs)
- Pharmaceutical Sciences (B.Pharm, M.Pharm, Pharm.D)
- Nursing Sciences (B.Sc, M.Sc in multiple specializations)
- Physiotherapy (BPT, MPT in 5 specializations)

**Key Programs:**
- B.Sc Nursing - ₹1,82,000
- M.Sc Nursing (5 specializations) - ₹1,42,000
- BPT - ₹2,17,000
- MPT (5 specializations) - ₹2,77,000
- B.Pharm - ₹2,82,000
- M.Pharm - ₹3,02,000
- Pharm.D (6 Years) - ₹4,52,000
- MPH (Public Health) - ₹1,42,000

#### **School of Arts, Design & Humanities**
- B.A. Journalism and Mass Communication - ₹1,52,000

#### **School of Design & Digital Trans-Media**
- B.Design Product Design - ₹3,02,000
- B.Design User Experience Design - ₹3,02,000
- B.Design Animation and VFX - ₹3,02,000
- B.Design Game Design - ₹3,02,000

### ✅ Eligibility Criteria
Every program includes:
- Minimum academic qualifications (10+2, Bachelor's degree, etc.)
- Required subjects (Physics, Chemistry, Biology, Mathematics, etc.)
- Minimum percentage requirements
- SC/ST/OBC category relaxations
- Entrance exam requirements (CET, JEE, CLAT, PGCET)
- Work experience requirements (where applicable)

### ✅ Research & Innovation
- Hackathons and innovation sprints
- NASA Space Apps participation
- Student-led research labs
- DERBI Foundation (est. 2009)
- AIC-DSU Innovation Foundation (NITI Aayog backed)
- Startup ecosystem (25+ startups, ₹50Cr+ funding, 150+ jobs created)
- NVIDIA AI Architecture Partnership

### ✅ Campus Life
- Four pillars of excellence
- 100+ clubs and organizations
- World-class facilities
- Sports and wellness programs
- 2M+ books in library
- AI labs and maker spaces
- Modern hostels

### ✅ Admissions
- General admissions process
- International admissions
- Study in India initiative (वसुधैव कुटुम्बकम)
- Multiple admission pathways (CET, CLAT, JEE, Direct)
- Application portals
- Fee structures for 2026-27

### ✅ Infrastructure
- Library (2M+ books)
- AI labs and maker spaces
- Hostel facilities
- Sports complexes
- Research centers
- Healthcare facilities

### ✅ Contact Information
- Main campus and city campus addresses
- Email addresses (international-admissions@dsu.edu.in)
- WhatsApp numbers (+91 9606022152, +91 9606022149)
- Portal URLs
- Department-specific contacts

### ✅ External Resources
- Virtual campus tour (https://dsu.edu.in/virtual-tour/)
- Hostel booking (https://myposhtell.com)
- Innovation foundations
- Government portals (https://studyinindia.gov.in/)
- Industry partnerships

---

## 🤖 RAG Integration Guide

### Recommended Approach

1. **Text Chunking**
   - Chunk size: 1000-1500 characters
   - Overlap: 200-300 characters
   - Preserve section headers and program names in chunks
   - Keep fee and eligibility information together

2. **Embedding Model**
   - OpenAI `text-embedding-ada-002`
   - OpenAI `text-embedding-3-small` or `text-embedding-3-large`
   - Cohere Embed v3
   - Sentence Transformers

3. **Vector Store**
   - Pinecone
   - Weaviate
   - Qdrant
   - ChromaDB
   - Supabase Vector

4. **Retrieval Strategy**
   - Semantic similarity search
   - Hybrid search (keyword + semantic)
   - Metadata filtering by school/department/program level
   - Range filters for fee queries

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
response = qa_chain.run("What is the fee for B.Tech CSE in AI & ML?")
print(response)
```

---

## 🔍 Query Examples

Your RAG chatbot can answer questions like:

**General University Questions:**
- "What is Dayananda Sagar University?"
- "What is DSU's accreditation status?"
- "Tell me about DSU's AI-First approach"
- "What are the campus facilities at DSU?"

**Program & Fee Queries:**
- "What programs are offered in the School of Engineering?"
- "What is the fee for B.Tech CSE in Artificial Intelligence?"
- "Show me all MBA programs and their fees"
- "What are the cheapest undergraduate programs?"
- "Which programs have job placement guarantees?"
- "List all programs under ₹2 lakhs per year"

**Eligibility Questions:**
- "What are the eligibility criteria for B.Tech CSE?"
- "Can I apply for BCA with 45% in 12th?"
- "What entrance exams does DSU accept?"
- "Do I need work experience for MBA?"
- "What is the minimum percentage for Law programs?"

**Admission Process:**
- "How do I apply for international admissions?"
- "What is the Study in India initiative?"
- "Which entrance exams are accepted for Engineering?"
- "Is CLAT score accepted for law programs?"

**Research & Campus Life:**
- "Tell me about research opportunities at DSU"
- "What is AIC-DSU?"
- "How many startups has DERBI Foundation incubated?"
- "What clubs and activities are available?"

**Contact & Information:**
- "How can I contact the international admissions office?"
- "What is the WhatsApp number for admissions?"
- "Where can I take a virtual tour of the campus?"

---

## 📋 Best Practices

### For Training/Embedding
1. Use `dsu-knowledge-base.txt` for embeddings
2. Chunk at natural section boundaries (programs, departments)
3. Preserve context with overlap
4. Include metadata (school, department, program level, fee range)
5. Keep fee and eligibility together in the same chunk

### For Fee-Related Queries
1. Always specify the academic year (2026-27)
2. Mention admission pathway (CET, Direct, Ranking-based)
3. Note that fees are annual
4. Include disclaimer about government revisions
5. Provide link to official eligibility page

### For Application Logic
1. Use `all-links.json` for dynamic URL generation
2. Always direct users to https://dsu.edu.in/eligibility for official fee structures
3. Validate URLs before sending to users
4. Track which programs are most requested
5. Cache frequently accessed data

### For Human Review
1. Verify fee accuracy annually
2. Update eligibility criteria when changed
3. Share with admissions team for accuracy
4. Version control for changes

---

## 🔄 Updates

This knowledge base was generated on: **${new Date().toLocaleDateString()}**  
Academic Year: **2026-27**

To regenerate with updated information:
```bash
node scripts/export-knowledge-base.mjs
```

---

## 📞 Support

For questions about the knowledge base content:
- Email: international-admissions@dsu.edu.in
- Email: admissions@dsu.edu.in
- WhatsApp: +91 9606022152, +91 9606022149
- Website: https://dsu.edu.in
- Eligibility & Fees: https://dsu.edu.in/eligibility

For technical questions about RAG implementation:
- Consult the documentation of your chosen RAG framework
- Refer to LangChain/LlamaIndex documentation
- OpenAI Embeddings API documentation

---

## ⚠️ Important Notes

1. **Fee Disclaimer**: All fees listed are for academic year 2026-27 and are subject to change based on government revisions.

2. **Eligibility Verification**: While the knowledge base contains detailed eligibility criteria, students should verify their specific eligibility through the official admissions portal.

3. **Scholarship Information**: Some programs offer scholarships. Direct users to the admissions office for current scholarship opportunities.

4. **Job Placement Guarantees**: Select M.Tech AI programs offer job placement with ₹65,000/month starting salary, subject to successful completion and performance evaluation.

5. **URL Accuracy**: All URLs are absolute (https://dsu.edu.in format) and should work directly in chatbot responses.

6. **Program Availability**: Program availability may change. Always cross-reference with the official website.

---

## 📄 License

This knowledge base is provided for use with Dayananda Sagar University chatbot systems.
All content © Dayananda Sagar University.

---

**Generated by**: DSU Knowledge Base Export Script  
**Version**: 2.0 (with Comprehensive Fees & Eligibility)  
**Last Updated**: ${new Date().toLocaleString()}  
**Academic Year**: 2026-27
