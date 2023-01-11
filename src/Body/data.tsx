

export const userData = (followers:any,following:any,Repositories:any) => {
    // console.log(followers,following,Repositories,'respositires')
return(
[
    {
        id: 1,
        heading: followers,
        sub: 'followers',
    },
    {
        id: 2,
        heading: following,
        sub: 'following',
    },
    {
        id: 3,
        heading: Repositories,
        sub: "Repositories",
    },
])
}