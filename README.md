## Create a React Feed to design specs

Build a feed ui (like Instagram) using React to serve up data from data.json. We are looking at how you structure your components and use styles.

## Useful Files

- data.json => this represents a sample api response. You can use this as your test data and load in rather than make a full server
- Screenshot.png => an example instagram pic of a single feed.

## Requirements and Constraints

Post Header:

- Do not worry about the ellipsis menu items
- do not worry about navigating to a persons profile
- Ignore the sponsored field
- This component needs to show the users avatar, and full name

Post Footer:

- Ignore the comments button
- you can use any stock icons for liked and bookmarks. You do not need to match the sample image
- you only need to show if the user (based on the response) has liked and bookmarked it

Post Media:

- will only ever be one item
- can be one of an image, audio, video though this scenario will only have image

Post Caption and Title:

- Does not need to have any special rendering for mentions, hashtags
- Assume that this requirement will be updated in the future and we would want to assure the updates are minimal

Notes:

- Focus on how you would design the components.
- Assume that while we are not adding any navigation, there will be a need to reuse some parts of the feed to build a details page for posts.
