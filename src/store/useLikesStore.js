import { create } from 'zustand';

const useLikesStore = create((set) => ({
  likedPosts: JSON.parse(localStorage.getItem('likedPosts') || '{}'),
  toggleLike: (id) =>
    set((state) => {
      const updated = { ...state.likedPosts, [id]: !state.likedPosts[id] };
      localStorage.setItem('likedPosts', JSON.stringify(updated));
      return { likedPosts: updated };
    })
}));

export default useLikesStore;
