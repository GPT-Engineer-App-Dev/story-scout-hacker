import { Button } from "@/components/ui/button";
import { Terminal, Rocket, Zap, Code } from "lucide-react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-center items-center px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 flex items-center justify-center">
          <Terminal className="mr-4 text-accent" />
          <span className="font-mono">HN_Top_100</span>
        </h1>
        <p className="text-xl mb-8">
          Stay ahead of the curve with the top 100 stories from Hacker News, curated for tech enthusiasts and innovators.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="flex flex-col items-center p-4 bg-card rounded-lg">
            <Rocket className="text-accent mb-2" size={32} />
            <h3 className="text-lg font-semibold mb-2">Latest Tech Trends</h3>
            <p className="text-sm text-muted-foreground">Discover cutting-edge developments in the tech world.</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-card rounded-lg">
            <Zap className="text-accent mb-2" size={32} />
            <h3 className="text-lg font-semibold mb-2">Real-time Updates</h3>
            <p className="text-sm text-muted-foreground">Get the most recent stories as they break on Hacker News.</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-card rounded-lg">
            <Code className="text-accent mb-2" size={32} />
            <h3 className="text-lg font-semibold mb-2">Developer-focused</h3>
            <p className="text-sm text-muted-foreground">Content tailored for programmers and tech professionals.</p>
          </div>
        </div>
        <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90">
          <Link to="/app">Enter HN_Top_100</Link>
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
