person.fullName.call(person1, "Oslo", "Norway"); // behind the scenses person.fullName("Oslo", "Norway"); - but changes the "this" to person1
// or instead:
const params = [];
if (talkingAboutOslo == true) {
  params.push("Oslo");
}
if (talkingAboutNorway == true) {
  params.push("Norway");
}
person.fullName.call(person1, ...params);




