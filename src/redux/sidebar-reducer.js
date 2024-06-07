const initialState = {
  friends: [
    {
      id: 1,
      name: "Serega",
      ava: "https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676296366191520185.png",
    },
    {
      id: 2,
      name: "Uliana",
      ava: "https://i.pinimg.com/236x/a4/01/42/a401427af3f46fbf774e56ab0723bab9.jpg",
    },
    {
      id: 3,
      name: "Maks",
      ava: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png",
    },
  ],
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
