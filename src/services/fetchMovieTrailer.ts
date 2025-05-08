import { getApiOptions, BASE_URL } from '@/consts/api';
import { FETCHING_ERROR_MSG } from '@/consts/messages';
import { VideoResponse } from '@/models/VideoResponse';

export const fetchMovieTrailer = async (type: string, id: string): Promise<VideoResponse> => {
  const endpoint = `${BASE_URL}/${type}/${id}/videos?language=en-US`;
  const response = await fetch(endpoint, getApiOptions());

  if (!response.ok) {
    throw new Error(FETCHING_ERROR_MSG);
  }

  const data = (await response.json()) as unknown as VideoResponse;

  return data;
};
