// Goal: Solve Injustice
//
//  2) $project - Keep only the fields we're interested in

db.player.aggregate(
    [
        // $match - Filter out Goalkeepers
        {
            '$match': {
                'positionFull': {'$ne': 'Goalkeeper'}
            }
        },

        // $project - Keep only the fields we're interested in
//         {
//             '$project': {
//                 // Note: not required, _id is included by default
//                 '_id': true, 
//                 'name': {'$concat': ['$firstName', ' ', '$lastName']},
//                 'pos': '$positionFull', // Note: renaming
//                 'rating': true,
//                 'attributes': true
//             }
//         },
// 
        // $unwind - Convert N documents to 6*N documents (so we can do math on attributes)
//         {
//             '$unwind': '$attributes'
//         },

        // $group - $sum the value of the attributes (and pass the rest of the fields through the _id)
//         {
//             '$group': {
//                 '_id': {
//                     'id': '$_id',
//                     'rating': '$rating',
//                     'name': '$name',
//                     'pos': '$pos'
//                 },
//                 "sum_attributes": {
//                     '$sum': "$attributes.value"
//                 }
//             }
//         },

        // $project - Keep only the fields we're interested in
        // Note: this is our second $project operator !!!
//         {
//             '$project': {
//                 '_id': false, // turn off _id
// 
//                 'id': '$_id.id',
//                 'name': '$_id.name',
//                 'pos': '$_id.pos',
//                 'rating': '$_id.rating',
// 
//                 'avg_attributes': {"$divide": ['$sum_attributes', 6]},
//                 'rating_attribute_difference': {"$subtract": [{"$divide": ['$sum_attributes', 6]}, '$_id.rating']}
//             }
//         },

        // $match - Find anybody rated LESS than 75 that has a higher than 75 avg_attributes
        // Note: this is our second $match operator !!!
//         {
//             '$match': {
//                 'rating': {'$lt': 75},
//                 'avg_attributes': {'$gte': 75}
//             }
//         },

        // $sort - Based on the amount of injustice
        // Note: This step could be placed above previous "$match" step, but placing it here is more efficient with less
        //       data to sort
//         {
//             '$sort': {
//                 'rating_attribute_difference': -1
//             }
//         }
    ]
);