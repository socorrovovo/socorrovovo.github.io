import { firebase } from '../firebase';

export interface ITool {
  $key?: string;
  name: string;
  url: string;
  about: string;
  like: string[];
  tags: string[];
  user: string;
  count?: number;

}

export class Tool {

  name: string;
  url: string;
  about: string;
  like: string[];
  tags: string[];
  user: string;
  createdAt = firebase.database.ServerValue.TIMESTAMP;

  constructor(
    name: string,
    url: string,
    about: string,
    like: string[],
    tags: string[],
    user: string
  ) {
    this.name = name;
    this.url = url;
    this.about = about;
    this.like = like;
    this.tags = tags;
    this.user = user;
  }
}
