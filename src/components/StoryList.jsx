import { ExternalLink, ChevronUp } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

const StoryList = ({ stories, isLoading }) => {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="flex items-center space-x-4">
            <Skeleton className="h-4 w-4 bg-secondary" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px] bg-secondary" />
              <Skeleton className="h-4 w-[200px] bg-secondary" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <ul className="space-y-4">
      {stories.map((story) => (
        <li key={story.objectID} className="border border-accent p-4 rounded-md bg-card">
          <h2 className="text-xl font-semibold font-mono text-primary">{story.title}</h2>
          <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
            <span className="flex items-center">
              <ChevronUp className="h-4 w-4 mr-1 text-accent" />
              {story.points}
            </span>
            <Button
              variant="outline"
              size="sm"
              className="border-accent text-accent hover:bg-accent hover:text-primary"
              asChild
            >
              <a
                href={story.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Hack
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default StoryList;
