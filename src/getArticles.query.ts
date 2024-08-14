interface Article {
  id: number;
  title: string;
  content: string;
}

export const getArticles = async (): Promise<Article[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 3000);
  });
};

const mockData = [
  {
    id: 1,
    title: "Article 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies ultrices, nunc nisi tincidunt nisi, eu tincidunt purus purus id nisl. Nullam euismod, nisl eget ultricies ultrices, nunc nisi tincidunt nisi, eu tincidunt purus purus id nisl. Nullam euismod, nisl eget ultricies ultrices, nunc nisi tincidunt nisi, eu tincidunt purus purus id nisl.",
  },
  {
    id: 2,
    title: "Article 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies ultrices, nunc nisi tincidunt nisi, eu tincidunt purus purus id nisl. Nullam euismod, nisl eget ultricies ultrices, nunc nisi tincidunt nisi, eu tincidunt purus purus id nisl. Nullam euismod, nisl eget ultricies ultrices, nunc nisi tincidunt nisi, eu tincidunt purus purus id nisl.",
  },
  {
    id: 3,
    title: "Article 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies ultrices, nunc nisi tincidunt nisi, eu tincidunt purus purus id nisl. Nullam euismod, nisl eget ultricies ultrices, nunc nisi tincidunt nisi, eu tincidunt purus purus id nisl. Nullam euismod, nisl eget ultricies ultrices, nunc nisi tincidunt nisi, eu tincidunt purus purus id nisl.",
  },
  {
    id: 4,
    title: "Article 4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies ultrices, nunc nisi tincidunt nisi, eu tincidunt purus purus id nisl. Nullam euismod, nisl eget ultricies ultrices, nunc nisi tincidunt nisi, eu tincidunt purus purus id nisl. Nullam euismod, nisl eget ultricies ultrices, nunc nisi tincidunt nisi, eu tincidunt purus purus id nisl.",
  },
];
