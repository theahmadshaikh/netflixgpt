import { create } from "zustand";
import type { Movie } from "../types/movie";

export type MovieCategory = "now_playing" | "top_rated" | "upcoming" | "trending";

interface MovieCategoryState {
    movies: Movie[];
    page: number;
    totalPages: number;
    loading: boolean;
}

interface MovieStore {
    categories: Record<MovieCategory, MovieCategoryState>;
    setCategoryData: (
        category: MovieCategory,
        movies: Movie[],
        page: number,
        totalPages: number
    ) => void;
    setPage: (category: MovieCategory, newPage: number) => void;
    setLoading: (category: MovieCategory, loading: boolean) => void;
}

export const useMovieStore = create<MovieStore>((set) => ({
    categories: {
        now_playing: { movies: [], page: 1, totalPages: 1, loading: false },
        top_rated: { movies: [], page: 1, totalPages: 1, loading: false },
        upcoming: { movies: [], page: 1, totalPages: 1, loading: false },
        trending: { movies: [], page: 1, totalPages: 1, loading: false },
    },

    setCategoryData: (category, movies, page, totalPages) =>
        set((state) => ({
            categories: {
                ...state.categories,
                [category]: {
                    ...state.categories[category],
                    movies,
                    page,
                    totalPages,
                },
            },
        })),
    setPage: (category, newPage) =>
        set((state) => ({
            categories: {
                ...state.categories,
                [category]: {
                    ...state.categories[category],
                    page: newPage,
                },
            },
        })),


    setLoading: (category, loading) =>
        set((state) => ({
            categories: {
                ...state.categories,
                [category]: {
                    ...state.categories[category],
                    loading,
                },
            },
        })),
}));
