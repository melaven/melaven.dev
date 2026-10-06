import { ExternalLink } from "lucide-react";
import { TechChip } from "./Hero";

const TECH_STACK = ["Python", "FastAPI", "Supabase", "Docker", "AmoCRM"];

function TerminalWindow() {
  return (
    <div className="relative overflow-hidden rounded-lg bg-gray-950 ring-1 ring-gray-800">
      {/* Terminal header */}
      <div className="flex h-8 items-center gap-1.5 bg-gray-900 px-4">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
        <span className="ml-2 text-xs text-gray-400">sentiment_processor.py</span>
      </div>

      {/* Code content */}
      <div className="p-4 font-mono text-sm leading-relaxed">
        <div className="space-y-1">
          <div>
            <span className="text-purple-400">from</span>{" "}
            <span className="text-blue-400">fastapi</span>{" "}
            <span className="text-purple-400">import</span>{" "}
            <span className="text-white">APIRouter, Depends</span>
          </div>
          <div>
            <span className="text-purple-400">from</span>{" "}
            <span className="text-blue-400">services</span>{" "}
            <span className="text-purple-400">import</span>{" "}
            <span className="text-white">SentimentService, DataService</span>
          </div>
          <div className="mt-3">
            <span className="text-white">router = </span>
            <span className="text-yellow-400">APIRouter</span>
            <span className="text-white">()</span>
          </div>
          <div className="mt-3">
            <span className="text-blue-400">@router</span>
            <span className="text-white">.post(</span>
            <span className="text-green-400">"/process-mentions"</span>
            <span className="text-white">)</span>
          </div>
          <div>
            <span className="text-purple-400">async def</span>{" "}
            <span className="text-yellow-400">process_telegram_data</span>
            <span className="text-white">(</span>
          </div>
          <div className="pl-4">
            <span className="text-white">raw_data: </span>
            <span className="text-blue-400">TelegramData</span>
            <span className="text-white">,</span>
          </div>
          <div className="pl-4">
            <span className="text-white">sentiment_svc: </span>
            <span className="text-blue-400">SentimentService</span>{" "}
            <span className="text-white">= </span>
            <span className="text-yellow-400">Depends</span>
            <span className="text-white">(),</span>
          </div>
          <div className="pl-4">
            <span className="text-white">data_svc: </span>
            <span className="text-blue-400">DataService</span>{" "}
            <span className="text-white">= </span>
            <span className="text-yellow-400">Depends</span>
            <span className="text-white">(),</span>
          </div>
          <div>
            <span className="text-white">):</span>
          </div>
          <div className="pl-4 mt-2">
            <span className="text-white">analysis = </span>
            <span className="text-purple-400">await</span>{" "}
            <span className="text-white">sentiment_svc.analyze(</span>
          </div>
          <div className="pl-8">
            <span className="text-white">raw_data.message_text</span>
          </div>
          <div className="pl-4">
            <span className="text-white">)</span>
          </div>
          <div className="pl-4 mt-1">
            <span className="text-purple-400">return</span>{" "}
            <span className="text-purple-400">await</span>{" "}
            <span className="text-white">data_svc.store_processed(</span>
          </div>
          <div className="pl-8">
            <span className="text-white">raw_data, analysis</span>
          </div>
          <div className="pl-4">
            <span className="text-white">)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedBuild() {
  return (
    <section 
      id="projects" 
      className="mx-auto w-full max-w-5xl scroll-mt-8 px-6 pb-32 sm:px-8 sm:pb-40"
    >
      <article className="rounded-xl border border-gray-200 p-8 sm:p-12 dark:border-gray-800">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column - Content */}
          <div className="flex flex-col">
            <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Featured Build
            </div>
            
            <h3 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">
              Tenable
            </h3>
            
            <p className="mb-6 text-lg font-medium text-gray-600 dark:text-gray-300">
              Enterprise SERM Platform
            </p>
            
            <p className="mb-8 max-w-xl leading-7 text-gray-600 dark:text-gray-300">
              A standalone backend architecture for automated brand reputation monitoring. 
              Implements asynchronous Telegram crawlers, real-time LLM-based sentiment analysis, 
              and automated data routing to CRM. Built around Clean Architecture principles 
              for high-load text processing.
            </p>
            
            <div className="mb-8 flex flex-wrap gap-1">
              {TECH_STACK.map((tech) => (
                <TechChip key={tech}>{tech}</TechChip>
              ))}
            </div>
            
            <div className="mt-auto">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:underline dark:text-gray-50"
              >
                View Source
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
          
          {/* Right column - Terminal */}
          <div className="flex items-center">
            <TerminalWindow />
          </div>
        </div>
      </article>
    </section>
  );
}