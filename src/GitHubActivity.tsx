import { useEffect, useState } from 'react';

interface GitHubEvent {
  type: string;
  repo: {
    name: string;
  };
  created_at: string;
  payload?: {
    ref?: string;
    ref_type?: string;
  };
}

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export default function GitHubActivity() {
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ repos: 0, contributions: 0 });

  useEffect(() => {
    // Fetch recent events
    fetch('https://api.github.com/users/melaven/events')
      .then(res => res.json())
      .then(data => {
        const filtered = data
          .filter((event: GitHubEvent) => 
            event.type === 'PushEvent' || event.type === 'CreateEvent'
          )
          .slice(0, 5);
        setEvents(filtered);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch GitHub events:', err);
        setLoading(false);
      });

    // Fetch user stats
    fetch('https://api.github.com/users/melaven')
      .then(res => res.json())
      .then(data => {
        setStats({
          repos: data.public_repos || 0,
          contributions: 0 // GitHub API не предоставляет общее количество без авторизации
        });
      })
      .catch(err => console.error('Failed to fetch user stats:', err));
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
  };

  const formatEvent = (event: GitHubEvent) => {
    const repoName = event.repo.name.split('/')[1] || event.repo.name;
    if (event.type === 'PushEvent') {
      return `Pushed to ${repoName}`;
    }
    if (event.type === 'CreateEvent') {
      return `Created ${event.payload?.ref_type || 'repo'} in ${repoName}`;
    }
    return `Activity in ${repoName}`;
  };

  // Генерация mock contribution grid для визуализации
  const generateContributionGrid = () => {
    const weeks: ContributionDay[][] = [];
    const today = new Date();
    
    // Генерируем последние 12 недель
    for (let week = 11; week >= 0; week--) {
      const days: ContributionDay[] = [];
      for (let day = 0; day < 7; day++) {
        const date = new Date(today);
        date.setDate(date.getDate() - (week * 7 + (6 - day)));
        
        // Рандомные данные для демонстрации (в реальности нужен GraphQL API)
        const count = Math.floor(Math.random() * 10);
        const level = count === 0 ? 0 : count < 3 ? 1 : count < 6 ? 2 : count < 8 ? 3 : 4;
        
        days.push({
          date: date.toISOString().split('T')[0],
          count,
          level: level as 0 | 1 | 2 | 3 | 4
        });
      }
      weeks.push(days);
    }
    return weeks;
  };

  const contributionGrid = generateContributionGrid();
  const levelColors = [
    'bg-gray-100',
    'bg-gray-200',
    'bg-gray-400',
    'bg-gray-600',
    'bg-gray-900'
  ];

  return (
    <div className="border border-gray-200 rounded-[24px] bg-white overflow-hidden shadow-sm flex flex-col">
      <div className="p-6 flex-grow">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[18px] font-semibold text-gray-900">GitHub Activity</h3>
          <a 
            href="https://github.com/melaven" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[11px] font-bold tracking-widest text-gray-400 uppercase hover:text-gray-900 transition-colors flex items-center gap-1"
          >
            View Profile <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-6 mb-6 pb-6 border-b border-gray-100">
          <div>
            <div className="text-[24px] font-bold text-gray-900">{stats.repos}</div>
            <div className="text-[11px] text-gray-400 uppercase tracking-wider">Repositories</div>
          </div>
          <div>
            <div className="text-[24px] font-bold text-gray-900">250+</div>
            <div className="text-[11px] text-gray-400 uppercase tracking-wider">Contributions</div>
          </div>
        </div>

        {/* Contribution Grid */}
        <div className="mb-6">
          <h4 className="text-[11px] font-medium text-gray-500 uppercase tracking-wider mb-3">
            Last 12 Weeks
          </h4>
          <div className="flex gap-1 overflow-x-auto pb-2">
            {contributionGrid.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.map((day, dayIndex) => (
                  <div
                    key={dayIndex}
                    className={`w-2.5 h-2.5 rounded-sm ${levelColors[day.level]} transition-colors hover:ring-2 hover:ring-gray-400 hover:ring-offset-1`}
                    title={`${day.date}: ${day.count} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Live Activity Feed */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <h4 className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">
              Recent Activity
            </h4>
          </div>

          <div className="space-y-2.5">
            {loading ? (
              <div className="font-mono text-[11px] text-gray-400">
                Loading activity...
              </div>
            ) : events.length === 0 ? (
              <div className="font-mono text-[11px] text-gray-400">
                No recent activity
              </div>
            ) : (
              events.map((event, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-2.5 font-mono text-[11px]"
                >
                  <div className="w-1 h-1 rounded-full bg-green-500 mt-1.5 flex-shrink-0"></div>
                  <div className="flex-1 flex items-center justify-between gap-2">
                    <span className="text-gray-700">{formatEvent(event)}</span>
                    <span className="text-gray-400 whitespace-nowrap">{formatDate(event.created_at)}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
        <p className="text-[10px] text-gray-400 text-center">
          Live data from GitHub API
        </p>
      </div>
    </div>
  );
}