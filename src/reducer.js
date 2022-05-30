export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQDxoaZPSk6IF7Z759MT6EHa7PaqgrH7g4JeV2G2RrBhnmdv2-8L17cVhawHW0qAJ0XI6S5SlgfGQU-NS83du0AeUjdFnNU8nteu2JtqddiW1dSNqEtWQvMN2cFRQnLo-lbWiffyYDCUosjcaXymyDZIfKa-87fiV0V33V94FiGQNHhtAV0JC88rhrk"
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
