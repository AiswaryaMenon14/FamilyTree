
# Family Tree Project

This project is a simple React application that displays a family tree based on JSON data. The family tree is represented using individual family members and their relationships (e.g., parent-child, siblings, spouses).

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Modifying the Family Data](#modifying-the-family-data)
- [JSON Data Structure](#json-data-structure)

## Installation

To get started with this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/family-tree.git

2.Navigate to the project directory.
3.Install the dependencies.
4.Running the Application:After installing the dependencies, you can start the application by running:**npm start**

**Modifying the Family Data**

The family tree data is stored in a JSON file. To modify the data, follow these steps:
1.	Locate the familyData.json file in the src directory.
2.	The JSON structure defines each family member with unique id values. To add, remove, or modify a family member, make sure the id remains unique.
3.	Update the relationships such as spouses, siblings, parents, and children by using the corresponding id values of the related family members.
Criteria for Modifying the JSON Data
1.	Unique ID: Each family member must have a unique id. This id is used to establish relationships with other members.
2.	Relationships:
o	Spouses: Use the id of the spouse in the spouses array with a type of "married".
o	Parents: Use the id of the parents in the parents array with a type of "blood".
o	Children: Use the id of the children in the children array with a type of "blood".
o	Siblings: List siblings by their id in the siblings array.
3.	Gender: The gender field is mandatory and should be either "male" or "female".
4.	Profile Image: The profileImg field should contain a URL linking to the profile image of the family member.

**Adding a New Family Member**

To add a new member:
1.	Ensure the new member has a unique id.
2.	Define the gender, name, and profileImg.
3.	Establish relationships by adding the id of this new member to the appropriate spouses, parents, children, or siblings array in the corresponding family members’ entries.
4.	
**Example of Adding a New Child**

To add a new child to the brother and wife:
1.	Create a new JSON object for the child:
1.	Add the id of this new child (newChild) to the children array of both the brother and wife objects.

**JSON Data Structure**

The JSON file is structured as an array of objects, where each object represents a family member with their respective relationships. Below is a brief explanation of each key in the objects:
•	id: Unique identifier for the family member.
•	gender: Gender of the family member ("male" or "female").
•	name: Name of the family member.
•	profileImg: URL to the profile image of the family member.
•	spouses: Array of objects representing the spouses of the family member.
•	siblings: Array of objects representing the siblings of the family member.
•	parents: Array of objects representing the parents of the family member.
•	children: Array of objects representing the children of the family member.

