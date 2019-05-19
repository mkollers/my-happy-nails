export interface UiState {
    facebook: {
        accessToken: string;
    };
    location: {
        iFrameUrl: string;
    };
    title: string;
};

export const INITIAL_UI_STATE: UiState = {
    facebook: {
        accessToken: undefined
    },
    location: {
        iFrameUrl: 'https://maps.google.de/maps/embed/v1/place?key=AIzaSyCNAFjhmK9AMKYH6ovmAtoE_8CjsnbLuqY&q=My+Happy+Nails'
    },
    title: 'Home',
};
