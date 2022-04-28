export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null
    // token: "BQAmGWJIhcwkrrRYxyGXqsuqKWhTRHVULnAquw6LzgtUWHMZ_1Bc4Hg05a3xCOigO0vAftq59S-zcNGhQNYRQDyFnAm41wfSPq4t8K1W6Z2BrCWFeFHFjuJ-hfx2hoSucvT4Hr-zSZh4Zuva6SUJcwJY4LvWxpbWNU2_cUQZiw_e9GS1yjBr"
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
