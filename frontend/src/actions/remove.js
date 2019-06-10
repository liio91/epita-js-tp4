function remove(tweetId) {
    return { type: "remove", tweetId: tweetId };
}

export default remove;