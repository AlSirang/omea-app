import abi from "assets/abi/omea.abi.json";

export const CONTRACT_ABI = abi;
export const CONTRACT_ADDRESS = "0x024E4aD4da503246b0BD783727a74AbeF443B2fF";

/* Write Functions
- claimAllReward - claims all reward for user
- Deposit = deposit
- launchContract = starts the contract
- RenounceOwnership = contract loses owners
- setBonus = Only Owner can set a numeric Bonus to a user - Bonus itself is non withdrawable only generates reward
- setSigner = sets a signer for bonuses
-WithdrawCapital = unstacking locked investment after period is over to withdraw principal
*/

/*
- Read functions
- APR Reads give you the fixed daily % of roi per cluster (cluster is depended on deposit sum of user)
- Apr 1
- Ap2
- Ap3
- Apr4
- Apr5
- Read current APR / ROI% of user by calling the getApr function
- Get Balance - gets balance of BUSD in user wallet
- Get investor referrals - gets number of refferals user has
- Get OwnedDeposits - Returns users own deposits
- Total invests - returns total amount invested
- Total rewards - returns total amount of rewards disturbuited
- Investors - returns number of investors
- Launched - contract started Y/N
- Owner - returns owner of contract
- Principal fee - returns the 1% fee on withdrawing initial principal
- ReferrerRewards (1-3) - return the reward % of the referrer level user is on
- RewardPeriod- returns the reward period
- GetTotalInvested = total invested
- GetTotalReward = total rewards
- Withdraw period = returns time till unlocked principal
*/
