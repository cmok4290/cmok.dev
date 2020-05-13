function genRandomInt(min=1, max=25) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const nodes = [
  "Me", "Spicy Food", "Bodybuilding", "Calisthenics", "Disc Golf",
  "Beer", "Bourbon", "Anime", "Manga", "Guitar", "Drums",
  "Software Engineering", "Artificial Intelligence",
  "Machine Learning", "Data Science", "Video Games", "Football",
  "Fantasy Football", "Weaving", "Cyber Security", "Bug Bounty",
  "Japanese", "Khmer", "Spanish", "Golf", "Soccer", "Basketball",
  "Cooking", "Linux", "C", "C++", "C#", "Python", "Java", "Ruby",
  "Javascript", "Vim"
];

const reverse = false;

const data = {
  "nodes": nodes.map((node, i) => ({ id: node, group: i })),
  "links": nodes.filter(id => id).map((id, i) => ({
    [reverse ? "target" : "source"]: id,
    [reverse ? "source" : "target"]: nodes[genRandomInt(1, i)],
    "value": genRandomInt()
  }))
};

export default data;
