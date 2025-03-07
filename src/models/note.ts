export interface INote{
  _id: string,
  title: string,
  tags: string[],
  content: string,
  isArchived: boolean,
  lastEdited: string
}