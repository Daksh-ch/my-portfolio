import {createSlice } from '@reduxjs/toolkit';

const initialBlogData = {
    featuredPost: { 
        title: "Designing calm UI systems that scale",
        excerpt: "A behind-the-scenes breakdown...",
        category: "Product Systems",
        date: "May 6, 2026",
        readTime: "7 min read",
        badge: "Featured",
        likes: 42,
    },
    posts:[
        {
            title: "Shipping a bento portfolio in one weekend",
            excerpt: "A quick sprint recap on building a clean portfolio using modern CSS grid constraints.",
            category: "Case Study",
            date: "May 4, 2026",
            readTime: "5 min read",
        },
        {
            title: "Minimal dashboards that still feel expressive",
            excerpt: "How I combine sparse UI, clear data hierarchy, and subtle motion to keep dashboards readable.",
            category: "UI Design",
            date: "Apr 27, 2026",
            readTime: "6 min read"
        },
        {
            title: "My checklist for production-ready features",
            excerpt: "The exact steps I follow before calling a feature done, from state hygiene to error handling.",
            category: "Engineering",
            date: "Apr 18, 2026",
            readTime: "4 min read"
        },
        {
            title: "Organizing a full-stack codebase",
            excerpt: "Folder structure patterns I use to keep React, API, and shared utilities easy to scale.",
            category: "Architecture",
            date: "Mar 24, 2026",
            readTime: "8 min read"
        }
    ]
}

const blogSlice = createSlice({
    name: "blogs",
    initialState: initialBlogData,
    reducers: {
        addLikeToFeatured: (state) => {
            state.featuredPost.likes += 1
        }
    }
})

export const {addLikeToFeatured} = blogSlice.actions

export default blogSlice.reducer