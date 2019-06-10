const reducers = (state = { tweets : [] }, actions) =>
{
    if (actions.type === "add") {
        let newList = [...state];
        newList.push(actions.tweet)
        return newList
    }

    if (actions.type === "remove") {
        let newList = [...state];
        newList.splice(actions.tweetId, 1)
        return newList
    }
    
    return state;
};

export default reducers;