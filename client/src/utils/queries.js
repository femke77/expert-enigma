import { gql } from '@apollo/client';



export const QUERY_GET_ME = gql`
 {  me {
    _id
    annualSalary
    email
    username
  }
  campaigns {
    _id
    createdAt
    currentAmount
    description
    endDate
    reviews {
      description
    }
    image {
      data
      contentType
    }
    creatorId {
      _id
    }
    title
    targetAmount
    donations {
      amount
    }
  }
 }
`;

export const QUERY_CAMPAIGN = gql`
    {
  campaigns {
    _id
    createdAt
    creatorId {
      _id
    }
    endDate
    image {
      contentType
      data
    }  
    title
    currentAmount
    targetAmount
    description
    donations {
      _id
      amount
      createdAt
      donorId 
    }
    reviews {
      createdAt
      creatorId {
        _id
      }
      description  
    }
  }
}
`;


export const QUERY_DONATION = gql`
 { donations{
  _id
  amount
  campaignId {
    _id
  }
  createdAt
  donorId {
    _id
  }
}}
`

export const QUERY_CHECKOUT = gql`
  query getCheckout($amount: Int) {
    checkout(amount: $amount) {
      session
    }
  }
`;