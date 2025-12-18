import { useSearch } from "@/api/queries/useSearch";
import QuickPickCard from "@/components/common/quick-pick-card/QuickPickCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePlayerStore } from "@/store/playerStore";
import type { YoutubeVideo } from "@/types/videoTypes";
import { useNavigate, useSearchParams } from "react-router";

export default function SearchResults() {
  const { playTrack } = usePlayerStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const { data, isLoading, isError, error } = useSearch(query);
  const navigate = useNavigate();
  console.log("data>>>", data);

  const handleClick = (item: YoutubeVideo) => {
    playTrack(item);
    navigate("/watch");
  };
  const tabs = [
    {
      value: "yt_music",
      label: "YT MUSIC",
      content: (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
          {data?.items.map((item: YoutubeVideo) => (
            <button onClick={() => handleClick(item)}>
              <QuickPickCard record={item} />
            </button>
          ))}
        </div>
      ),
    },
    {
      value: "library",
      label: "LIBRARY",
      content: <p>Library</p>,
    },
  ];
  return (
    <div className="relative pb-40 pt-8 w-full sm:px-14 sm:w-[80vw] md:w-[85vw] lg:[90vw]">
      <Tabs defaultValue="yt_music">
        <TabsList className="bg-transparent p-0 border-b-2 border-white/10 w-full justify-start rounded-none">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="
                w-[200px]
                rounded-none
                 cursor-pointer
                px-4 py-2
                text-sm
                font-medium
                border-b-2 border-transparent
                text-white/70
                hover:text-white
                hover:border-white/20
                transition-all
      
                data-[state=active]:text-white
                data-[state=active]:border-white
                data-[state=active]:bg-surface
              "
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="mt-4">
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
