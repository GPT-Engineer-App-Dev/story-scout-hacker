import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Search, Terminal } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import StoryList from '../components/StoryList';

const fetchTopStories = async () => {
  const response = await fetch('https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=100');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, isLoading, error } = useQuery({ queryKey: ['topStories'], queryFn: fetchTopStories });

  const filteredStories = data?.hits.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="container mx-auto px-4 py-8 bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        <Terminal className="mr-2 text-accent" />
        <span className="font-mono">Hacker News Top 100</span>
      </h1>
      <div className="flex mb-6">
        <Input
          type="text"
          placeholder="Hack the search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mr-2 bg-secondary text-primary placeholder-muted-foreground border-accent"
        />
        <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-primary">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
      {error && <p className="text-destructive mb-4">Error: {error.message}</p>}
      <StoryList stories={filteredStories} isLoading={isLoading} />
    </div>
  );
};

export default Index;
