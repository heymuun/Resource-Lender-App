# Lend And Earn App

## Prerequisites
- JS Runtime: Nodejs
- A package manager: pnpm 
- Containerization: Docker

# Understanding the app arch

## Backend:
### Routes:
localhost:/4000/
- **post** /auth/signup: name, email, password ```{signup}```
- **post** /auth/login: email, password ```{login}```
- **post** /auth/logout ```{logout}```
- **get** /users/ ```{fetchUsers}```
- **get** /users/:id ```{fetchSpecificUser}```
- **post** /listings/createListing: title, description ```{createListing}```
- **get:** /listings/ ```{fetchListings}```
- **get:** /listings/:id ```{fetchSpecificListing}```
- **post:** /loans/getLoan: listingId ```{getLoan}```
- **delete:** /loans/returnLoan: listingId ```{returnLoan}```
- **get:** /listings/search?q= : http://localhost:4000/listings/search?q=Tom ```{searchListings}```

## Frontend:




