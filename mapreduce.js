#Question Number-7
..................


function myMapper() { 
		if(this.entities.hashtags.length!=0)
		{
			for(x of this.entities.hashtags)
			{
				emit(x.text, 1);
			}
		}}

function myReducer(key, values) {
	return Array.sum( values );
}

db.tweets.mapReduce(myMapper, myReducer, { query: {}, out: "mroutput" })
db.mroutput.aggregate({$sort: {value: -1}})