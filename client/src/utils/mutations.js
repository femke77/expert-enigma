import { gql } from '@apollo/client';



export const LOGIN_USER = gql`
 mutation Mutation($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const ADD_USER = gql`
  mutation Mutation($username: String!, $email: String!, $password: String!, $annualSalary: Int!) {
  addUser(username: $username, email: $email, password: $password, annualSalary: $annualSalary) {
    token
    user {
      _id
      annualSalary
      email
      username
    }
  }
}`

export const CREATE_CAMPAIGN = gql`
mutation CreateCampaign($campaignData: CampaignInput!) {
  createCampaign(campaignData: $campaignData) {
    description
    endDate
    image {
      data
      contentType
    }
    targetAmount
    title
  }
}
`;



export const UPDATE_CAMPAIGN = gql`
mutation UpdateCampaign($id: ID!, $campaignData: updateCampaignInput!) {
  updateCampaign(_id: $id, campaignData: $campaignData) {
    description
    title
    _id
    endDate
    targetAmount
  }
}
`;

export const DELETE_CAMPAIGN = gql`
mutation deleteCampaign($campaignId: ID!) {
  deleteCampaign(campaignId: $campaignId) {
    creatorId {
      _id
    }
  }
}
`;



export const ADD_REVIEW = gql`
mutation addReview($campaignId: ID!, $description: String!) {
  createReview(campaignId: $campaignId, description: $description) {
    description
    campaigns {
      _id
    }
  }
}
`;

export const DELETE_REVIEW = gql`
mutation DeleteReview($reviewId: ID!) {
  deleteReview(reviewId: $reviewId) {
    creatorId {
      _id
    }
  }
}
`;

export const ADD_DONATION = gql`
mutation addDonation($campaignId: ID!, $amount: Int!, $donorId: ID!) {
  addDonation(campaignId: $campaignId, amount: $amount, donorId: $donorId) {
    createdAt
    _id
    amount
    campaignId
    donorId
  }
}`