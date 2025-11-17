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
> `{"data":{"id":7,"email":"testName.email.com","name":"testName","password":"abcd","createdAt":"2025-11-17T17:57:57.951Z"},"message":"User created"}`

- **post** /auth/login: email, password ```{login}```
- **post** /auth/logout ```{logout}```
- **get** /users/ ```{fetchUsers}```
- **get** /users/:id ```{fetchSpecificUser}```
- **post** /listings/createListing: title, description, category ```{createListing}```
- **get:** /listings/ ```{fetchListings}```
- **get:** /listings/:id ```{fetchSpecificListing}```
- **post:** /loans/getLoan: listingId ```{getLoan}```
- **delete:** /loans/returnLoan: listingId ```{returnLoan}```
- **post:** /loans/updateLoan: 
> `
model Loan {
  id           Int      @id @default(autoincrement())
  listingId    Int
  borrowerId   Int
  status       String   @default("pending")
  requestDate  DateTime @default(now())
  approvedAt   DateTime?
  rejectedAt   DateTime?
  borrowDate   DateTime?
  dueDate      DateTime?
  returnedAt   DateTime?
  fineAmount   Float?
  createdAt    DateTime @default(now())
  listing      Listing  @relation(fields: [listingId], references: [id])
  borrower     User     @relation("UserLoans", fields: [borrowerId], references: [id])
}
`
- **get:** /listings/search?q= : http://localhost:4000/listings/search?q=Tom&category="null"```{searchListings}```

## Frontend:




