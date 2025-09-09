/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.
function trackSightings(...animals) {
    console.log(`Animal Sightings: ${animals}`);
}
trackSightings("Lions", "Tigers", "Bears");

/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.
const combinedAreas = [...forestHabitats, ...savannahHabitats];
console.log(`Protected Areas: ${combinedAreas}`);

/* Task 3: Update Conservation Status */
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.
const updatedRhinoStatus = { ...rhinoStatus, population: 555, habitat: "Savannah" };
console.log(`Updated Rhino Status: ${(updatedRhinoStatus)}`);

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.


const lionProfileCopy = { ...lionProfile, genetics: "Diverse" };

//  * Observations:
//  * TODO: Explain here. Modifying the copied object does not affect the original object due to being a shallow copy. 
//  */ The original lionProfile remains unchanged when we add the genetics property to lionProfileCopy and it creates a new memory reference for the copied object.

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.
/*

 * Observations:
 * TODO: Explain here. Modifying the nested property in the copied object also affects the original object because the nested object is referenced in both the original and copied objects.
 */

const ecosystemHealthCopy = { ...ecosystemHealth, foodSupply: { ...ecosystemHealth.foodSupply,carnivores:"Scarce" } };
console.log("Original Ecosystem Health:", ecosystemHealth);
console.log("Copied Ecosystem Health:", ecosystemHealthCopy);