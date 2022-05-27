export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQAukpHzddVSALG7b8Gc1VjGqV9-ZD2G6HLZWl9VxKtfJklKr6R_71sBdHJPzXKh3q7FswbXYhPBglK75hbQGBzYMpJhqicvY-NKj_8S39DlcQ4f9i0VapZzUstunazxj1VJ5K35S3pBFaRThNYX9IBQMuEaIxxsPrMduOqnWdfnZo_KzgWUrsvqxkMZZnNAujYqv2LL"
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists
            };

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly
            };

        default:
            return state;
    }
};

export default reducer;
