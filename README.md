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


football-predictor/
├── src/
│   ├── app/                              # Next.js App Router
│   │   ├── (public)/
│   │   │   ├── page.tsx                 # Landing page
│   │   │   └── predictions/
│   │   │       └── [matchId]/
│   │   │           └── page.tsx
│   │   ├── (dashboard)/
│   │   │   ├── layout.tsx
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx
│   │   │   └── history/
│   │   │       └── page.tsx
│   │   ├── api/
│   │   │   ├── predict/
│   │   │   │   └── route.ts            # Prediction endpoint
│   │   │   ├── matches/
│   │   │   │   └── route.ts            # Fetch matches
│   │   │   └── webhook/
│   │   │       └── route.ts            # For scheduled jobs
│   │   ├── layout.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── ui/                          # Shadcn/ui components
│   │   ├── features/
│   │   │   ├── predictions/
│   │   │   │   ├── prediction-card.tsx
│   │   │   │   ├── match-list.tsx
│   │   │   │   └── confidence-meter.tsx
│   │   │   └── stats/
│   │   │       └── performance-chart.tsx
│   │   └── layout/
│   │       ├── navbar.tsx
│   │       └── footer.tsx
│   │
│   ├── lib/
│   │   ├── langchain/
│   │   │   ├── chains/
│   │   │   │   ├── prediction-chain.ts  # Main prediction logic
│   │   │   │   └── analysis-chain.ts    # Match analysis
│   │   │   ├── prompts/
│   │   │   │   ├── prediction-prompt.ts
│   │   │   │   └── system-prompts.ts
│   │   │   ├── tools/
│   │   │   │   ├── stats-retriever.ts   # Custom tool for stats
│   │   │   │   └── odds-scraper.ts
│   │   │   └── memory/
│   │   │       └── prediction-memory.ts
│   │   │
│   │   ├── data/
│   │   │   ├── football-api.ts          # API-Football, Rapid API
│   │   │   ├── scrapers/
│   │   │   │   ├── base-scraper.ts
│   │   │   │   └── stats-scraper.ts
│   │   │   └── processors/
│   │   │       └── data-normalizer.ts
│   │   │
│   │   ├── db/
│   │   │   ├── prisma.ts                # Prisma client
│   │   │   ├── queries/
│   │   │   │   ├── predictions.ts
│   │   │   │   └── matches.ts
│   │   │   └── cache/
│   │   │       └── redis-client.ts
│   │   │
│   │   └── utils/
│   │       ├── validators.ts
│   │       └── formatters.ts
│   │
│   ├── services/
│   │   ├── prediction-service.ts        # Core prediction logic
│   │   ├── match-service.ts             # Match data management
│   │   ├── analytics-service.ts         # Track accuracy
│   │   └── notification-service.ts
│   │
│   ├── types/
│   │   ├── match.ts
│   │   ├── prediction.ts
│   │   └── stats.ts
│   │
│   └── actions/                         # Server actions
│       ├── predict-match.ts
│       └── fetch-matches.ts
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── cloud-functions/                     # Google Cloud Functions
│   ├── scheduled-predictions/
│   │   ├── index.ts                    # Daily match predictions
│   │   └── package.json
│   ├── data-sync/
│   │   └── index.ts                    # Sync match data
│   └── result-checker/
│       └── index.ts                    # Check & update results
│
├── cloud-run/                          # If using Cloud Run
│   ├── prediction-worker/
│   │   ├── Dockerfile
│   │   └── src/
│   └── data-ingestion/
│       ├── Dockerfile
│       └── src/
│
├── .github/                            # CI/CD
│   └── workflows/
│       ├── deploy-app.yml             # Deploy Next.js to Cloud Run
│       ├── deploy-functions.yml       # Deploy Cloud Functions
│       └── test.yml
│
├── cloudbuild.yaml                    # Google Cloud Build config
├── terraform/                         # Infrastructure as Code
│   ├── main.tf
│   ├── variables.tf
│   └── modules/
│       ├── cloud-run/
│       ├── cloud-functions/
│       └── database/
│
├── scripts/
│   ├── seed-data.ts
│   ├── train-model.ts                # If doing fine-tuning
│   └── backtest.ts                   # Test predictions on historical
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── .env.example
├── .env.local
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```

**Key Architecture Decisions:**

**1. LangChain Structure:**
- **Chains**: Compose your prediction logic using LangChain chains
- **Prompts**: Store all prompts separately for easy iteration
- **Tools**: Custom tools to fetch stats, historical data, injury reports
- **Memory**: Store context about teams, recent form, etc.

**2. Data Flow:**
```
Football APIs → Cloud Function (daily sync) → Firestore/Cloud SQL
                                            ↓
User Request → Next.js API → LangChain → Gemini (free) → Prediction
                            ↓
                    Store in Database → Display to User