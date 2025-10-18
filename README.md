[ User Browser ]
        ↓
  https://yourapp.com
        ↓
 ┌────────────────────────────┐
 │ Cloud Run Service #1       │
 │ "nextjs-frontend"          │
 │ - Handles /, /predict UI   │
 │ - Sends POST /predict →    │
 │   internal backend URL     │
 └───────────┬────────────────┘
             │
             │ Internal HTTP call
             ↓
 ┌────────────────────────────┐
 │ Cloud Run Service #2       │
 │ "llm-predictor"            │
 │ - LangChain inference       │
 │ - Talks to GCP Vertex AI or |
 │   local LLMs via API        │
 └────────────────────────────┘

 colors: #0f172a, #1e293b, #f8fafc

Typography :  Inter or Satoshi font

Clean charts (Recharts or Chart.js)