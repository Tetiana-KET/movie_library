import { Client, Databases, ID, Query } from 'appwrite';
import { MovieInterface } from './models/MovieInterface';

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DB_ID = import.meta.env.VITE_APPWRITE_DB_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_METRICS_COLLECTOIN_ID;

const client = new Client().setEndpoint('https://cloud.appwrite.io/v1').setProject(PROJECT_ID);

const database = new Databases(client);

export const updateSearchCount = async (searchTerm: string, movie: MovieInterface) => {
  const result = await database.listDocuments(DB_ID, COLLECTION_ID, [Query.equal('searchTerm', searchTerm)]);

  if (result.documents.length) {
    const doc = result.documents[0];

    await database.updateDocument(DB_ID, COLLECTION_ID, doc.$id, {
      count: doc.count + 1,
    });
  } else {
    await database.createDocument(DB_ID, COLLECTION_ID, ID.unique(), {
      searchTerm,
      count: 1,
      movie_id: movie.id,
      poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    });
  }
};

export const getTrendingMovies = async () => {
  return await database.listDocuments(DB_ID, COLLECTION_ID, [Query.limit(6), Query.orderDesc('count')]);
};
