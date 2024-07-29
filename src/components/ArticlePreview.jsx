import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ArticlePreview = ({ url, onClose }) => {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-card w-full max-w-4xl h-[80vh] rounded-lg shadow-lg flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-accent">
          <h2 className="text-xl font-semibold font-mono text-primary">Article Preview</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <iframe src={url} className="flex-grow w-full" title="Article Preview" />
      </div>
    </div>
  );
};

export default ArticlePreview;
