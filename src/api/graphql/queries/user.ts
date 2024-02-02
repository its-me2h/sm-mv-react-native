import { gql } from 'graphql-request';

export const GET_USER_INFO = gql`
    query getUserInfo($userId: ID!) {
        user(id: $userId) {
            id
            isPro
            userName
            firstName
            lastName
            avatarURL
        }
    }
`;

export const GET_USER_PROFILE = gql`
    query getUserProfile($userId: ID!) {
        user(id: $userId) {
            id
            isPro
            userName
            firstName
            lastName
            avatarURL
            coverURL
            pro {
                bio
                countPosts
                countFollowers
                countSubscribers
                isFollowing
                isSubscribing
            }
        }
    }
`;

export const GET_SUGGESTED_PROS = gql`
    query getSuggestedPros($limit: Int) {
        pro(limit: $limit) {
            user {
                id
                userName
                firstName
                lastName
                avatarURL
            }
        }
    }
`;

