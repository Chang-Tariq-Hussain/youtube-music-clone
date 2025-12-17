import { useQuery, type QueryFunctionContext } from "@tanstack/react-query";
import type {
  VideosListParams,
  VideosListResponse,
} from "../../types/videoTypes";
import { youtubeApi } from "../client";

type VideosQueryKey = readonly ["videos", VideosListParams];

export const fetchVideos = async (
  context: QueryFunctionContext<VideosQueryKey>
) => {
  const [_key, params] = context.queryKey;
  const requestParams = {
    ...params,
    part: params.part.join(","),
  };
  try {
    const { data } = await youtubeApi.get<VideosListResponse>("/videos", {
      params: requestParams,
    });
    return data ?? [];
  } catch (error) {
    console.error(error);
  }
};

export const useFetchVideos = (
  params: VideosListParams = { part: ["snippet"] }
) => {
  return useQuery({
    queryKey: ["videos", params],
    queryFn: fetchVideos,
  });
};
