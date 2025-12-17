import { useRelatedVideos } from "@/api/queries/useRelatedVideos";
import QuickPickCard from "@/components/common/quick-pick-card/QuickPickCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { YoutubeVideo } from "@/types/videoTypes";
import { useEffect } from "react";
import { usePlayerStore } from "../../store/playerStore";

export default function Watch() {
  const { currentTrack, queue, playTrack } = usePlayerStore();

  const { data: upNext = [] } = useRelatedVideos(currentTrack!.id);
  const handleClick = (item: YoutubeVideo) => {
    playTrack(item);
  };

  useEffect(() => {
    if (queue.length === 0 || upNext[0]?.id !== queue[0]?.id)
      playTrack(currentTrack!, upNext);
  }, [currentTrack, upNext]);
  const tabs = [
    {
      value: "up_next",
      label: "UP NEXT",
      content: (
        <div className="flex flex-col overflow-y-auto scrollbar h-[60vh]">
          {queue &&
            queue.map((item: YoutubeVideo, index: number) => (
              <button onClick={() => handleClick(item)} key={item?.id || index}>
                <QuickPickCard
                  record={item}
                  imageWidth={"md"}
                  imageHeight={"sm"}
                />
              </button>
            ))}
        </div>
      ),
    },
    {
      value: "lyrics",
      label: "LYRICS",
      content: <p>Lyrics content</p>,
    },
    {
      value: "related",
      label: "RELATED",
      content: <p>Related content</p>,
    },
  ];
  return (
    <div className="px-14 mt-6 flex flex-col md:flex-row gap-x-8">
      <div className="flex-[60%]">
        <img
          src={currentTrack?.snippet?.thumbnails?.standard?.url}
          alt={currentTrack?.snippet?.title}
        />
      </div>
      <div className="flex-[40%] mt-8">
        <Tabs defaultValue="up_next" className="w-[400px]">
          <TabsList className="bg-transparent p-0 border-b-2 border-white/10 w-full justify-start rounded-none">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="
                w-full
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
      {/* <Player /> */}
    </div>
  );
}
