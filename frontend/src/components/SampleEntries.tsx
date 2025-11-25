import type {Entry} from "@/interface/Entry";

export const sampleEntries: Entry[] = [
    {
        id: 1,
        createdBy: {
            id: 101,
            username: "Alice",
            password: "password123",
            lastLogin: "2025-11-24T10:30:00Z"
        },
        title: "Trip to Paris",
        message: "Had an amazing time visiting the Eiffel Tower and trying French pastries!Had an amazing time visiting " +
            "the Eiffel Tower and trying French pastries!Had an amazing time visiting the Eiffel Tower and trying French pastries!",
        images: ["https://picsum.photos/seed/paris/400/300"]
    },
    {
        id: 2,
        createdBy: {
            id: 102,
            username: "Bob",
            password: "secretpass",
            lastLogin: "2025-11-23T15:45:00Z"
        },
        title: "Beach Getaway",
        message: "Sun, sand, and surf! The sunsets were incredible.",
        images: ["https://picsum.photos/seed/beach/400/300", "https://picsum.photos/seed/beach2/400/300"]
    },
    {
        id: 3,
        createdBy: {
            id: 103,
            username: "Charlie",
            password: "charlie2025",
            lastLogin: "2025-11-20T09:20:00Z"
        },
        title: "Mountain Hike",
        message: "Climbed to the top of Mount Rainier. The view was breathtaking!",
        images: ["https://picsum.photos/seed/mountain/400/300"]
    },
    {
        id: 4,
        createdBy: {
            id: 104,
            username: "Diana",
            password: "dianaPass!",
            lastLogin: "2025-11-22T18:10:00Z"
        },
        title: "City Exploration",
        message: "Wandered around Tokyo for 5 days. Amazing culture and food.",
        images: ["https://picsum.photos/seed/tokyo/400/300", "https://picsum.photos/seed/tokyo2/400/300"]
    },
    {
        id: 5,
        createdBy: {
            id: 105,
            username: "Ethan",
            password: "ethanSecure",
            lastLogin: "2025-11-21T12:00:00Z"
        },
        title: "Road Trip",
        message: "Drove along the California coast. Stopped at every scenic spot!",
        images: ["https://picsum.photos/seed/roadtrip/400/300"]
    }
];
