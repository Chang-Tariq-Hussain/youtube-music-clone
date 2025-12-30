import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import QuickPickCard from "@/components/common/quick-pick-card/QuickPickCard";
import TextHeading from "@/components/common/text-heading/TextHeading";
import { usePlayerStore } from "@/store/playerStore";
import type { VideosListResponse, YoutubeVideo } from "@/types/videoTypes";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router";
import { Grid, Navigation, Pagination } from "swiper/modules";
export default function QuickPickSlider({
  data,
  heading,
}: {
  data: VideosListResponse | undefined;
  heading?: string;
}) {
  const { playTrack } = usePlayerStore();
  const navigate = useNavigate();

  const handleClick = (item: YoutubeVideo) => {
    playTrack(item);
    navigate("/watch");
  };
  return (
    <>
      <TextHeading text={heading || "N/A"} />
      <div className="relative">
        <div className="absolute flex items-center gap-x-4 -top-12 right-5 z-10">
          <button className="swiper-button-prev-custom w-10 h-10 border border-gray-600 flex items-center justify-center rounded-full cursor-pointer hover:bg-white/10 transition">
            <ChevronLeft />
          </button>
          <button className="swiper-button-next-custom w-10 h-10 border border-gray-600 flex items-center justify-center rounded-full cursor-pointer hover:bg-white/10 transition">
            <ChevronRight />
          </button>
        </div>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={4}
          grid={{
            rows: 4,
            fill: "row",
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom", // Custom class for right button
            prevEl: ".swiper-button-prev-custom", // Custom class for left button
          }}
          spaceBetween={15}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination, Navigation]}
          on={{
            navigationNext: (swiper) => {
              // Jump forward 3 columns = 12 slides
              swiper.slideNext();
              swiper.slideNext();
              swiper.slideNext();
            },
            navigationPrev: (swiper) => {
              // Go back 1 column = 4 slides
              swiper.slidePrev();
            },
          }}
          className="mySwiper"
        >
          {data?.items.map((item: YoutubeVideo) => (
            <SwiperSlide>
              <button onClick={() => handleClick(item)}>
                <QuickPickCard record={item} />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
