import Image from 'next/image';

const matches = [
  {
    id: 1,
    time: "11:30",
    status: "FT",
    homeTeam: { name: "Real Madrid", logo: "/real-madrid.png", score: 2 },
    awayTeam: { name: "Barcelona", logo: "/fc-barcelona-seeklogo.png", score: 1 },
    predictions: { home: 2, away: 1 },
    confidence: 89
  },
  {
    id: 2,
    time: "14:00",
    status: "LIVE",
    homeTeam: { name: "Man City", logo: "/real-madrid.png", score: 1 },
    awayTeam: { name: "Liverpool", logo: "/fc-barcelona-seeklogo.png", score: 1 },
    predictions: { home: 2, away: 1 },
    confidence: 76
  },
  {
    id: 3,
    time: "14:00",
    status: "LIVE",
    homeTeam: { name: "Man City", logo: "/real-madrid.png", score: 1 },
    awayTeam: { name: "Liverpool", logo: "/fc-barcelona-seeklogo.png", score: 1 },
    predictions: { home: 2, away: 1 },
    confidence: 76
  },
];

// Compact Card Variant
function CompactMatchCard({ match }: any) {
  return (
    <div className="bg-card border border-border rounded-lg p-3 hover:ring hover:ring-primary/20  transition-all cursor-pointer">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-muted-foreground">{match.time}</span>
        <span className={`px-2 py-0.5 text-xs font-semibold rounded ${
          match.status === 'LIVE' 
            ? 'bg-red-500/10 text-red-500 animate-pulse' 
            : 'bg-primary/10 text-primary'
        }`}>
          {match.status}
        </span>
      </div>

      <div className="space-y-2">
        {/* Home Team */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <Image 
              src={match.homeTeam.logo}
              width={24}
              height={24}
              alt={match.homeTeam.name}
              className="shrink-0"
            />
            <span className="text-sm font-medium truncate">{match.homeTeam.name}</span>
          </div>
          <span className="text-sm md:text-xl font-bold ml-2">{match.homeTeam.score}</span>
        </div>

        {/* Away Team */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <Image 
              src={match.awayTeam.logo}
              width={24}
              height={24}
              alt={match.awayTeam.name}
              className="shrink-0"
            />
            <span className="text-sm font-medium truncate">{match.awayTeam.name}</span>
          </div>
          <span className="text-sm md:text-xl font-bold ml-2">{match.awayTeam.score}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
        <div className="text-xs text-muted-foreground">
          Predicted: <span className="font-medium text-foreground">
            {match.predictions.home}-{match.predictions.away}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-12 h-1.5 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all" 
              style={{ width: `${match.confidence}%` }}
            />
          </div>
          <span className="text-xs font-semibold text-primary">{match.confidence}%</span>
        </div>
      </div>
    </div>
  );
}


export default function MatchCardShowcase() {
  return (
    <div className="min-h-screen bg-background p-6 space-y-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-xl md:text-3xl font-bold mb-2">Premiere League Updates</h1>
          <p className="text-base md:text-xl text-muted-foreground">Find today's predictions</p>
        </div>

        {/* Compact Grid */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {matches.map(match => (
              <CompactMatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}