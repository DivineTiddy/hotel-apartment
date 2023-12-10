`use strict`;
const closeSubcribe = document.querySelector(`.closeSubcribe`);
const sub = document.querySelector(`.sub`);
const subscribe = document.querySelector(`.subscribe`);
const apartmentType = document.querySelector(`.apartmentType`);
const livingRoom = document.querySelector(`.livingRoom`);
const livingroomtwo = document.querySelector(`.livingroomtwo`);
const bedroom = document.querySelector(`.bedroom`);
const dining = document.querySelector(`.dining`);
const photo_room = document.querySelector(`.photo_room`);

// The click function
// dining click functionality
dining.addEventListener(`click`, function () {
  photo_room.classList.add(`activelivingRoom`);
  photo_room.classList.remove(`activebedroom`);
  photo_room.classList.remove(`activelivingRoomTwo`);
  photo_room.classList.remove(`activelivingRooms`);
  apartmentType.textContent = `Dining`;
});
// bedroom click functionality
bedroom.addEventListener(`click`, function () {
  photo_room.classList.add(`activebedroom`);
  photo_room.classList.remove(`activelivingRoom`);
  photo_room.classList.remove(`activelivingRoomTwo`);
  photo_room.classList.remove(`activelivingRooms`);
  apartmentType.textContent = `Bedroom`;
});
//livingroomtwo functionality
livingroomtwo.addEventListener(`click`, function () {
  photo_room.classList.add(`activelivingRoomTwo`);
  photo_room.classList.remove(`activelivingRoom`);
  photo_room.classList.remove(`activebedroom`);
  photo_room.classList.remove(`activelivingRooms`);
  apartmentType.textContent = `Living roomII`;
});
// livingRoom functionality
livingRoom.addEventListener(`click`, function () {
  photo_room.classList.add(`activelivingRooms`);
  photo_room.classList.remove(`activelivingRoomTwo`);
  photo_room.classList.remove(`activelivingRoom`);
  photo_room.classList.remove(`activebedroom`);
  apartmentType.textContent = `Living room`;
});
// subcribe btn
subscribe.addEventListener(`click`, function () {
  sub.classList.add(`subscribeSection`);
})
//close Subcrib
closeSubcribe.addEventListener(`click`, function () {
  sub.classList.remove(`subscribeSection`);
})