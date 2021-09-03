#Question Number-3
..................

db.tweets.aggregate([{ $match:{} },
			{ $group: { _id:"$user.screen_name",tweets: { $sum: 1 } } },
			{ $sort: {tweets: -1}}])
			
			
			
#Question Number-4
..................

db.tweets.aggregate([{ $match:{} }, { $group: { _id:"$place.name",tweets: { $sum: 1 } } }, { $sort: {tweets: -1}}])

#Question Number-5
..................

db.tweets.aggregate([
   { $match: {} },
   { $group: { _id: "$in_reply_to_screen_name", replies: { $sum: 1 } } },
   { $sort: {replies:-1}}
 ])

#Question Number-6
..................

db.tweets.aggregate([
   { $match: {} },
   { $group: { _id: "$user.screen_name", tags_used: { $sum: { $size: "$entities.hashtags" } } } },
   { $sort: {tags_used:-1}}
 ])
 