import { Restaurant } from "@interfaces/restaurants.interface";

export const restaurantsMock: Restaurant[] = [
    {
        placeId: 1,
        name: "Some Restaurant",
        icon: "icon",
        address: "Some address",
        isClosedTemporarily: true,
        isOpenNow: false,
        photos: [
            "https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
            "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        ],
        rating: 5,
    },
    {
        placeId: 2,
        name: "Some Restaurant 2",
        icon: "icon",
        address: "Some address",
        isClosedTemporarily: false,
        isOpenNow: true,
        photos: [
            "https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
            "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        ],
        rating: 5,
    },
    {
        placeId: 3,
        name: "Some Restaurant 3",
        icon: "icon",
        address: "Some address",
        isClosedTemporarily: false,
        isOpenNow: true,
        photos: [
            "https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
            "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        ],
        rating: 5,
    },
];
