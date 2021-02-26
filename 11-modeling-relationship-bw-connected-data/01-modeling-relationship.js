// all the example on which we have worked so are are the single self contained documents. but in real world the entities and concept that we work with have some kind of association.
// for example we have a Course object
// this Course object absolutely has an author. and author is more than just a name. we'll absolutely has a collection of authors. where we'll store the author documents. and in this document we have a properties like name, image, website and so on. here we'll see how to work with related objects.
// here we have two approaches

// 1- using reference  (Normalization)

// 2- Using embedded Documents (Denormalization)
// lets see hoe these works.
// in first approach we should have a saperate collection for storing our authors.
// for example
// we have an author object 



// let author = {
//     name: 'usman'
// }

// let course = {
//     author: 'id',
//     authors: ["id1", "id2", "...."]
// }


// we use the author'd id in in the course.
// here there is a misconception which has to be eradicated.
// in relational databases we have this concept of relationship which enforces data integrity. but in mongoDb and Nosql in general we dont have these types of relationships.
// if here we are setting id of author in course object. actually there is no asociation or no relationship between these two documents in the database. in other word we can set this to an invalid id. and mongo doesnot care about that. 
// take this example to the next level. a course might have multiple authors.


////////////Second approach (denormalization)
// instead of heaving two different documents, we can embed author's document inside the course document.

// let Course = {
//     author: {
//         name: 'Usman'
//     }
// }


// this approach is called denormalization
// each approach has its strengths and weaknesses. every approach really depends on the application and its querrying requirements.

//////////in short
// * We have to Trade off between Query Performance vs consistency*
// its mean is that
// in first approach if we want to change the author name. we just have to change the name in authors block. and this change will appear in all the courses which are connected with this. this is called CONSISTENCY;
// and every time we want to querry the course we also have to take extra querry for the  related authors. some time this exra querry is not a big deal. but in certain situations we have to make it sure that the query should have much fast as its possible.

// in second case we dont have an extra querry. because the author is inside the course object. but if we want to change the name of the author we have to update the name in different objects. if the update operation does not complete successfully than its possible we may have some course objects that are not updated. so the is the INCONSISTANT data.
// so the first approach gives us consistency and second approach gives us performance. that why we have to trade of between consistency and performance. we cant have both of them at the same time. so at every part of application we need to think about querries at that time. and we design our data base based on those queries. so these are the general principles. 

// we also have a third approach which is called a hybrid approach.

// imagine each author has fifty properties. we dont want to duplicate all those properties inside the each course object. so we can have a saperate collection of authors. we can embed author document inside the course document but not the complete representation of that author. perhaps we only want the name property/ so with hybrid approach our database will llook like this

// hybrid
let author = {
    name: "Usman"
    // 50 other properties
}
// now we have sourse document
let course = {
    author: {// here we have only two properties
        id: 'ref', // reference id to author document
        name: "usman"
        // here we stored two properties. these will help to querry the author object latter.
        // this approach is usefull if we have snaps of data at every point of time. for example imagine we are designing an  ecomerace website, there we have collections like orders, products, shopping carts and so on. and each order we have to store snapshot of product because we know the price of that product at given point in time. so we use the hybrid approach
        // so in short each approach depends on what type of website we are building. there is no right and wrong. each has its positive and negative points
    }
}