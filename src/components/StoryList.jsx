import { ExternalLink } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const StoryList = ({ stories, isLoading }) => {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="flex items-center space-x-4">
            <Skeleton className="h-4 w-4" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <ul className="space-y-4">
      {stories.map((story) => (
        <li key={story.objectID} className="border p-4 rounded-md">
          <h2 className="text-xl font-semibold">{story.title}</h2>
          <div className="flex items-center mt-2 text-sm text-gray-600">
            <span className="mr-4">Upvotes: {story.points}</span>
            <a
              href={story.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:underline"
            >
              Read more
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default StoryList;
