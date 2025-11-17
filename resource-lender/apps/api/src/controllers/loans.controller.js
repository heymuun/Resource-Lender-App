import prisma from "../prisma/client.js";

export async function getLoan(req, res){ //loan is just requested using this function, but it is not approved yet
  const userFromCookie = req.cookies?.userCredentials;
  const borrowerId = Number(userFromCookie.id);
  const {listingId} = req.body;
  const createLoanForUser = await prisma.loan.create({
    data: {
      listingId,
      borrowerId
    }
  });
  res.status(201).json({message: "Loan Request created"});
}
export async function updateLoan(req, res){
  const updateLoanStatus = prisma.loan.update({
    where : {
      id: req.body.id
    },
    data : req.body
  }); //this is actually dangerous, because we are changing the backend database just using frontend request, but the schema seems complicated.
  res.status(200).json({message: `Loan Updated`}); //we might need notifications for the borrower?
}
export async function returnLoan(req, res){
  const {listingId} = req.body;
  const userFromCookie = req.cookies?.userCredentials;
  const borrowerId = Number(userFromCookie.id);
  const returnLoanResult = await prisma.loan.deleteMany({
    where : {
      listingId,
      borrowerId
    }
  });
  if(returnLoanResult.count === 0){
    return res.status(400).json({message: "Loan not found"});
  }
  res.status(200).json({
    message: "Loan returned"
  })
}
