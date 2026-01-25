import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { searchContent, type SearchResult } from "@/lib/search-index";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SearchDialog({
  open,
  onOpenChange,
}: SearchDialogProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (query) {
      const searchResults = searchContent(query);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSelectResult = (path: string) => {
    navigate(path);
    onOpenChange(false);
    setQuery("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Search Website</DialogTitle>
        </DialogHeader>

        <div className="flex items-center space-x-2 px-1">
          <Search className="w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search pages, programs, facilities..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>

        <div className="overflow-y-auto flex-1">
          {results.length > 0 ? (
            <div className="space-y-2 pr-4">
              {results.map((result) => (
                <button
                  key={result.id}
                  onClick={() => handleSelectResult(result.path)}
                  className="w-full text-left p-3 rounded-lg hover:bg-accent transition-colors group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground group-hover:text-orange-600">
                        {result.title}
                      </h3>
                      <p className="body-sm text-muted-foreground">
                        {result.description}
                      </p>
                      <p className="body-sm text-muted-foreground mt-1">
                        {result.category}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-orange-600 ml-2 flex-shrink-0 mt-1" />
                  </div>
                </button>
              ))}
            </div>
          ) : query ? (
            <div className="flex items-center justify-center h-32 text-muted-foreground">
              <p>No results found for "{query}"</p>
            </div>
          ) : (
            <div className="flex items-center justify-center h-32 text-muted-foreground">
              <p>Start typing to search...</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
