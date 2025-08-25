function mysteryOperation ()
{
	const outcome = Math.random(); // Generates a random number between 0 and 1.

	if (outcome < 0.5)
	{
		console.log("The operation is completed successfully!");
	}
	else
	{
		throw new Error("The operation is failed mysteriously!");
	}
}

const numOperations = 20;
const daysOffSuccessful = 13;
const daysOffUnsuccessful = 1;
const daysOffAttendance = 3;

let daysEarned = 0;

for (let i = 0; i < numOperations; i++)
     {
        try
        {
            mysteryOperation();
            daysEarned += daysOffSuccessful;
        }
        catch (error) 
        {        
            daysEarned += daysOffUnsuccessful;
        }
        finally 
        {
            daysEarned += daysOffAttendance;
        }
    }

console.log(daysEarned);