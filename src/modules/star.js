const CHANGE_CIRCLE = "star/CHANGE_CIRCLE";

export const changeCircle = (num) => ({
  type: CHANGE_CIRCLE,
  num,
});

const initialState = {
  days: [
    { day: "월", gray: 5, yellow: 0 },
    { day: "화", gray: 5, yellow: 0 },
    { day: "수", gray: 5, yellow: 0 },
    { day: "목", gray: 5, yellow: 0 },
    { day: "금", gray: 5, yellow: 0 },
    { day: "토", gray: 5, yellow: 0 },
    { day: "일", gray: 5, yellow: 0 },
  ],
  circles: ["gray", "gray", "gray", "gray", "gray"],
};

function star(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CIRCLE:
      return {
        ...state,
        circles: initialState.circles.map((circle, index) => {
          return index <= action.num ? "yellow" : "gray";
        }),
      };
    default:
      return state;
  }
}

export default star;
