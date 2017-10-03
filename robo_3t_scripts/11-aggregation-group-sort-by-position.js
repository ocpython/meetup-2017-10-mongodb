// Get a result:
//  1) group - by position
//  2) sort - by count descending
db.player.aggregate(
    [
        {
            '$group': {
                '_id': '$positionFull',
                'count': {'$sum': 1}
            }
        },
//         {
//             '$sort': {
//                 'count': -1
//             }
//         }
    ]
);